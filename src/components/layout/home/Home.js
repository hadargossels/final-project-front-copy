import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BestSell from './BestSell'
import './Home.css'

export default class Home extends Component {
    render() {
        return (
            <div className="homeStyle">
                <h1 style={{ marginTop: '10px' }}>Welcome to M-Phones store</h1>
                <Link to="/shop/mobiles" style={{ textDecoration: 'none' }} ><span className="catalogStyle1"> Mobile Phones </span></Link>
                <Link to="/shop/accessories" style={{ textDecoration: 'none' }}><span className="catalogStyle2"> Accessories </span></Link>
                <BestSell />
            </div>
        )
    }
}
