import React ,{useState} from "react";
import {
      MDBBtn, MDBModal,MDBModalContent,MDBModalFooter,MDBSpinner,MDBModalDialog,MDBModalHeader, MDBModalTitle, MDBModalBody
} from "mdb-react-ui-kit"

import {sendNewsLetter, validateEmail} from "../lib";

const verifyEmails =(emails)=>{
    const _emails = emails.split(",");
    _emails.forEach((e) => {
        if(!validateEmail(e)) return false;
        
    });
    return true;
};


 const SendMailModal=({toggleMailModal, mailContent, isOpenMailModal})=>{
    //console.log("sendContent Props im sendmailmodal  >>>>>>",mailContent)
    const [loading, setLoading]= useState(false);
    const [subject , setSubject]= useState("");
    const [emails, setEmails]= useState("");
    const handleSubjectInput=(e)=>{
        setSubject(e.target.value);
    };
    const handleEmailInput =(e)=>{
        setEmails(e.target.value);
    }

    const handleSubmit= async(e)=>{
        e.preventDefault();
        try{
            if(subject.trim().length<10){
                return alert ("Enter Email Subject");
            }
            if(emails.trim().length<10){
                return alert("Enter a valid email or email separator");
            }
            if(!verifyEmails(emails)){
                return alert ("Please , enter only valid email address");
            }
            //const data= localStorage.getItem('newsletter');
            if(!mailContent){
                return alert("You can't send empty content");
            }
            setLoading(true);
            const res= await sendNewsLetter({
                subject,mailContent, emails
            
            });
            setSubject("")
            setEmails("");
            setLoading(false);
          //  console.log("send email modal res >>>>>>",res)
            alert(res.message)
        }catch(error){}
    } ;
    return(
        <>
        <MDBModal staticBackdrop={true} 
        show={isOpenMailModal} tabIndex="-1"
        
        >
            <MDBModalDialog size="md" style={{marginTop:'10%'}}>
                <MDBModalContent>
                    <MDBModalHeader>
                        <MDBModalTitle>
                            Send Email
                        </MDBModalTitle>
                        <MDBBtn
                        className="btn-close"
                        color="none"
                        onClick={()=>toggleMailModal()}
                        >

                        </MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody>
                        <form>
                            <label  htmlFor="formFileSm"
                            className="form-label">
                                Enter Mail Subject
                            </label>
                            <input 
                            className="form-control from-control-sm"
                            id="formFileSm"
                            placeholder="Enter mail subject"
                            onChange={(e)=>handleSubjectInput(e)}
                            />
                            <div className="mt-2 mb-2">
                                <label htmlFor="formEmail"
                                className="form-label">
                                    Enter Email Address(s)
                                </label>
                                <br/>
                                <small>
                                    You can enter more than one email address separated by comma 
                                </small>
                                <textarea
                                id="formEmail"
                                placeholder="Enter Email Adress(s)"
                                onChange={(e)=>handleEmailInput(e)}
                                className="form-control"
                                >

                                </textarea>

                            </div>
                            <div className="d-block text-center mt-3"
                          >
                            {
                                loading && (
                                    <MDBSpinner className="mx-2" color="info">
                                        <span className="visually-hidden">
                                            loading...
                                        </span>

                                    </MDBSpinner>
                                )
                            }
                            <MDBBtn  
                            disabled={loading}
                            color="info"
                            onClick={(e)=>handleSubmit(e)}
                            >
                            Send Mail
                            </MDBBtn>
                            </div>
                        </form>
                        <hr/>

                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color="danger" onClick={()=>toggleMailModal()}>
                            Close
                        </MDBBtn>
                    </MDBModalFooter>
                </MDBModalContent>
            </MDBModalDialog>

        </MDBModal>
        
        </>
    )
}

export default SendMailModal;
