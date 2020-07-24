import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Users from "./components/Users";
import  AddUser from "./components/AddUser";
import './App.css';
import {BrowserRouter as Router,Route} from "react-router-dom";
// import Test from "./components/Test";

const Home = () => {
  return(
    <h3>Home Page</h3>
  )
}
const About = () => {
  return(
    <h3>About Page</h3>
  )
}
 class App extends Component{

      render() {

        return(
          <Router>

            <div className="container">
              <Navbar title = "Users App"/>
              <hr/>
              <Route exact path = "/" component = {Users}/>
              <Route exact path = "/add" component = {AddUser}/>
              {/* 
              Test Clasini cagirma yazim sekli
              <Test test = "deneme"  /> 
              */}

              {/* <Navbar title = "Users App"/>
              <hr/>
              <AddUser/>
            <Users/> */}
            </div>
          </Router>
        
        
      );
    }
 }
 export default App;
 

