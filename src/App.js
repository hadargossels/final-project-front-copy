import React, { Component } from 'react'
import Routes from './components/routing/Routes'
import {BrowserRouter as Router} from 'react-router-dom'

// import components
import Footer from './components/Footer'
import Header from './components/Header'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
export default class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop/>
        <Header/>
        <Routes/>
        <Footer/>
      </Router>
    )
  }
}
