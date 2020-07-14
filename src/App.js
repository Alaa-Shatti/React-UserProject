import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import User from "./components/User"
import './App.css';

 class App extends Component{

      render() {

        return(

        <div className="container">
          <Navbar title = "Users App"/>
          <hr/>
          <User
          Salary = "5000 TL"
          Name = "Alaa Shatti"
          Departmant = "Bilisim"
          />
          <User
          Salary = "6000 TL"
          Name = "Remzi Gunes"
          />
        </div>
        
        
      );
    }
 }
 export default App;
 

