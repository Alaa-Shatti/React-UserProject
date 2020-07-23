import React, { Component } from 'react'

class Test extends Component {
    constructor (props) {
        super(props);
        this.state = {
            a : 10
        }
        console.log("constructor");
    }
    componentDidMount(){
        console.log("ComponentDidMount");
        // API istekleri Gerceklestiriliyor
        this.setState({
            a : 20
        })
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("ComponentDidUpdate");
    }
    shouldComponentUpdate(){
        console.log("Should Component Update");
        // return true ise isleme devam eder
        // return false ise islemi burada bitirir
        return true;
    }
    render() {
        console.log("Render");
        return (
            <div>
                
            </div>
        )
    }
}
export default Test;
