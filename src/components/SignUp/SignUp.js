import React, { Component } from 'react'
import propTypes from 'prop-types'
import './signUp.css'

export default class SignUp extends Component {
    constructor(props){
        super(props);

        this.nameLabelRef=React.createRef();
        this.nameInputRef=React.createRef();
        this.lastNameLabelRef=React.createRef();
        this.lastNameInputRef=React.createRef();
        this.emailLabelRef=React.createRef();
        this.emailInputRef=React.createRef();
        this.passInputRef=React.createRef();
        this.passLabelRef=React.createRef();
        this.passConfirmInputRef=React.createRef();
        this.passConfirmLabelRef=React.createRef();

        this.formRef=React.createRef();
    }
    signInBtnClicked(e)
    {
        let flag=true;
        if(this.nameInputRef.current.value=="")
        {
            this.nameLabelRef.current.className="showLabel"
            flag=false;
        }
        else this.nameLabelRef.current.className="hideLabel";
        if(this.lastNameInputRef.current.value=="")
        {
            this.lastNameLabelRef.current.className="showLabel"
            flag=false;
        }
        else this.lastNameLabelRef.current.className="hideLabel";

        if(this.emailInputRef.current.value==""||!emailValidation(this.emailInputRef.current.value))
        {
            this.emailLabelRef.current.className="showLabel"
            flag=false;
        }
        else this.emailLabelRef.current.className="hideLabel";

        if(this.passInputRef.current.value.length<6)
        {
            this.passLabelRef.current.className="showLabel"
            flag=false;
        }
        else this.passLabelRef.current.className="hideLabel";


        if(this.passInputRef.current.value!=this.passConfirmInputRef.current.value)
        {
            this.passConfirmLabelRef.current.className="showLabel"
            flag=false;
        }
        else this.passConfirmLabelRef.current.className="hideLabel";

     
        if(flag)
        {
            // console.dir( this.formRef.current);
            // this.formRef.current.onsubmit();
            this.props.onSubmitForm && this.props.onSubmitForm();//&& is ?
        }
        else{
            e.preventDefault();
        }
    
    }

    render() {
        return (
            <div className="signUpDiv">
                <div className="containerSignUp">
                    <h2>{this.props.header2}</h2>
                    <form ref={this.formRef} action={this.props.actionForm}/* onSubmit={this.props.onSubmitForm}*/>
                        <input ref={this.nameInputRef} className="inputSignUp" type="text" id="nameInput" /*name="name"*/ placeholder="First name" /><br/>
                        <div className="hideLabel" ref={this.nameLabelRef}><label for="name">*Name is missing</label></div>
                        <input ref={this.lastNameInputRef} className="inputSignUp" type="text" id="lastNameInput" /*name="lastName"*/ placeholder="Last name" /><br/>
                        <div ref={this.lastNameLabelRef} className="hideLabel"><label  for="lastName">*Last name is missing</label></div>
                        <input ref={this.emailInputRef} className="inputSignUp" type="email" id="emailInput" /*name="email"*/ placeholder="Email Address" required/><br/>
                        <div ref={this.emailLabelRef} className="hideLabel"><label  for="email">*Your email must be a valid email</label></div>
                        <input ref={this.passInputRef} className="inputSignUp" type="password" id="passInput" placeholder="Password" minlength="6" required/><br/>
                        <div ref={this.passLabelRef} className="passwordLabel"><label  for="password">*6 characters are required in the password</label></div>
                        <input ref={this.passConfirmInputRef} className="inputSignUp" type="password" id="passInputConfirm" placeholder="Confirm password" minlength="6" required/><br/>
                        <div ref={this.passConfirmLabelRef} className="hideLabel"><label  for="emaconfirmPasswordil">*Password didn't match</label></div>
                        
                        <button id="signInBtn" onClick={this.signInBtnClicked.bind(this)}>{this.props.btnText}</button>
                    </form>
                   
                </div>
            </div>
        )
    }
}


function emailValidation(email)
{
   if (!email.match(/^[\w\d]+@\w+[.]\w+([.]\w+){0,1}$/))//null
        return false;
    return true;
}

SignUp.defaultProps={
    header2:"Sign up",
    btnText:"Sign up"
}