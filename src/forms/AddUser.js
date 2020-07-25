import React, { Component } from 'react'
import posed from 'react-pose';
import UserConsumer from "../context";
//var uniqid = require('uniqid');
import axsios from "axios";

const Animation  = posed.div({
     visible  : {
         opacity : 1,
         applyAtStart : {
             display : "block"
         }
     },
     hidden : {
         opacity : 0,
         applyAtEnd : {
             display : "none"
         }
     } 
});

class AddUser extends Component {
    state = {
        visible : false,
        name : "",
        departmant : "",
        salary : ""
    }
    changeVisibility = (e) => {
        this.setState({
            visible : !this.state.visible
        })
    }
    // changeName = (e) => {
    //     this.setState({
    //         Name : e.target.value
    //     })
    // }
    // changeDepartmant = (e) => {
    //     this.setState({
    //         Departmant : e.target.value
    //     })
    // }
    // changeSalary = (e) => {
    //     this.setState({
    //         Salary : e.target.value
    //     })
    // }

    // Text lerin icerisindeki degerleri almak icin kullanilan Method
    changeInput = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    addUser = async (dispatch, e) => {
        e.preventDefault();
        const {name, departmant, salary} = this.state;

        const newUser = {
            // Json server unique id otomatik olarak atiyor
           // id : uniqid(),
            name,
            departmant,
            salary,
        }
        const response = await axsios.post("http://localhost:3004/users", newUser);
        //console.log(newUser);
        dispatch({type : "ADD_USER", payload : response.data})

        // Redirect
        this.props.history.push("/");
    
    }
    render() {
        const {visible, name, salary, departmant} = this.state;
        return <UserConsumer>
            {
                value => {
                    const {dispatch} = value;
                    return (
                        <div className = "col-md-8 mb-4">
                            <button onClick = {this.changeVisibility} className = "btn btn-dark btn-block mb-2">{visible ? "Hide Form" : "Show Form"}</button>
                            <Animation pose = {this.state.visible ? "visible" : "hidden"}>
                                <div className = "card">
                                    <div className = "card-header">
                                        <h4>Add User Form</h4>
                                    </div>
                                    <div className = "card-body">
                                        <form onSubmit = {this.addUser.bind(this,dispatch)}>
                                            <div className = "form-group">
                                                <label htmlFor ="name">Name</label>
                                                <input type = "text"
                                                name = "name"
                                                id = "id"
                                                placeholder  = "enter Name"
                                                className = "form-control"
                                                value = {name}
                                                onChange = {this.changeInput}
                                                />
                                            </div>
                                            <div className = "form-group">
                                                <label htmlFor ="departmant">Departmant</label>
                                                <input type = "text"
                                                name = "departmant"
                                                id = "departmant"
                                                placeholder  = "enter Departmant"
                                                className = "form-control"
                                                value = {departmant}
                                                onChange = {this.changeInput}
                                                />
                                            </div>
                                            <div className = "form-group">
                                                <label htmlFor ="salary">Salary</label>
                                                <input type = "text"
                                                name = "salary"
                                                id = "salary"
                                                placeholder  = "enter Salary"
                                                className = "form-control"
                                                value = {salary}
                                                onChange = {this.changeInput}
                                                />
                                            </div>
                                            
                                            <button className = "btn btn-primary btn-block" type = "submit">Add User</button>
                                        </form>
            
                                    </div>
                                </div>
                            </Animation>
                            
                        </div>
                    )
                }
            }
        </UserConsumer>
        
    }
}
export default AddUser;
