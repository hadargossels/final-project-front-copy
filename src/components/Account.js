

import React, { Component } from 'react'
import './Account.css';
import Dashboard from './admin/myDashboard';


export default class Account extends Component {
    render() {
        return (
            <div>
               <div className="myContainerAccount">
                    <h1>העמוד לא נמצא מצטערים על אי הנעימות</h1>
                    <Dashboard/>
                </div>
            </div>
        )
    }
}
