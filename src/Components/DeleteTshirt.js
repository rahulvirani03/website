import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';
import {Card} from 'react-bootstrap'
import { projectFirestore } from '../firebase/config';
const DeleteTshirt = (collection) => {

  const { docs } = useFirestore('Tshirt');
  
function datainfo(url45)
{
        let name;
          name=url45;
         console.log(name);
         const ref= projectFirestore.collection('Tshirt').doc(name).delete();
        console.log(ref);
       
};    
         
       
   
  return (
    <div className="grid">
      
       
      {docs && docs.map(doc => (
        <motion.div  whileHover={{ opacity: 4 }}s
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }} 
        onClick={() => datainfo(doc.id)}>


       
 <Card style={{ width: '22rem'}} className="box">
       <Card.Img  src={doc.url} className="boximg"></Card.Img>
       <Card.Text className="texta">{doc.setname1} </Card.Text>
</Card>
</motion.div>
      ))}
       
    </div>
  )
}

export default DeleteTshirt;