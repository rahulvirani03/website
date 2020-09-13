import React, {useState} from 'react'
import Tshirt from './Tshirt'
import Modal from './Modal'
export default function Combine2() {
    const [selectedImg, setSelectedImg] = useState(null);
    const [selectedText, setSelectedText] = useState(null);
    const [selectedPrice,setSelectedPrice]= useState(null);

    console.log(selectedImg);
    return (
        <div>
            <Tshirt setSelectedImg={setSelectedImg} setSelectedText={setSelectedText} setSelectedPrice={setSelectedPrice}
             />
          { selectedImg && (
             <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} selectedText={selectedText} setSelectedText={setSelectedText} selectedPrice={selectedPrice} setSelectedPrice={setSelectedPrice}/>
      )}
        </div>
    )
}
