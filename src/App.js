import React, { Component } from 'react'
import Routes from './components/routing/Routes'
import {BrowserRouter as Router} from 'react-router-dom'

// import components
import Footer from './components/Footer'
import Header from './components/Header'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import { AuthProvider } from './contexts/AuthContext'
export default class App extends Component {
  render() {
    return (
      <Router>
        <AuthProvider>
          <ScrollToTop/>
          <Header/>
          <Routes/>
          <Footer/>
        </AuthProvider>
      </Router>
    )
  }
}
