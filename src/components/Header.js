
import React, { Component } from 'react';import './Header.css';
import { Link,NavLink } from 'react-router-dom';


class Header extends Component{

   constructor(props){
      super(props)
      this.state={
         urlValue:"",
      }
      this.callRef= React.createRef()
      this.setUrl=this.setUrl.bind(this)
      this.resetUrl=this.resetUrl.bind(this)
   }

   setUrl(){
      this.setState({urlValue: this.callRef.current.value})
   }
   resetUrl(){
      this.setState({urlValue:""})
      console.log(this.props)
   }
   
   render() {
      return(
         <div>
            
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark fs-5">
            <div className="container-fluid col-8">
            <div className="myLogo" style={{"backgroundImage":"url(/images/logo3.png)"}}></div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
               <ul className="navbar-nav">
               <li className="nav-item ms-3">
                  <NavLink to="/" className="nav-link active" aria-current="page" href="#" onClick={this.resetUrl}>ראשי</NavLink>
               </li>
               <li className="nav-item ms-3">
                  <NavLink to="/Catalog" className="nav-link" href="#" onClick={this.resetUrl,this.props.filterSearch}>המוצרים שלנו</NavLink>
               </li>
               <li className="nav-item ms-3">
                  <NavLink to="/Courses" className="nav-link" href="#" onClick={this.resetUrl}>סדנאות</NavLink>
               </li>
               <li className="nav-item ms-3">
                  <NavLink to="/Recipes" className="nav-link" href="#" onClick={this.resetUrl}>מתכונים</NavLink>
               </li>
               </ul>
            </div>
            
            <input id="serchInput" class="form-control mr-sm-2 ms-3 " type="search" placeholder="Search" ref={this.callRef} onChange={this.setUrl} value={this.state.urlValue}/>
            <NavLink to={"/Catalog?q="+this.state.urlValue}><button id="serchBtn" class="btn btn-outline-success my-2 my-sm-0 " type="submit" onClick={this.props.filterSearch}>חפש</button></NavLink>
           
           
               <span class="navbar-text"><i class="fas fa-user"></i></span>
               <span class="navbar-text"><i class="fas fa-shopping-cart"></i></span>
            
         </div>
         </nav>

         </div>
      );
   }
}

export default Header;