import React, { Component } from 'react';
import axios from 'axios';
import SignUp from './SignUp';
import SignIn from './SignIn';

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
            <div className="container" style={{maxWidth: "1100px"}}>
                <div className="row">
                    <div className="col-12 col-md-6 f-flex flex-column justify-content-center">
                        <SignUp
                            onSignUp= {this.props.onSignUp}
                            users = {this.state.users}
                        ></SignUp>
                    </div>
                    <div className="col-12 col-md-6">
                        <SignIn
                            onSignUp = {this.props.onSignUp}
                            users = {this.state.users}
                        ></SignIn>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Register;