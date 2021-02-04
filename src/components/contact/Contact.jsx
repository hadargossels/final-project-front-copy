import React, { Component } from 'react'
import './Contact.css'
export default class Contact extends Component {
    render() {
        return (

                <div className="contact">
                <h1>CONTACT US</h1>
                <form action="">
                <label htmlFor="name">Name:</label><br/>
                <input type="name" id="contname" name="name"/><br/><br/>
                <label htmlFor="email">Email:</label><br/>
                <input type="email" id="contemail" name="email"/><br/><br/>
                <label htmlFor="phone">Phone number:</label><br/>
                <input type="tel" id="phone" name="phone"/><br/><br/>
                <label for="messege">Messege: </label><br/>
                <textarea id="messege" name="messege" rows="4" cols="50"></textarea><br/><br/>
                <input type="submit" id="submsg" value="SUBMIT"></input><br/><br/>
                </form>
            </div>

        )
    }
}
