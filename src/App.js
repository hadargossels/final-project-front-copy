import React, { Component } from 'react'
import Routes from './components/routing/Routes'
import {BrowserRouter as Router} from 'react-router-dom'

// import components
import Footer from './components/Footer'
import Header from './components/Header'

export default class App extends Component {

  render() {
    return (
      <Router>
            <Header/>
            <Routes/>
            <Footer/>
      </Router>
    )
  }
}
