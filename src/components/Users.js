import React, { Component } from 'react';
import User from "./User";
import UserConsumer from "../components";

class Users extends Component {
    render() {

        return(
            <UserConsumer>
                {
                    value => {
                        const {users} = value;
                        return (
                            <div>
                                {
                                    users.map( user => {
                                        return(
                                            <User
                                                key = {user.id}
                                                id = {user.id}
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
            </UserConsumer>
        )
    }
}
export default Users;