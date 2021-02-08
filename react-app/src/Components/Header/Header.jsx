import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {

  constructor() {

    super();

    this.state = {url: ""};
    this.callRefInp = React.createRef();
    this.callRefBtn = React.createRef();

    this.setUrl = this.setUrl.bind(this);
  };

  setUrl() {

    this.setState({url: this.callRefInp.current.value});
  }

  render(){
    return(
        <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <NavLink exact to="/"><img src="/images/logos/logo2.png" alt="LIEL'S" width="30%" /></NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li activeclassname="nav-item active"><NavLink exact to="/" className="nav-link">Home</NavLink></li>
              <li activeclassname="nav-item active"><NavLink to="/about" className="nav-link">About</NavLink></li>
              <li activeclassname="nav-item active"><NavLink to="/shop" className="nav-link">Shop</NavLink></li>
              <li activeclassname="nav-item active"><NavLink to="/blog" className="nav-link">Blog</NavLink></li>
              <li activeclassname="nav-item active"><NavLink to="/contact" className="nav-link">Contact Us</NavLink></li>
            </ul>
            <ul className="nav navbar-nav navbar-right pr-3">
              <li activeclassname="nav-item active"><NavLink to="/sign-in-up" className="nav-link">Sign in / Sign Up</NavLink></li>
              <li activeclassname="nav-item active"><NavLink to="/account" className="nav-link"><i className="fas fa-user-circle"></i></NavLink></li>
              <li activeclassname="nav-item active"><NavLink to="/cart" className="nav-link"><i className="fas fa-shopping-cart"></i></NavLink></li>
          </ul>
          <form className="form-inline mt-2 mt-md-0" onSubmit={e => { e.preventDefault(); this.callRefBtn.current.click(); }}>
              <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" ref={this.callRefInp} onChange={this.setUrl}/>
              <NavLink to={"/shop?q="+this.state.url} className="nav-link"><button className="btn btn-outline-success my-2 my-sm-0" type="button" ref={this.callRefBtn}>Search</button></NavLink>
          </form>
          </div>
        </nav>
      </header>
    );
  }
}