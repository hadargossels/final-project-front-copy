import React, { Component } from "react";
import "./Login.css";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
    };
  }
  componentDidMount() {
    localStorage.setItem("login", false);
  }
  allCorrectFun(e) {
    console.log("in")
    let input = document.querySelectorAll(".myInputLogin");
    if (
      input[0].value == JSON.parse(localStorage.getItem("newUser")).email &&
      input[1].value == JSON.parse(localStorage.getItem("newUser")).password
    ){
      alert("Login Successful");
      localStorage.setItem("login", true);
      this.setState({ login: true });
      input[0].value=""
      input[1].value=""
    }else{
      alert("Sorry, your password or Email was incorrect. Please double-check your password and Email.")
      }  
    
  }
  checkedPassword(e){
    if(e.value.length<8)
      e.setAttribute("class", "form-control myInputLogin is-invalid")
    else{
      e.setAttribute("class", "form-control myInputLogin ")

    }
  }
  render() {
    return (
      <div style={{width:"700px",margin:"0 auto"}}>
        <h1 style={{marginTop:"1rem"}}>Sign in</h1>
        <form
          method="POST"
          onSubmit={(e) => {
            e.preventDefault();
            this.allCorrectFun(e.target);
          }}
          id="formLogin"
        >
          <div class="mb-3">
            <label htmlfor="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              name="email"
              type="email"
              className="form-control myInputLogin"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label htmlfor="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
            onChange={(e)=>this.checkedPassword(e.target)}
              name="password"
              type="password"
              oninvalid={alert('your password should be at least 8 characters')}
              className="form-control myInputLogin"
              id="exampleInputPassword1"
              required
            />
          <div id="passwordHelp" class="form-text" style={{marginBottom:"1rem",color:"tomato"}}>
          *your password should be at least 8 characters
            </div>
          </div>
          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" htmlfor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" class="btn btn-success btnLogin">
            Sign in
          </button>
        </form>
      </div>
    );
  }
}
