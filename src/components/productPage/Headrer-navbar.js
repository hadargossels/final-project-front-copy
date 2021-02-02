import React, { Component } from 'react';
class Header extends Component{
   render(){
      return(
          <div>
            <div className="collapse" id="navbarToggleExternalContent">
                <div className="bg-dark p-4">
                    <h5 className="text-white h4">Menu</h5>
                    <a className="nav-link text-white" href="#">Home</a>
                    <a className="nav-link text-white" href="#">Contact us</a>
                    <span className="text-muted"></span>
                </div>
            </div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <h3 className="text-white" style={{position:'relative',left:'-45%'}}>Experis-Sports</h3>
                </div>
            </nav>
          </div>

      );
   }
}
export default Header;