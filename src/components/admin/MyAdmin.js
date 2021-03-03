

import React, { Component } from 'react'
import MyDashboard from './MyDashboard'
import './MyAdmin.css'


export default class MyAdmin extends Component {
    render() {
        return (
            <div>
               <div className="myContainerAdmin">
                 <MyDashboard/>
              </div>
            </div>
        )
    }
}
