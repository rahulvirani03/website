import React from 'react'
import {Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Box.css'
import './Home.css'
function CustomCard() {
  const cardInfo=[
      
      {image:"https://i.ibb.co/R3xWssw/Kohli-parents.jpg",title:"Virat Kohli"},
      {image:"https://i.ibb.co/R3xWssw/Kohli-parents.jpg",title:"Virat Kohli"},
      {image:"https://i.ibb.co/R3xWssw/Kohli-parents.jpg",title:"Virat Kohli"},
      {image:"https://i.ibb.co/R3xWssw/Kohli-parents.jpg",title:"Virat Kohli"},
      {image:"https://i.ibb.co/R3xWssw/Kohli-parents.jpg",title:"Virat Kohli"},
      {image:"https://i.ibb.co/R3xWssw/Kohli-parents.jpg",title:"Virat Kohli"},
      {image:"https://i.ibb.co/R3xWssw/Kohli-parents.jpg",title:"Virat Kohli"},
      {image:"https://i.ibb.co/R3xWssw/Kohli-parents.jpg",title:"Virat Kohli"},
      {image:"https://i.ibb.co/R3xWssw/Kohli-parents.jpg",title:"Virat Kohli"},
      {image:"https://i.ibb.co/R3xWssw/Kohli-parents.jpg",title:"Virat Kohli"},
      {image:"https://i.ibb.co/R3xWssw/Kohli-parents.jpg",title:"Virat Kohli"},
      {image:"https://i.ibb.co/R3xWssw/Kohli-parents.jpg",title:"Virat Kohli"},
      {image:"https://i.ibb.co/R3xWssw/Kohli-parents.jpg",title:"Virat Kohli"},
      {image:"https://i.ibb.co/R3xWssw/Kohli-parents.jpg",title:"Virat Kohli"}    
  ];
  const renderCard=(card,index)=>
  {
    return(
      <Card style={{ width: '18rem' }} className="box">
      <Card.Img variant="top" src={card.image} />
      <Card.Body>
        <Card.Title className="texta">{card.title}</Card.Title>
      </Card.Body>
    </Card>
   
    )
  }
     return <div className="grid">{cardInfo.map(renderCard)}</div>
}
   
        
    


export default CustomCard
