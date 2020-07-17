import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Users from "./components/Users"
import  AddUser from "./components/AddUser"
import './App.css';

 class App extends Component{

      render() {

        return(

        <div className="container">
          <Navbar title = "Users App"/>
          <hr/>
          <AddUser/>
         <Users/>
        </div>
        
        
      );
    }
 }
 export default App;
 

