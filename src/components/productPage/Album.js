import React, { Component } from 'react';
import WorkOutP from './WorkOutP';
class Album extends Component{

    render(){
      return(
        <div className="text-center">
            <h3 className="text-danger">Top seller</h3>
            <hr/>
            <WorkOutP/><br/>
        </div>
      );
   }
}
export default Album;