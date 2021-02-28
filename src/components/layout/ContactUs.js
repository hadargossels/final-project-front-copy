import React, { Component } from 'react'

export default class ContactUs extends Component {
    render() {
        const mainStyle = {
            margin : '10px',
            border : '2px solid gold',
            height : '40rem',
            position: 'relative'
        }
        return (
            <div style={mainStyle}>
                <h1>Contact Us</h1>
            </div>
        )
    }
}
