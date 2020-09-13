import React from 'react';

import { motion } from 'framer-motion';

const ProgressBar = ({ file, setFile,progress, setProgress}) => {
//let progress=0;
 // for(let i=0;i<350;i++)
   // {
     
    
  
   

  return (
    
    <motion.div className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress+ '%' }}
    ></motion.div>
  );
} 

export default ProgressBar;