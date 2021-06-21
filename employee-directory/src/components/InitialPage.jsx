/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import API from "../utils/API";
import Header from './Header';
import EmpCard from './EmpCard';

class InitialPage extends Component {
   //set state

   //run API call

   //function to search employees for existing entries and update list

   //update state

   //search function for submit button

   render() {
      return (
         <div className="container">
            {/* header */}
            <div className="row">
               <h1>Employee Directory</h1>
               <Header />
            </div>

            {/* main table to display employee cards */}
            <div className="row">
               <EmpCard />
            </div>
         </div>
      )
   }
};

export default InitialPage;