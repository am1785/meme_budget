import "bootstrap/dist/css/bootstrap.min.css";
import { BiScan } from 'react-icons/bi';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button  from 'react-bootstrap/Button';
import Webcam from "react-webcam";
import React, { useState } from "react";
import ReactDOM from 'react-dom';

function Scan () {
    const WebcamComponent = () => <Webcam />;
    const [camEnabled, setCamEnabled] = useState(false);

    function enableCam(){
      setCamEnabled(enabled => !enabled);
    }

      // ReactDOM.render(<WebcamCapture />, document.getElementById("useWebcam"));

    return <>
    <div className='container cartItem'>
        <div className='row justify-content-between'>
        <div className='container'>
        <div className='row justify-content-evenly align-items-center'>
            <div className='col-12'>
                <h2 id="Scan">Scan Item</h2>
            </div>
            <div className="col-12">
            <InputGroup className="mb-3">
            <FormControl
            placeholder="Enter serial number here"
            aria-label="serial number input"
            aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
                Apply
            </Button>
            </InputGroup>
            </div>
        </div>
        </div>
        <div id="useWebcam"></div>
        {camEnabled ? (<>
          <div className='container'>
          <div className='row justify-content-evenly align-items-center'>
          <Webcam className="col-12"/>
          <div className='col-12 mt-2 text-center'><Button onClick={enableCam} variant="outline-secondary" id="button-addon2">Cancel</Button>
          </div></div></div></>) : <BiScan onClick={() =>enableCam()} id="ScanIcon"/>}
        </div>
    </div>
    </>
}

export default Scan;