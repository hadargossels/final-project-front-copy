import React, { useContext, useState, useEffect } from "react"
import "./drawerStyle.css";
import { auth } from "../../firebase"


export default function SideDrawer(props) {
  const [loading, setLoading] = useState(true)
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
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

   function userShow(){
            if(currentUser)
              return currentUser.email
              else
            return "Visitor"
        }
    function logout() {
          return auth.signOut()
    }
    function userOptionsShow(){
      if(currentUser)
        return (<li><a href="/" onClick={() => {logout() }}>Logout</a></li>)
      else
        return (<li><a href="/login">Login</a> <a style={{marginLeft:"60%"}} href="/register">Register</a> </li>)
    }  
    
  return (
    <nav className={drawerClasses.join(" ")}>
       {/* {userOptionsShow } */}

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
            <h3>Welcome&nbsp; {userShow()}</h3>
          </li>
          
            {userOptionsShow()}
            {/* <a href="/login">Login</a> <a style={{marginLeft:"60%"}} href="/register">Register</a> */}
          
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

