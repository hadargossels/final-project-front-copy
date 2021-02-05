import React, { Component } from 'react';
import WorkOutP from './WorkOutP';
class Album extends Component{

    render(){
      return(
        <div className="">
            <h3 className="text-danger text-center">Top seller</h3>
            <hr/>
            <WorkOutP/><br/>
        </div>
      );
   }
}
export default Album;