import React, { useRef,useState ,useEffect} from 'react'
import './login.css';
import Title from '../additionsComp/Title'
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../context/AuthContext"
import { Link, useHistory } from "react-router-dom"
// import { auth } from "../../firebase"
// import firebase from "firebase/app"
//import "firebase/auth"
import axios from 'axios'
export default function Login(props) {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const { loginGoogle , loginFacebook , loginGitHub } = useAuth()
    const history = useHistory();


  //   useEffect(() => {
  //     if (props.match.params.token){
  //         localStorage.setItem("token",JSON.stringify(props.match.params.token))
  //     }

  // }, [props])

     function googleLogin (){
       window.location.href = "http://localhost:5000/auth/google"
      }
    async function handleSubmit(e) {
        e.preventDefault()

        // let Authorization = `bearer ${JSON.parse(localStorage.getItem("token"))}`

        try {
          // setError("")
          // setLoading(true)
          // await login(emailRef.current.value, passwordRef.current.value)
          console.log(emailRef.current.value,passwordRef.current.value)
          await axios.post("/auth/login", {email:emailRef.current.value, password:passwordRef.current.value})
          .then(
            async (response)  =>{
              console.log(response)
              let userEmail = response.config.data
              userEmail = JSON.parse(userEmail);
                if (response.data.token){
                    localStorage.setItem("token",JSON.stringify(response.data.token))
                    localStorage.setItem("username",JSON.stringify(response.data.username))
                    localStorage.setItem("usernameID",JSON.stringify(response.data.userId))
                    window.location.href = "/";

                }
                else{
                    console.log(response.data.message)
                }
            }
          )
        } catch {
          setError("Failed to log in")
        }
        
        setLoading(false)
      }
        return (
            <>
            <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Open+Sans" />
            <Title name="log" title="in" />
            <Card style = {{width:"30%" , marginLeft:"33%"}}>
            <Card.Body>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password" >
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" ref={passwordRef} required name="password" autoComplete="on"/>
                </Form.Group>
                    <Button id="login" disabled={loading} className="w-100 btn-success" type="submit">
                    Log In
                    </Button>
              </Form>
              <Button className="google-btn btn-warning mt-3 w-100" 
                        onClick={(e)=> {
                          googleLogin(e);
                            }}>
                        <div className="google-icon-wrapper">
                            <img alt="google-icon" className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                        </div>
                        <p className="btn-text">Log in with google</p>
                </Button>
                <Button className="google-btn btn-primary mt-3 w-100" onClick = {loginFacebook}>
                        <div className="google-icon-wrapper">
                            <img alt="facebook-icon" style = {{width:"25px" , height:"25px" , marginBottom:"3px"}}className="google-icon" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-512.png"/>
                        </div>
                        <p className="btn-text">Log in with facebook</p>
                </Button>
                <Button className="google-btn btn-dark mt-3 w-100" onClick = {loginGitHub}>
                        <div className="google-icon-wrapper">
                            <img alt="github-icon" style = {{width:"25px" , height:"25px" , marginBottom:"3px"}}className="google-icon" src="https://image.flaticon.com/icons/png/512/25/25231.png"/>
                        </div>
                        <p className="btn-text">Log in with github</p>
                </Button>
              <div className="w-100 text-center mt-3">
                <Link to="/forgot-password">Forgot Password?</Link>
              </div>
              <div className="w-100 text-center mt-2">
                    Need an account? <Link to="/register">Sign Up</Link>
              </div>
            </Card.Body>
          </Card>
          
          </>
            
        )
}

