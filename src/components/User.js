import React, { Component } from 'react'
import propTypes from 'prop-types'
import UserConsumer from "../context"
import axios from "axios";
import {Link} from "react-router-dom";


 class User extends Component {

    // normal state olusturma
     state = {
         isVisible : false
     }
     static defaultProps = {
        name : "Bilgi Yok",
        departmant : "Bilgi Yok",
        salary : "Bilgi Yok"
     }

     // state constructor yazilim sekli
     /*constructor (props){
         super(props);
         this.state = {
            isVisible : false
         }
        }*/

        // Error Function Yazilim Sekli (bind islemini otomatikolarak yapar)
        // Error Function Seklinde yazilmadiginda constructor kullnilir 
        /*
        ornek: normal Function
        constructor (props){
            super(props)
            this.onClickEvent = this.onClickEvent.bind(this);
        }
        // onClickEvent normal Function yazilim sekli
        onClickEvent (e) {
            console.log(string);
        }
        
        //nClickEvent Error Function yazilim sekli
        onClickEvent = (string, e) => {// e -> Event anlamina gelir
            console.log(string);
        }
        */
       // Error Function Yazilim sekli
       // Eger State true ise false'a donusecek false ise true ya donusecek
        onClickEvent = (e) => {// e -> Event anlamina gelir
            this.setState({
            isVisible : !this.state.isVisible
            
            })
            // isVisible isaretleyip control + option + l (turbo log eklentisi)
            //console.log("User -> onClickEvent -> isVisible", this.state.isVisible)

        }
        onDeleteUser = async (dispatch, e) => {
                const {id} = this.props;
                // Delete Request
                await axios.delete(`http://localhost:3004/users/${id}`);

                // Consumer Despatch gelecek
                dispatch({type : "DELETE_USER" , payload : id});
            }
        // Bir Kullanici Silerken Calisir
        // componentWillUnmount() {
        //     console.log("Component Will Unmount");
        // }
        
    render() {
        // Destructing
        const {id,name, departmant, salary} = this.props;
        const {isVisible} = this.state;
        return (
        <UserConsumer>
            {
                value => {
                    const {dispatch} = value;

                    return (
                        <div className = "col-md-8 mb-4">
                                                     { /* Dinamic CSS Tanimlama */ }
                            <div className = "card" style = {isVisible ? {backgroundColor : "#e5eefd", color : "blue"} : null}>
                                <div className = "card-header d-flex justify-content-between">
                                        <h4 className = "d-inline" onClick = {this.onClickEvent.bind(this)}>{name}</h4>
                                        <i onClick = {this.onDeleteUser.bind(this,dispatch)} className="fa fa-trash-o" aria-hidden="true" style = {{cursor : "pointer"}}></i>
                                </div>
                                {
                                    isVisible ? <div className = "card-body">
                                    <p className = " card-text">Maas : {salary}</p>
                                    <p className = " card-text">Departman : {departmant}</p>
                                    <Link to = {`edit/${id}`} className = "btn btn-primary btn-block">Update User</Link>
                                </div>  : null
                                }
                                
                            </div>
                            
                        </div>
                        
                    )

                }
            }

        </UserConsumer>
        )

        
    }
}
/*// static default veya asagidaki sekilde yazilir
User.defaultProps = {
    Name : "Bilgi Yok",
    Departmant : "Bilgi Yok",
    Salary : "Bilgi Yok"
}*/
User.propTypes = {
    name : propTypes.string.isRequired,
    salary : propTypes.string.isRequired,
    departmant : propTypes.string.isRequired,
    id : propTypes.string.isRequired
}
export default User;