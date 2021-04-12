
import React, { Component } from 'react'
import './DashboardCardInfo.css'



export default class DashboardCardInfo extends Component {

    render() {
        return (
            <div>
                  <div className="myContainerDashInfo" style={{backgroundColor: this.props.bg }}>
                    <div className="myCardInfoDash" >
                        <div className="myBoxInfoDash">
                                <p>{this.props.number}</p>
                                <span>{this.props.title}</span>
                        </div>
                        {this.props.icon}
                    </div>
                </div>
            </div>
        )
    }
}
