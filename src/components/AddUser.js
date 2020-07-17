import React, { Component } from 'react'

class AddUser extends Component {
    render() {
        return (
            <div className = "col-md-8 mb-4">
                <div className = "card">
                    <div className = "card-header">
                        <h4>Add User Form</h4>
                    </div>
                    <div className = "card-body">
                        <form>
                            <div className = "form-group">
                                <label htmlFor ="name">Name</label>
                                <input type = "text"
                                Name = "name"
                                id = "id"
                                placeholder  = "enter Name"
                                class = "form-control"
                                />
                            </div>
                            <div className = "form-group">
                                <label htmlFor ="departmant">Departmant</label>
                                <input type = "text"
                                Name = "departmant"
                                id = "departmant"
                                placeholder  = "enter Departmant"
                                class = "form-control"
                                />
                            </div>
                            <div className = "form-group">
                                <label htmlFor ="salary">Salary</label>
                                <input type = "text"
                                Name = "salary"
                                id = "salary"
                                placeholder  = "enter Salary"
                                class = "form-control"
                                />
                            </div>
                            <button class = "btn btn-primary btn-block" type = "submit">Add User</button>
                        </form>

                    </div>
                </div>
                
            </div>
        )
    }
}
export default AddUser;
