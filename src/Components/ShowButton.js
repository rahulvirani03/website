import React from 'react'
import {Button,Alert} from 'react-bootstrap';
import { useHistory } from "react-router";
import './btn.css'
export default function ShowButton() {
    let history=useHistory();
    
    function gotoHome()
    {
        history.push('/Home');
    }
    return (
        <div>
              <Alert  className="alert1" variant="success">  
                     Product Uploaded !
              </Alert>
              <Button variant="primary" className="alert" onClick={gotoHome}>Home</Button>
        </div>
    )
}
