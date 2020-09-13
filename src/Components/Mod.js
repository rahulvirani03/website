import React from 'react';
import { motion } from 'framer-motion';
import './Modal.css'

const Mod = ({ setSelectedImg, selectedImg,setSelectedText,selectedText,setSelectedPrice,selectedPrice}) => {
  
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
      <h1 className="styled"  initial={{ y: "-100vh" }}
      animate={{ y: 1 }}>{selectedText}</h1> 
       <h1 className="styled"  initial={{ y: "-100vh" }}
      animate={{ y: 1 }}>{selectedPrice}</h1> 
      
      </motion.div>
     
  )
}

export default Mod;