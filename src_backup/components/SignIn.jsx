import React, {Component, createRef} from 'react';
import {Redirect} from 'react-router-dom'


class SignIn extends Component {
    constructor(props){
        super(props);
        this.emailRef = createRef();
        this.passwordRef= createRef();
        this.state = {
            messageEmail: "",
            messagePassword: "",
            messageCanNotSignIn: "",
            signedIn: false
        };
    }


    submitSignIn = (event) => {
        event.preventDefault();

        const invalidMessages= {required: "This field is required", 
                                noUser: "User does not exist",
                                incorrectPassword: "Password is incorrect"                        
                                };

        this.setState({messageEmail: ''});
        this.setState({messagePassword: ''});
        this.setState({messageCanNotSignIn: ''});
        
        
        // if (!this.emailRef.current.value){
        //     this.emailRef.current.style.borderColor = 'red';
        //     this.setState({messageEmail: invalidMessages.required});
        // } 

        // if (!this.passwordRef.current.value){
        //     this.passwordRef.current.style.borderColor = 'red';
        //     this.setState({messagePassword: invalidMessages.required});
        // } 

        const user = this.props.users.filter(element => element.email === this.emailRef.current.value);

        if (user.length === 0){
            this.setState({messageCanNotSignIn: invalidMessages.noUser});
            this.emailRef.current.style.borderColor = 'red';
            this.passwordRef.current.style.borderColor = 'red';
        }
        else if (user[0].password !== this.passwordRef.current.value){
            this.setState({messagePassword: invalidMessages.incorrectPassword});
            this.emailRef.current.style.borderColor = 'green';
            this.passwordRef.current.style.borderColor = 'red';
        }
        else {
            this.props.onSignUp(user[0]);
            localStorage.setItem('user', JSON.stringify(user[0]));
            this.setState({signedIn: true})
        }

    }

    render() {        
        return (
            <div className="mx-3 d-flex justify-content-center" style={{maxWidth: "450px"}}>
                <div style={{width: "400px"}}>
                    <h1 className="display-4 mb-3" style={{fontSize: "32px"}}>Sign-in</h1>
                    <form style={{width: "80%"}}>
                        <label htmlFor="email">Email: </label>
                        <input type="mail" className="form-control" ref={this.emailRef} required></input>
                        <div className="invalidMassege text-danger">
                            {this.state.messageEmail}
                        </div>

                        <label htmlFor="password">Password: </label>
                        <input type="password" className="form-control" ref={this.passwordRef} required></input>
                        <div className="invalidMassege text-danger">
                            {this.state.messagePassword}
                        </div>

                        <div className="invalidMassege text-danger mt-3">
                            {this.state.messageCanNotSignIn}
                        </div>


                        <div className="d-flex justify-content-center mt-3">

                        {(this.state.signedIn)
                            ? <Redirect to='/'/>
                            : <button type="submit" className="btn btn-primary align-middle" onClick={this.submitSignIn}>Submit</button>
                        }
                        
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default SignIn;