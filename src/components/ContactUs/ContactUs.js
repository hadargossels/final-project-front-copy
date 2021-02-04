import React, { Component } from 'react'
import './contactUs.css'
export default class ContactUs extends Component {
    constructor(props){
        super(props);
        this.state={
            num:props.num
        }
    }
    render() {
        return (
            <div>
                <h1>contact us</h1>
              
            </div>
        )
    }
}
