import React, { Component } from 'react'
import {Container} from 'react-bootstrap'
import './back.css'
import Back from './Back';

export default class Home extends Component {
    render() {
        return (
           <div>
               

                <h3 className="h1style"> Whipple Shirts</h3>
               <Container  className="flex1" fluid>
             <div>
                 <p>
                     Find the best fit for every occassion with the avalabity of colors that are your favourite
                 </p>
                 </div>
               </Container>
               <Container className="justify-content-md-center">
               <Back/>
               </Container>
              
            </div>
        )
    }
}
