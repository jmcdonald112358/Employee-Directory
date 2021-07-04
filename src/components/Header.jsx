import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

function Search(props) {
   return (
      <div style={{ width: '25vw' }}>
         <InputGroup className="mb-3">
            <Form.Control 
               as="input"
               className="mb-2 mr-sm-2"
               id="search"
               type="text"
               placeholder="Search employees..."
               onChange={props.input}
               value={props.value}
            />
            <InputGroup.Append>
               <Button variant="success" type="submit" className="btn mb-2" onClick={props.btnSubmit}>
                  Search
               </Button>
            </InputGroup.Append>
         </InputGroup>
      </div>
   );
}

export default Search;