/* eslint-disable react/jsx-no-undef */
import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function EmpCard(props) {
   return (
      <Card>
         <Card.Img variant="top" src={props.photo} />
         <Card.Body>
            <Card.Title>{props.givenName} {props.familyName}</Card.Title>
         </Card.Body>
         <ListGroup className="list-group-flush">
            <ListGroup.Item>Email: {props.email}</ListGroup.Item>
            <ListGroup.Item>Phone: {props.phone}</ListGroup.Item>
            <ListGroup.Item>City: {props.city}</ListGroup.Item>
         </ListGroup>
      </Card>
   );
}

export default EmpCard;