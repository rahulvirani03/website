import React from 'react';
import { motion } from 'framer-motion';
import './Modal.css'
const Modal = ({ setSelectedImg, selectedImg,setSelectedText,selectedText,setSelectedPrice,selectedPrice}) => {
  
  //cosnt Something = () => 
  
 
  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop') || e.target.classList.contains('styled')) {
      setSelectedImg(null);
      setSelectedText(null);
      setSelectedPrice(null);
    }
  }

  return (
    
    <motion.div className="backdrop" onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}>
     
      <motion.img src={selectedImg} alt="enlarged pic" 
        initial={{ y: "130vh" }}
        animate={{ y: 1}}
     /> 
     
      <h3 className="styled"  initial={{ y: "-100vh" }}
      animate={{ y: 1 }}>Name:{selectedText}</h3> 
      
       <h3 className="styled"  initial={{ y: "-100vh" }}
      animate={{ y: 1 }}>Price:{selectedPrice}</h3> 
      </motion.div>
     
  )
}

export default Modal;