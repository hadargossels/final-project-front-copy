import React, { Component } from 'react'

export default class MsgSent extends Component {
    constructor(){
        super()
        this.state= {msgNum: Math.floor(Math.random() * 10**9)}
    }
    render() {
        return (
            <div className="text-center py-5">
                <h1>Message sent!</h1>
                <h4>Your appeal number is {this.state.msgNum}</h4>
            </div>
        )
    }
}
