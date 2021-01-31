import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/Footer';
import Middle from './components/middle';

class App extends Component{
   render(){
      return(
         <div>
            {/* <h1>Hello World</h1>
            <h1>{this.props.headerProp}</h1>
            <h2>{this.props.contentProp}</h2>  */}
            <Header>{this.props.myHeader}</Header>
            <Middle>{this.props.myMiddle}</Middle>
            <Footer>{this.props.myFooter}</Footer>
         </div>
      );
   }
}
export default App;

