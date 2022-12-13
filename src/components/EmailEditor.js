import React, { useRef, useState, useEffect } from 'react'
import EmailEditor from "react-email-editor";
import GalleryModal from './GalleryModal';
import { getPhotoFiles, uploadPhotoFiles, getImageDimensions } from '../lib'
import SendMailModal from './SendMailModal'
import sample from "../sample.json";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

//import { MDBBtn, MDBCardFooter } from 'mdb-react-ui-kit'

const Index = () => {
    const emailEditorRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const [ isOpenMailModal, setIsOpenMailModal] = useState(false);
    const [photoFiles, setPhotoFiles] = useState([])
    const [rawFiles, setRawFiles] = useState([])
    const [loading, setLoading] = useState(false)
    const photosRef = useRef([]);
    const [mailContent, setMailContent] = useState();

    const toggleModal = () => {
        setIsOpen(() => !isOpen);
    };
    const  toggleMailModal = () => {
        setIsOpenMailModal(() => !isOpenMailModal)
    };

    useEffect(() => {
        const fetchData = async () => {
            const res = await getPhotoFiles();
            photosRef.current = res.data;
            setPhotoFiles(res.data)
        };
        fetchData();
        return () => { }
    }, []);

    const exportHtml = () => {
        if (emailEditorRef.current !== null) {
            emailEditorRef.current.editor.exportHtml((data) => {
                //console.log('data of exporthtml is ',data.html)
                localStorage.setItem("newsletter", JSON.stringify(data));
          
                if (data.html) {
          
                    setMailContent(data.html);
                    toggleMailModal();
                }
            });
        }
    };

    const saveDesign = () => {
        emailEditorRef.current.editor.saveDesign((design) => {
            console.log("saveDesign", JSON.stringify(design, null, 4));
            alert("Design JSON has been logged in your developer console.");
        });
    };

    const onDesignLoad = (data) => {
        //console.log("onDesignLoad", data);
    };



    const onLoad = () => {
        emailEditorRef.current.editor.addEventListener(
            "onDesignLoad",
            onDesignLoad
        );
        emailEditorRef.current.editor.loadDesign(sample);
    }

    function onReady() {
        // editor is ready
        const editorRef = emailEditorRef.current;
        if (editorRef !== null) {
            editorRef.registerCallback("selectImage", function (_data, done) {
                setIsOpen(true);
                //open the model
                done({
                    height: 20,
                    width: 10,
                    size: 400,
                    url: "https://images.pexels.com/photos/13870995/pexels-photo-13870995.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                });
            });

        }
    }

    const handleFileInputChange = async (e) => {
        const _files = e.target.files;
        if (_files) {
            const files = Array.from(_files);
            const _results = [];
            for (const file of files) {
                const result = await getImageDimensions(file);
                _results.push(result);
            }
            setRawFiles(_results);
        }
    }

    const handleFileUpload = async (e) => {
        e.preventDefault();
        try {
            if (rawFiles.length < 1) return null;
            setLoading(true);
            let i = 0;
            const formData = new FormData();
            for (const item of rawFiles) {
                let file = item.file;
                let width = item.height;
                let height = item.height;
                formData.append(`info_${i}`, JSON.stringify({
                    width, height
                }));
                formData.append("mediaFile", file);
                i++;
            }
            const res = await uploadPhotoFiles(formData);
            setLoading(false);
            if (res.error) {
                toggleModal();
                return alert(res.message);
            }
            setRawFiles([]);
            photosRef.current = [...res.data, ...photoFiles];
            setPhotoFiles((prev) => [...res.data, ...prev]);

        } catch (error) {
            setLoading(false);
        }
    }

    //init({
    //   id: 'editor-container',
    //   displayMode: 'email',
    ///  customJS: [
    //     './custom/custom',
    // ],
    //  })

    return (
        <>
            <div style={{ width: '80%', height: 'auto', margin: 'auto', marginButton: "50px" }}>
                <EmailEditor
                    editorId='editot_container'
                    ref={emailEditorRef}
                    onLoad={onLoad}
                    onReady={onReady}
                    // projectId={1071}
                    // displayMode={'email'}
                    //  options={{
                    //      customJS: [
                    //    './custom/custom',
                    // ]
                    // }}
                    // projectId={1234}
                    projectId={1071}
                    options={{
                        customJS: [
                            '.custom/custom.js',
                        ]
                    }}

                />

                <GalleryModal
                    isOpen={isOpen}
                    photoFiles={photoFiles}
                    toggleModal={toggleModal}
                    handleFileUpload={handleFileUpload}
                    handleFileInputChange={handleFileInputChange}
                    rawFiles={rawFiles}
                    loading={loading}

                />
                {/*send mail modal*/}
                <SendMailModal
                    {...{
                        toggleMailModal, mailContent,
                        isOpenMailModal
                    }} />


                <div >


                    <Stack direction="row" spacing={2} marginLeft={50} marginTop={5}>
                        <Button variant="contained" onClick={saveDesign}> Save Design</Button>
                        <Button variant="contained" onClick={() => exportHtml()}>Send Email To Client</Button>
                    </Stack>



                </div>
            </div>

        </>
    )

}

export default Index;

