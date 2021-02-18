import React, { Component } from 'react'
import './Fail.css'

let orderErr = localStorage.getItem("orderErr")

export class Fail extends Component {
    render() {
        return (
            <div className='fail'>
                Order has failed!<br/>
                Error: {orderErr}
            </div>
        )
    }
}

export default Fail
