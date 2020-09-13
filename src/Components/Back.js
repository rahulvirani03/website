import React from 'react'
import "./back.css"
import logo from './shirtback1.jpg'
import logo1 from './tshirtback.jpg'
import {motion} from 'framer-motion'
import './form.css'
import history from './history'
import { Container } from 'react-bootstrap'
export default function Back() {

   
    function datahandle()
    {
            history.push('/Shirt')
            window.location.reload(true);
    }

    function datahandle1()
    {
            history.push('/Tshirt')
            window.location.reload(true);
    }
    
   

    
    return (
        <div className="just">
              <Container className="justify-content-md-center"> 
              <motion.img src={logo} className="flex" alt="pehla" onClick={() => datahandle()} whileHover={{ scale: 1.05}}></motion.img>
              <motion.img src={logo1} className="flex" alt="dusra" onClick={() => datahandle1()} whileHover={{ scale: 1.05}}></motion.img>
              <motion.img src={logo} className="flex" alt="pehla" whileHover={{ scale: 1.05}}></motion.img>
              <motion.img src={logo1} className="flex" alt="dusra" whileHover={{ scale: 1.05}}></motion.img>
              </Container> 
             
        </div>
    )
}
