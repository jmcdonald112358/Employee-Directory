/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import API from "../utils/API";
import Header from './Header';
import EmpCard from './EmpCard';

class InitialPage extends Component {
   //set initial state to store relevant info
   state = {
      search: "",
      employees: [],
      err: ""
   };

   //run API call
   componentDidMount() {
      API.search()
      .then(res => {
         console.log(res);
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
      console.log('Search', filter);
      const filtered = this.state.employees.filter((emp) => {
         let values = Object.values(emp).join('').toLowerCase();
         return values.indexOf(filter.toLowerCase()) !== -1;
      });
      this.setState({ employees: filtered });
   };

   //update state for input
   input = (x) => {
      this.setState({
         [x.target.name]: x.target.value
      });
      console.log(this.state.search);
   }

   //search function for submit button
   btnSubmit = (x) => {
      x.preventDefault();
      console.log(this.state.search, x);
      this.empSearch(this.state.search);
   };

   render() {
      return (
         <Container>
            {/* header */}
            <Row>
               <h1>Employee Directory</h1>
               <Header />
            </Row>

            {/* main table to display employee cards */}
            <Row>
               <EmpCard />
            </Row>
         </Container>
      )
   }
};

export default InitialPage;