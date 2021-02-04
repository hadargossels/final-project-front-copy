import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <div className='backG'>
                <div className="welcome"></div>
                <NavLink exact to="/Store"><button className='homebtn'>SHOP NOW</button></NavLink>
            </div>
        )
    }
}
