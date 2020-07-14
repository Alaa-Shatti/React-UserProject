import React, { Component } from 'react'
import User from "./User"

class Users extends Component {
    render() {
        const {users} = this.props;

        return (
            <div>
                {
                    users.map( user => {
                        return(
                            <User
                                key = {user.id}
                                Name = {user.Name}
                                Salary = {user.Salary}
                                Departmant = {user.Departmant}
                            />
                        )
                    })
                }
            </div>
        )
    }
}
export default Users;