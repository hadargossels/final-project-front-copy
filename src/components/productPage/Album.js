import React, { Component } from 'react';
import Stars from './Stars';
import ChartBtn from './ChartBtn';
import WorkOutP from './WorkOutP';
import Yoga from './Yoga';
class Album extends Component{

    render(){
      return(
        <div className="text-center">
            <h3 className="text-danger">Top seller Work Out</h3>
            <hr/>
            <WorkOutP/><br/>
            <h3 className="text-danger">Top seller Yoga</h3>
            <hr/>
            <Yoga/>
        </div>
      );
   }
}
export default Album;