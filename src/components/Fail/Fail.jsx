import React, { Component } from 'react'

orderErr = localStorage.getItem("orderErr")

export class Fail extends Component {
    render() {
        return (
            <div>
                Order has failed!<br/>
                Error: {orderErr}
            </div>
        )
    }
}

export default Fail
