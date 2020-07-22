import React, { Component } from 'react'
import propTypes from 'prop-types'
import UserConsumer from "../context"


 class User extends Component {

    // normal state olusturma
     state = {
         isVisible : false
     }
     static defaultProps = {
        Name : "Bilgi Yok",
        Departmant : "Bilgi Yok",
        Salary : "Bilgi Yok"
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
        onDeleteUser = (dispatch, e) => {
                const {id} = this.props;

                // Consumer Despatch gelecek
                dispatch({type : "DELETE_USER" , payload : id});
            }
        
    render() {
        // Destructing
        const {Name, Departmant, Salary} = this.props;
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
                                        <h4 className = "d-inline" onClick = {this.onClickEvent.bind(this)}>{Name}</h4>
                                        <i onClick = {this.onDeleteUser.bind(this,dispatch)} className="fa fa-trash-o" aria-hidden="true" style = {{cursor : "pointer"}}></i>
                                </div>
                                {
                                    isVisible ? <div className = "card-body">
                                    <p className = " card-text">Maas : {Salary}</p>
                                    <p className = " card-text">Departman : {Departmant}</p>
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
    Name : propTypes.string.isRequired,
    Salary : propTypes.string.isRequired,
    Departmant : propTypes.string.isRequired,
    id : propTypes.string.isRequired
}
export default User;