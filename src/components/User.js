import React, { Component } from 'react'
import propTypes from 'prop-types'
 class User extends Component {
     static defaultProps = {
        Name : "Bilgi Yok",
        Departmant : "Bilgi Yok",
        Salary : "Bilgi Yok"
     }
    render() {
        // Destructing
        const {Name, Departmant, Salary} = this.props;
        return (
            <div className = "col-md-8 mb-4">
                <div className = "card">
                    <div className = "card-header d-flex justify-content-between">
                            <h4 className = "d-inline">{Name}</h4>
                            <i className="fa fa-address-book" aria-hidden="true" style = {{cursor : "pointer"}}></i>
                    </div>
                    <div className = "card-body">
                        <p className = " card-text">Maas : {Salary}</p>
                        <p className = " card-text">Departman : {Departmant}</p>
                    </div>
                </div>
                
            </div>
            
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
    Departmant : propTypes.string.isRequired
}
export default User;