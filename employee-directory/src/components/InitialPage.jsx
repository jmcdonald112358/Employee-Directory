/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import API from "../utils/API";
import Header from './Header';
import EmpCard from './EmpCard';
import Footer from "./Footer";

class InitialPage extends Component {
   //set initial state to store relevant info
   state = {
      search: "",
      employees: [],
      err: ""
   };

   //run API call
   componentDidMount() {
      API.getRandomUser()
      .then(res => {
         this.setState({
            employees: res.data.results.map((x, i) => ({
               givenName: x.name.first,
               familyName: x.name.last,
               photo: x.picture.large,
               email: x.email,
               phone: x.phone,
               city: x.location.city,
               key: i
            })),
         });
      })
      .catch(err => console.log(err));
   }

   //function to search employees for existing entries and update list
   empSearch = (filter) => {
      const filtered = this.state.employees.filter((emp) => {
         let values = Object.values(emp).join('').toLowerCase();
         return values.indexOf(filter.toLowerCase()) !== -1;
      });
      this.setState({ employees: filtered });
   };

   //update state for input
   input = (x) => {
      this.setState({
         search: x.target.value,
      });
   }

   //search function for submit button
   btnSubmit = (x) => {
      x.preventDefault();
      this.empSearch(this.state.search);
   };

   render() {
      return (
         <Container>
            {/* header */}
            <Row className="justify-content-center">
               <h1 className="my-4 text-center">Employee Directory</h1>
               <Header 
                  value={this.state.search}
                  input={this.input}
                  btnSubmit={this.btnSubmit}
               />
            </Row>

            {/* main table to display employee cards */}
            <Row className="justify-content-center">
               {[...this.state.employees].map((x) => (
                  <EmpCard 
                     photo={x.photo}
                     givenName={x.givenName}
                     familyName={x.familyName}
                     email={x.email}
                     phone={x.phone}
                     city={x.city}
                     key={x.key}
                  />
               ))};
            <Footer />
            </Row>
         </Container>
      );
   };
};

export default InitialPage;