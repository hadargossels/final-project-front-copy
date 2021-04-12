import React, { useState, useEffect } from "react"
import "./drawerStyle.css";


export default function SideDrawer(props) {
 
  const [currentUser, setCurrentUser] = useState();

  let drawerClasses = ["side-drawer"];
  let callRef = React.createRef();

  if (props.show) {
    drawerClasses = ["side-drawer", "open"];
  }

  let searchRefDrawer=()=>{
      const node = callRef.current.value;
      window.location.href = "/search?q=" + node;
  }
  useEffect(() => {
      if(! localStorage.getItem("username"))
        setCurrentUser("visitor")
      else
      setCurrentUser( localStorage.getItem("username").slice(1, localStorage.getItem("username").length-1))

  }, [])

    function logout() {
      localStorage.removeItem('username');
      localStorage.removeItem('token');
      localStorage.removeItem('usernameID');
      setCurrentUser("visitor")
    }
    function userOptionsShow(){
      if(currentUser !== 'visitor')
        return (<li><a href="/" onClick={() => {logout() }}>Logout</a></li>)
      else
        return (<li><a href="/login">Login</a> <a style={{marginLeft:"60%"}} href="/register">Register</a> </li>)
    }  
    
  return (
    <nav className={drawerClasses.join(" ")}>

      <ul>
          <li className="input-group" >
            <input ref={callRef} type="text" className="form-control" placeholder="Search"/>
            <div className="input-group-append">
              <button className="btn btn-secondary" type="button" onClick={searchRefDrawer} style={{height:'100%'}}>
                <i className="fa fa-search"></i>
              </button>
            </div>
          </li>
          <li>
            <h3>Welcome&nbsp; {currentUser}</h3>
          </li>
          
            {userOptionsShow()}
          
          <li>
            <a href="/">Home</a><a style={{marginLeft:"25%"}} href="/Shop">Shop</a><a style={{marginLeft:"26%"}} href="/cart">Cart</a>       
          </li>
          <li>
          <a href="/about">About</a><a style={{marginLeft:"25%"}} href="/contact">Contact</a><a style={{marginLeft:"21%"}} href="/blog">Blog</a>
          </li>
          
      </ul>
    </nav>
  );
};

