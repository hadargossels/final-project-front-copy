import React, { Component } from 'react';
import WorkOutP from './WorkOutP';
class Album extends Component{
    constructor(props){
      super(props);
      this.state = {
        headLine:this.props.match.params.cat+" products"
      }
      this.searchHead = this.searchHead.bind(this);
    }
    render(){
      return(
        <div className="">
            <h3 className="text-danger text-center">{this.state.headLine}</h3>
            <hr/>
            <WorkOutP search={this.props.match.params.cat} key={window.location.pathname} searchHead={this.searchHead} /><br/>
        </div>
      );
   }
   searchHead(name){
    this.setState({headLine:name});
   }
}
export default Album;