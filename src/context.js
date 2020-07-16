import React, { Component } from 'react'

// Application de kullanilacak Context 
// Provider ve Consumer Dödürür 
const UserContext = React.createContext();

const reducer = (state,action) => {
    switch(action.type){
        case "DELETE_USER":
            return {
                ...state,
                users : state.users.filter(user => action.payload !== user.id) 
            }
        default :
            return state
    }
}

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
          ],
          despatch : actoin => {
              // Guncellem işlemi gerçekleştiriliyor 
              this.setState(state => reducer(state,actoin) )
          }

    
       }

    render() {
        return (
            // component
           <UserContext.Provider value = {this.state}>
               {this.props.children}
           </UserContext.Provider>
        )
    }
}
const UserConsumer = UserContext.Consumer;

export default UserConsumer;

