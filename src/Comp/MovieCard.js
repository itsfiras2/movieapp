import React,{useState} from 'react';
import Card from 'react-bootstrap/Card'
import { Button , ListGroup } from 'react-bootstrap';
import '../App.css';
import Rating from '../Rating/Rating'


const MovieCard = ({film} , { key} ) => {
   

 




    return (

<div>






 <Card style={{ width: '15rem' , marginBottom : '50px' , marginLeft:'550px' }}  >
  
  <Card.Body style={{  padding:'0px', flexDirection: 'row' }}>
  <Card.Img variant="top" src={film.img} />
    <Card.Header>{film.name}</Card.Header>
      <ListGroup variant="flush">
     
        <ListGroup.Item>type : {film.type}</ListGroup.Item>
        <ListGroup.Item> <Rating rate={film.rate} /> </ListGroup.Item>
         </ListGroup>
  
  </Card.Body>
</Card>  
          
    </div>

    );
}

export default MovieCard;
