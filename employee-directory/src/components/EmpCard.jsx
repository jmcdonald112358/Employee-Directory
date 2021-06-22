/* eslint-disable react/jsx-no-undef */
import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function EmpCard(props) {
   return (
      <Card style={{ width: '18rem' }} className="mb-2 mx-2">
         <Card.Img variant="top" src={props.photo} />
         <Card.Body>
            <Card.Title>{props.givenName} {props.familyName}</Card.Title>
            {/* <Card.Text>
               Email: {props.email}
               Phone: {props.phone}
               City: {props.city}
            </Card.Text> */}
         </Card.Body>
         <ListGroup className="list-group-flush" horizontal="true">
            <ListGroup.Item>Email: {props.email}</ListGroup.Item>
            <ListGroup.Item>Phone: {props.phone}</ListGroup.Item>
            <ListGroup.Item>City: {props.city}</ListGroup.Item>
         </ListGroup>
      </Card>
   );
};

export default EmpCard;