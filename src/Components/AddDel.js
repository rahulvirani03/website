import React from 'react'
import {Button } from 'react-bootstrap'
import {MDBCard} from 'mdbreact'
import './form.css'
import {Typography} from '@material-ui/core'
export default function AddDel() {


    return (
       
           <MDBCard className="center2">
               <Typography variant="h5">Activities</Typography>
               <br></br>
           <Button href="/DataUpload">Upload Data</Button>
           <br></br>
           <Button href="/List">Delete Data</Button>
           <br></br>
           </MDBCard>
          
    )
}
