// import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and 5555555save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Main from './Components/main/main_1';

class App extends Component{
   render(){
      return(
         <div>
            <Header/>
            <Main />
            <Footer/>
            
         </div>
      );
   }
}
export default App;
