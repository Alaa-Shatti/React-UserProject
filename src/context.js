import React, { Component } from 'react'

// Application de kullanilacak Context 
// Provider ve Consumer Dödürür 
const UserContext = React.createContext();

export class UserProvider extends Component {

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
        return (
           <UserContext.Provider value = {this.state}>
               {this.props.children}
           </UserContext.Provider>
        )
    }
}
const UserConsumer = UserContext.Consumer;

export default UserConsumer;

