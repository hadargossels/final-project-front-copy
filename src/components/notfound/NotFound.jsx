import React, { Component } from 'react'
import './NotFound.css'

export default class NotFound extends Component {
    render() {
        return (
            <div className='notfound'>
                <p>Oops!</p>
                <p>It seems like somthing went wrong!</p>
                <p>This page is not found</p>
                <p>Go back to your previous page</p>   
            </div>
        )
    }
}
