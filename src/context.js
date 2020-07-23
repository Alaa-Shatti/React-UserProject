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
        case "ADD_USER":
            return{
                ...state,
                users : [...state.users,action.payload]
            }
        default :
            return state
    }
}

export class UserProvider extends Component {

    state = {

        users : [
            // Bu Veriler API den aliniyor api -> db.json
        //   {
        //     id : "unique-1",
        //     Name : "Alaa Shatti",
        //     Departmant : "Bilisim",
        //     Salary : "5000 TL"
    
        // },
        //   {
        //     id : "unique-2",
        //     Name : "Remzi Gunes",
        //     Departmant : "Bilisim",
        //     Salary : "6000 TL"
    
        //   },
        //   {
        //     id : "unique-3",
        //     Name : "Mustafa Turkmen",
        //     Departmant : "Bilisim",
        //     Salary : "7000 TL"
    
        //   }
          ],
          dispatch : actoin => {
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

