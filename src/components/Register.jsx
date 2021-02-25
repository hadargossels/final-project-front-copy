import React, { Component } from 'react';
import axios from 'axios';
import SignUpPage from './SignUp.jsx';
import SignInPage from './SignIn.jsx';


class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            users: {}
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:3000/users`)
          .then(response => {
            const users = response.data;
            this.setState({ users });
          })
          .catch(error =>
            console.log(error))
    }

    render() {
        return (
            <div className="container d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
                <div className="row">
                    
                    <div className="col-12 col-md-6">
                        <div className="w-100" style={{maxWidth: "400px"}}>
                            {/* <SignUp
                                onSignUp= {this.props.onSignUp}
                                users = {this.state.users}
                            ></SignUp> */}
                            <SignUpPage/>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        {/* <SignIn
                            onSignUp = {this.props.onSignUp}
                            users = {this.state.users}
                        ></SignIn> */}
                        <SignInPage/>
                    </div>

                </div>
                
            </div>
        );
    }
}

export default Register;