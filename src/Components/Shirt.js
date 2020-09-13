import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';
import {Card} from 'react-bootstrap'

const Shirt = ({ setSelectedImg,setSelectedText,setSelectedPrice}) => {

  const { docs } = useFirestore('Shirt');
    console.log(docs);
    function datainfo(url45)
    {
        
          let name,url,price,name1;
          name=url45;
          console.log(name);
          let doc;
          doc= docs.find(doc => doc.url ===  name);
          console.log(doc);
          url=doc.url;
          name1=doc.setname1;
          price=doc.setprice;
          console.log(url);
          console.log(name1)
          console.log(price)
          setSelectedImg(url);
          setSelectedText(name1);
          setSelectedPrice(price)
        
          
    }
  return (
    <div className="grid">
      {docs && docs.map(doc => (
        <motion.div  whileHover={{ opacity: 4 }}s
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }} 
        onClick={()=> datainfo(doc.url)}>


 <Card style={{ width: '20rem'}} className="box">
       <Card.Img  src={doc.url} className="boximg"></Card.Img>
       <Card.Text className="texta">{doc.setname1} </Card.Text>
</Card>


</motion.div>
      ))}

    </div>
  )
}

export default Shirt;