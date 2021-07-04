import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
   return(
      <Navbar fixed="bottom">
         <Navbar.Text className="justify-content-center">
            Users provided via <a href="https://randomuser.me/">Random User Generator</a>
         </Navbar.Text>
      </Navbar>
   )
}

export default Footer;