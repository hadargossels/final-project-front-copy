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
            <div className="row justify-content-center headerCategory">
                <h2 className="col-md-2 col-12">{this.props.categoryHeader}</h2>
                  <div className="col-md-8 col-12 selectDiv">
                     <p>order by:</p>
                     <select onChange={(e)=>this.props.sortChoiced(e.target[e.target.selectedIndex].value)}>
                           <option>default</option>
                           <option>cheap-expensive</option>
                           <option>expensive-cheap</option>
                     </select>
                  </div>
                  
               </div>
           );
    }
}