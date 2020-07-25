import React, { Component } from 'react'
import UserConsumer from "../context";
import axsios from "axios";


class UpdateUser extends Component {
    state = {
        name : "",
        departmant : "",
        salary : "",
        error : false
    }

    // Text lerin icerisindeki degerleri almak icin kullanilan Method
    changeInput = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    componentDidMount = async () => {
        const {id} = this.props.match.params;
        //console.log(this.props);
        const response = await axsios.get(`http://localhost:3004/users/${id}`);

        // id ile gelen verileri gormek icin
        //console.log(response.data)
        const {name,departmant,salary} = response.data;
        this.setState({
            name ,
            departmant ,
            salary 
        });
        
    }
    updateUser = async (dispatch, e) => {
        e.preventDefault();
        // Update User
        const {name,departmant,salary} = this.state;
        const {id} = this.props.match.params;
        const updatedUser = {
            name,
            departmant,
            salary
        };
        if (!this.validateForm()){
            this.setState({
                error : true
            })
            return;
        }
        //console.log(updatedUser);
        const response = await axsios.put(`http://localhost:3004/users/${id}`, updatedUser);
        dispatch({type : "UPDATE_USER" , payload : response.data});
        // Redirect
        this.props.history.push("/");
    }
    validateForm = () => {
        const {name,departmant,salary} = this.state;
        if (name === "" || departmant === "" || salary === ""){
            return false;
        }
        return true;
    }
    render() {
        const { name, salary, departmant, error} = this.state;
        return <UserConsumer>
            {
                value => {
                    const {dispatch} = value;
                    return (
                        <div className = "col-md-8 mb-4">
                                <div className = "card">
                                    <div className = "card-header">
                                        <h4>Update User Form</h4>
                                    </div>
                                    <div className = "card-body">
                                    {
                                            error ?
                                            <div className = "alert alert-danger">
                                                Lutfen Bilgilerinizi Kontroledin
                                            </div>
                                            : null
                                        }
                                        <form onSubmit = {this.updateUser.bind(this,dispatch)}>
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
                                            
                                            <button className = "btn btn-primary btn-block" type = "submit">Update User</button>
                                        </form>
            
                                    </div>
                                </div>
                            
                        </div>
                    )
                }
            }
        </UserConsumer>
        
    }
}
export default UpdateUser;
