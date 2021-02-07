
import React, { Component } from 'react'
import './Courses.css';
import Header from "./Header";



export default class Courses extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="myContainer">
                    <h1>Courses</h1>
                </div>
            </div>
        )
    }
}
