import React, {useState} from 'react'
import ImageGrid from './ImageGrid'
import Modal from './Modal'
export default function Combine() {
    const [selectedImg, setSelectedImg] = useState(null);
    const [selectedText, setSelectedText] = useState(null);
    console.log(selectedImg);
    console.log(selectedText);
    return (
        <div>
            <ImageGrid setSelectedImg={setSelectedImg} setSelectedText={setSelectedText}
             />
          { selectedImg && (
             <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} selectedText={selectedText} setSelectedText={setSelectedText} />
      )}
        </div>
    )
}
