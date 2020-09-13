import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';
import {Card} from 'react-bootstrap'
import './Box.css';



const ImageGrid = ({ setSelectedImg,setSelectedText }) => {

  const { docs } = useFirestore('cards');
    console.log(docs);
  return (
    <div className="grid">
      {docs && docs.map(doc => (
        <motion.div  whileHover={{ opacity: 4 }}s
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }} 
        onClick={()=>setSelectedImg(doc.url)} >
        
 <Card style={{ width: '18rem'}} className="box" onClick={() => setSelectedText(doc.setname1)} >
       <Card.Img  src={doc.url} className="boximg" 
      ></Card.Img>
       <Card.Text className="texta">{doc.setname1}  </Card.Text>
</Card>

</motion.div>
      ))}

    </div>
  )
}

export default ImageGrid;