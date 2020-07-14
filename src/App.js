import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Users from "./components/Users"
import './App.css';

 class App extends Component{
   state = {

    users : [
      {
        id : 1,
        Name : "Alaa Shatti",
        Departmant : "Bilisim",
        Salary : "5000 TL"

    },
      {
        id : 2,
        Name : "Remzi Gunes",
        Departmant : "Bilisim",
        Salary : "6000 TL"

      },
      {
        id : 3,
        Name : "Mustafa Turkmen",
        Departmant : "Bilisim",
        Salary : "7000 TL"

      }
      ]

   }

      render() {

        return(

        <div className="container">
          <Navbar title = "Users App"/>
          <hr/>
         <Users users = {this.state.users}/>
        </div>
        
        
      );
    }
 }
 export default App;
 

