import React, { Component } from 'react'
import Title from './Title'

export default class Register extends Component {

    constructor (props) {
        let filldsArray=[];

        super(props);
        this.cityValidation = this.cityValidation.bind(this);
        this.emailValidation = this.emailValidation.bind(this);
        this.addressValidation = this.addressValidation.bind(this);
        this.zipValidation = this.zipValidation.bind(this);
        this.signIn = this.signIn.bind(this);
        this.state = { 
            filldsArray : [{filld:"email",isFilled:false},
                            {filld:"password",isFilled:false},
                            {filld:"address",isFilled:false},
                            {filld:"city",isFilled:false},
                            {filld:"zip",isFilled:false},]
                        };
 
      }

    cityValidation(event){
        // console.log(this.state.filldsArray)
        let regex=/^[a-zA-Z]*$/;
        let arr = [...this.state.filldsArray];
        if(regex.test(event.target.value) && event.target.value.length>2)
        {
            event.target.setAttribute("class", "form-control is-valid")
            arr[3].isFilled = true;
            
        }
        else{
            arr[3].isFilled = false;
            event.target.setAttribute("class", "form-control is-invalid")
        }
        this.setState({filldsArray: arr});
        
    }
    emailValidation(event){
        let regex=/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        let arr = [...this.state.filldsArray];
        if(regex.test(event.target.value))
        {
            arr[0].isFilled = true;
            event.target.setAttribute("class", "form-control is-valid")
        }
        else{
            arr[0].isFilled = false;
            event.target.setAttribute("class", "form-control is-invalid")
        }
        this.setState({filldsArray: arr});
    }
    passwordValidation(event){
        let regex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
        // Min 1 uppercase letter.
        // Min 1 lowercase letter.
        // Min 1 special character.
        // Min 1 number.
        // Min 8 characters.
        // Max 30 characters.
        let arr = [...this.state.filldsArray];
        if(regex.test(event.target.value))
        {
            arr[1].isFilled = true;
            event.target.setAttribute("class", "form-control is-valid")
        }
        else{
            arr[1].isFilled = false;
            event.target.setAttribute("class", "form-control is-invalid")
        }
        this.setState({filldsArray: arr});
    }
    addressValidation(event){
        let arr = [...this.state.filldsArray];
        let regex=/^[a-zA-Z]+\s[a-zA-Z0-9]+/;                
        if(regex.test(event.target.value))
        {
            event.target.setAttribute("class", "form-control is-valid")
            arr[2].isFilled = true;
        }
        else{
            event.target.setAttribute("class", "form-control is-invalid")
            arr[2].isFilled = false;
        }
        this.setState({filldsArray: arr});

    }
    zipValidation (event){
        let arr = [...this.state.filldsArray];
        let regex=/^[0-9]{6}(?:-[0-9]{4})?$/; 
        if(regex.test(event.target.value))
        {
            event.target.setAttribute("class", "form-control is-valid")
            arr[4].isFilled = true;
        }
        else{
            event.target.setAttribute("class", "form-control is-invalid")
            arr[4].isFilled = false;
           
        }
        this.setState({filldsArray: arr});
    }
    signIn(event){
        if( this.state.filldsArray[0].isFilled 
        && this.state.filldsArray[1].isFilled
        && this.state.filldsArray[2].isFilled
        && this.state.filldsArray[3].isFilled
        && this.state.filldsArray[4].isFilled){
            alert( 'Welcome');
        }
        else{
            alert( 'Opss one or motre of the fillds is incorrect' );
           
        }
    }
    render() {
        return (
            
            <div className="container">
                <Title name="regi" title="ster"/>

                    <form action="/">
                        <div className="row">
                            <div className="form-group col-md-6 p-0">
                            <label for="inputEmail4" required>Email</label>
                            <input type="email" className="form-control" id="inputEmail4" placeholder="Email" required
                            onChange={(e)=> {
                                this.emailValidation(e);
                                }}/>
                            </div>
                            <div className="form-group col-md-6 p-0">
                            <label for="inputPassword4" required>Password</label>
                            <input type="password" className="form-control" id="inputPassword4" placeholder="Password" required
                            onChange={(e)=> {
                                this.passwordValidation(e);
                                }}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="inputAddress">Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" required
                            onChange={(e)=> {
                                this.addressValidation(e);
                                }}/>
                        </div>
                        <div className="form-group">
                            <label for="inputAddress2">Address 2</label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"
                            onChange={(e)=> {
                                this.addressValidation(e);
                                }}/>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                            <label for="inputCity">City</label>
                            <input type="text" className="form-control" id="inputCity" required
                            onChange={(e)=> {
                                this.cityValidation(e);
                                }}/>
                            </div>
                            <div className="form-group col-md-4">
                            <label for="inputState">State</label>
                            <select id="inputState" className="form-control" required>
                                <option selected>USA</option>
                                <option>Israel</option>
                                <option>French</option>
                                <option>England</option>
                            </select>
                            </div>
                            <div className="form-group col-md-2">
                            <label for="inputZip" required>Zip</label>
                            <input type="text" className="form-control" id="inputZip" required
                            onChange={(e)=> {
                                this.zipValidation(e);
                                }}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck"/>
                            <label className="form-check-label" for="gridCheck">
                                send me emails about new sales and new products.
                            </label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary"
                         onClick={(e)=> {
                            this.signIn(e);
                            }}>Sign in</button>
                    </form>
            </div>
        )
    }
}
