import React, { Component } from 'react'

export default class AboutUs extends Component {
    render() {
        const mainStyle = {
            margin : '10px',
            border : '2px solid gold',
            height : '40rem',
            position: 'relative'
        }
        return (
            <div style={mainStyle}>
                <h1>About Us</h1>
            </div>
        )
    }
}
