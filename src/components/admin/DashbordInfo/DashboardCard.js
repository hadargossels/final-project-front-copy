

import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './DashboardCard.css'

export default class DashboardCard extends Component {


    constructor(props){
        super(props)
    }


    render() {
        return (
            
            <div>
                <div className="myContainerDash" style={{backgroundColor: this.props.bg }}>
                    <Link to={this.props.to}>
                    <div className="myCardDash" >
                        <div className="myBoxDash">
                                <p>{this.props.number}</p>
                                <span>{this.props.title}</span>
                        </div>
                        {this.props.icon}
                    </div>
                    </Link>
                </div>
            </div>
        )
    }
}
