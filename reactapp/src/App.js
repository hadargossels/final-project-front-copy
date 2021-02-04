import './App.css';
import React, { Component } from 'react';
import Main from './Components/main/prodactPage';
import data1 from '../src/Components/prod.json'

class Product extends Component{
        
   render(){

     let newnew = data1;
     let that_prodact = newnew.filter((item) => {
         return item.name === this.props.match.params.name
     })
    
      return(

         <div>
            <Main prodact={that_prodact}/>
         </div>
      );
   }
}
export default Product;
