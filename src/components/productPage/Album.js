import React, { Component } from 'react';
import WorkOutP from './WorkOutP';
class Album extends Component{
    constructor(props){
      super(props);
    }
    render(){
      console.log(this.props.match.params.cat);
      return(
        <div className="">
            <h3 className="text-danger text-center">Top seller</h3>
            <hr/>
            <WorkOutP search={this.props.match.params.cat} key={window.location.pathname} /><br/>
        </div>
      );
   }
}
export default Album;