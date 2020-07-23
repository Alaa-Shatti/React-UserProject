import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Users from "./components/Users";
import  AddUser from "./components/AddUser";
import './App.css';
// import Test from "./components/Test";

 class App extends Component{

      render() {

        return(

        <div className="container">
          {/* 
          Test Clasini cagirma yazim sekli
          <Test test = "deneme"  /> 
          */}
          <Navbar title = "Users App"/>
          <hr/>
          <AddUser/>
         <Users/>
        </div>
        
        
      );
    }
 }
 export default App;
 

