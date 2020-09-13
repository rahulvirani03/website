import React, {useState} from 'react'
import Shirt from './Shirt'
import Modal from './Modal'
export default function Combine1() {
    const [selectedImg, setSelectedImg] = useState(null);
    const [selectedText, setSelectedText] = useState(null);
    const [selectedPrice,setSelectedPrice]= useState(null);

    console.log(selectedImg);
    return (
        <div>
            <Shirt setSelectedImg={setSelectedImg} setSelectedText={setSelectedText} setSelectedPrice={setSelectedPrice}
             />
          { selectedImg && (
             <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} selectedText={selectedText} setSelectedText={setSelectedText} selectedPrice={selectedPrice} setSelectedPrice={setSelectedPrice}/>
      )}
        </div>
    )
}
