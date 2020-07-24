import React, { Component } from 'react';
import Navbar from "./layout/Navbar";
import Users from "./components/Users";
import  AddUser from "./components/AddUser";
import './App.css';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import NotFoundException from "./pages/NotFoundException";
import Contribute from './pages/Contribute';

// import Test from "./components/Test";

// const Home = () => {
//   return(
//     <h3>Home Page</h3>
//   )
// }
// const About = () => {
//   return(
//     <h3>About Page</h3>
//   )
// }
 class App extends Component{

      render() {

        return(
          <Router>

            <div className="container">
              <Navbar title = "Users App"/>
              <hr/>
              <Switch>
              <Route exact path = "/" component = {Users}/>
              <Route exact path = "/add" component = {AddUser}/>
              <Route exact path = "/github" component = {Contribute}/>
              <Route component = {NotFoundException}/>
              </Switch>
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
 

