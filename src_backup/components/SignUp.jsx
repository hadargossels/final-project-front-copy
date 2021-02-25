import React, {Component, createRef} from 'react';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext'


class SignUp extends Component {
    constructor(props){
        super(props);
        this.firstNameRef = createRef();
        this.lastNameRef = createRef();
        this.emailRef = createRef();
        this.passwordRef= createRef();
        this.confirmPasswordRef = createRef();
        this.state = {
            messageFirstName: '',
            messageLastName: '',
            messageEmail: '',
            messagePassword: "",
            messageConfirmPassword: ""
        };
    }

    submitRegistration = (event) => {
        event.preventDefault();

        const invalidMessages= {required: "This field is required", 
                                emailPattern: "Please provide a valid email",
                                passwordPattern: "Password must be at least 8 characters long and contain: small case letter, upper case letter, digit and a symbol",
                                confirmPassword: "Password does not match"                           
                                };
        const emailPattern = /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/;
        const passwordPattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/g;
        let correctInputs = true;

        if (this.firstNameRef.current.validity.valueMissing){
            this.firstNameRef.current.style.borderColor = 'red';
            correctInputs = false;
            this.setState({messageFirstName: invalidMessages.required});
        }
        else{
            this.setState({messageFirstName: ''});
            this.firstNameRef.current.style.borderColor = 'green';
        }

        if (this.lastNameRef.current.validity.valueMissing){
            this.lastNameRef.current.style.borderColor = 'red';
            correctInputs = false;
            this.setState({messageLastName: invalidMessages.required});
        }
        else{
            this.setState({messageLastName: ''});
            this.lastNameRef.current.style.borderColor = 'green';
        }
        
        if (!this.emailRef.current.value){
            this.emailRef.current.style.borderColor = 'red';
            correctInputs = false;
            this.setState({messageEmail: invalidMessages.required});
        } 
        else if (!this.emailRef.current.value.match(emailPattern)){
            this.emailRef.current.style.borderColor = 'red';
            correctInputs = false;
            this.setState({messageEmail: invalidMessages.emailPattern});
        }
        else {
            this.setState({messageEmail: ''});
            this.emailRef.current.style.borderColor = 'green';
        }

        if (!this.passwordRef.current.value){
            this.passwordRef.current.style.borderColor = 'red';
            correctInputs = false;
            this.setState({messagePassword: invalidMessages.required});
        } 
        else if (!this.passwordRef.current.value.match(passwordPattern)){
            this.passwordRef.current.style.borderColor = 'red';
            correctInputs = false;
            this.setState({messagePassword: invalidMessages.passwordPattern});
        }
        else {
            this.setState({messagePassword: ''});
            this.passwordRef.current.style.borderColor = 'green';
        }

        if (!this.confirmPasswordRef.current.value){
            this.confirmPasswordRef.current.style.borderColor = 'red';
            correctInputs = false;
            this.setState({messageConfirmPassword: invalidMessages.required});
        } 
        else if (this.confirmPasswordRef.current.value !== this.passwordRef.current.value){
            this.confirmPasswordRef.current.style.borderColor = 'red';
            correctInputs = false;
            this.setState({messageConfirmPassword: invalidMessages.confirmPassword});
        }
        else {
            this.setState({messageConfirmPassword: ''});
            this.confirmPasswordRef.current.style.borderColor = 'green';
        }

        
        if (correctInputs) {
            let firstName = this.firstNameRef.current.value;
            let lastName = this.lastNameRef.current.value;
            let email = this.emailRef.current.value;
            let password = this.passwordRef.current.value;
            const newUser = {date: new Date(), firstName: firstName, lastName: lastName, email: email, password: password};

            axios.post(`http://localhost:3000/users`, { ...newUser })
                .catch(error => {
                    console.log(error);
                });

            localStorage.setItem('user', JSON.stringify(newUser));
            this.props.onSignUp(newUser); 
        }
    }

    render() {
        return (
            <div>
                <h1 className="display-4 mb-3 text-center" style={{fontSize: "32px"}}>Sign-up</h1>
                <form>
                    <div className="form-row">
                        <div className="col">
                            <label htmlFor="firstName">First name: </label>
                            <input type="text" className="form-control" ref={this.firstNameRef} required></input>
                            <div className="invalidMassege text-danger">
                                {this.state.messageFirstName}
                            </div>
                        </div>
                        <div className="col">
                            <label htmlFor="lasttName">Last name: </label>
                            <input type="text" className="form-control" ref={this.lastNameRef} required></input>
                            <div className="invalidMassege text-danger">
                                {this.state.messageLastName}
                            </div>
                        </div>
                    </div>

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

                    <label htmlFor="confirmPassword">Confirm password: </label>
                    <input type="password" className="form-control" ref={this.confirmPasswordRef} required></input>
                    <div className="invalidMassege text-danger">
                        {this.state.messageConfirmPassword}
                    </div>

                    {/* <div className="d-flex justify-content-center mt-3"> */}
                    <button type="submit" className="btn btn-primary w-100 mt-3" onClick={this.submitRegistration}>Submit</button>
                    {/* </div>                    */}
                </form>
            </div>
        );
    }
}

export default SignUp;