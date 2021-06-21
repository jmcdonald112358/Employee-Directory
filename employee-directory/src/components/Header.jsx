import React from 'react';
import '../index.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Search(props) {
   return (
      <Form inline>
         <Form.Label htmlFor="search" srOnly>Search</Form.Label>
         <Form.Control 
            as="input"
            className="mb-2 mr-sm-2"
            id="search"
            type="text"
            placeholder="Search employees..."
            onChange={props.input}
            value={props.value}
         />
         <Button variant="success" type="submit" className="btn mb-2" onClick={props.btnSubmit}>
            Search
         </Button>
      </Form>
   )
}

export default Search;