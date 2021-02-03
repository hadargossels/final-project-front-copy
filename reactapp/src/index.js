import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router, Switch, NavLink} from 'react-router-dom';
import './index.css';
import App from './App';
import App1 from './App1';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import reportWebVitals from './reportWebVitals';
import ContactUs from './Components/contactUs/contactUs';
import NotFound from './Components/404/notFound';
import Blog from './Components/blog/blog';
import AboutUs from './Components/aboutUs/aboutUs';
import SignIn from './Components/signIn/signIn';
import SignUp from './Components/signUp/signUp';


const active = {
  color: 'red'
}

const router = (
  
    <Router>
      <Header/>
      {/* <ul>
        <li>
         <NavLink exact to= "/App" activeStyle={active}>abb</NavLink>
        </li>
        <li>
        <NavLink exact to= "/App1" activeStyle={active}>abbA</NavLink>
        </li>

      </ul> */}
      <div>
        <Switch>
        <Route path='/product' component={App} />
        <Route path='/store' component={App1} />
        <Route path='/contact' component={ContactUs} />
        <Route path='/about' component={AboutUs} />
        <Route path='/NewLogin' component={SignUp} />
        <Route path='/Blog' component={Blog} />
        <Route path='/login' component={SignIn} />
        <Route  component={NotFound} />
        </Switch>
      </div>
      <Footer/>
    </Router>
)

    ReactDOM.render(
      <>
    {router},
    </>,
   document.getElementById('root')
 );



// ReactDOM.render(
//   <React.StrictMode>
//     <App />
    
//     <App1 />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
