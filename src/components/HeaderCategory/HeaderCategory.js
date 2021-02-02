import React, { Component } from 'react';
import './headerCategory.css';


export default class HeaderCategory extends Component{
   
    constructor(props){
       super(props);
       this.state={
        categoryHeader:props.categoryHeader
       }
    }

  

    render(){
        return(
            <div className="row headerCategory">
                  <div className="col-9">
                     <p>order by:</p>
                     <select onChange={(e)=>this.props.sortChoiced(e.target[e.target.selectedIndex].value)}>
                           <option>default</option>
                           <option>cheap-expensive</option>
                           <option>expensive-cheap</option>
                     </select>
                  </div>
                  <h2 className="col-3">{this.props.categoryHeader}</h2>
               </div>
           );
    }
}