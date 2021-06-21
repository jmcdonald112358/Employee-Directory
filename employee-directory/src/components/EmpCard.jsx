/* eslint-disable react/jsx-no-undef */
import React from 'react';
import Card from 'react-bootstrap/Card';

function EmpCard(props) {
   return (
      <Card>
         <Card.Img variant="top" src={props.photo} />
         <Card.Body>
            <Card.Title>{props.givenName} {props.familyName}</Card.Title>
         </Card.Body>
         <ListGroup className="list-group-flush">
            <ListGroupItem>Email: {props.email}</ListGroupItem>
            <ListGroupItem>Phone: {props.phone}</ListGroupItem>
            <ListGroupItem>City: {props.city}</ListGroupItem>
         </ListGroup>
      </Card>
   );
}

export default EmpCard;