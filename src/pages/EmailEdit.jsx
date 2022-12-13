import React,{useRef} from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css"

import EmailEditor from '../components/EmailEditor'

function EmailEdit() {

  return (
    <>
      <div className="emaileditor">
        <header className="App-header">
        Email Template Builder
        </header>
        <EmailEditor  />
        
      </div>
    </>

  );
}

export default EmailEdit;