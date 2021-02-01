import React, { Component } from 'react';
import Stars from './Stars';
import ChartBtn from './ChartBtn';
import WorkOutP from './WorkOutP';
class Album extends Component{

    render(){
      return(
        <div className="text-center">
            <h3 className="text-danger">Work Out</h3>
            <hr/>
            <WorkOutP/>
            <hr/>
        </div>
      );
   }
}
export default Album;