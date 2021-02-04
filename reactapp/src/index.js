import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router, Switch, NavLink} from 'react-router-dom';
import './index.css';
import Product from './App';
import Store from './store';
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
// const Contact = ({match}) => <p>{match.param.id}</p>
const router = (
  
    <Router>
      <Header/>
     
      <div>
        <Switch>
        {/* <Route path='/' component={Home} /> */}
        <Route path="/product/:name" component={Product} />
        <Route path='/store' component={Store} />
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
