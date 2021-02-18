import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './Newaccount.css'
import Login from '../login/Login';

export class Newaccount extends Component {
    constructor(props) {
        super(props)
        this.state = {
            accountInfo: [],
            email: "",
            firstName: "",
            lastName: "",
            email1: "",
            phone: "",
            country: "",
            city: "",
            address: "",
            zip: "",
            password1: "",
            password2: "",
            password: "",
            username: "",
            finished: false
        }  
    }

    accountDetails (e) {
        e.preventDefault()
        console.log(e.target.childNodes[3].childNodes[0].childNodes[0].childNodes[0].childNodes[0].innerText);
        let accountInfo = []
        for (let i =0; i<5; i++) {
            for (let j=0; j<2; j++) {
                let titel = e.target.childNodes[3].childNodes[0].childNodes[i].childNodes[j].childNodes[0].innerText
                
                let value = e.target.childNodes[3].childNodes[0].childNodes[i].childNodes[j].childNodes[2].value
                let accountObj = {titel, value}
                accountInfo.push(accountObj)
            }
        }

        let username = e.target.childNodes[3].childNodes[0].childNodes[1].childNodes[0].childNodes[2].value
        let patt = /[^@]+/gm
        username = patt.exec(username);
        username = username[0]
        setTimeout(()=>{this.setState({accountInfo, username, finished: true})},5)
    }

    validate (e) {
        let patt = ""
        let value = ""
        let res = ""
        if (e.target.id === 'firstName') {
            patt = /[0-9]+/gm
            value = e.target.value
            res = patt.test(value);
            if (res === true || value === "") {
                setTimeout(()=>{this.setState({firstName: 'is-invalid'});},5)
            }
            else {
                setTimeout(()=>{this.setState({firstName: 'is-valid'});},5)
            } 
        }
        if (e.target.id === 'lastName') {
            patt = /[0-9]+/gm
            value = e.target.value
            res = patt.test(value);
            if (res === true || value === "") {
                setTimeout(()=>{this.setState({lastName: 'is-invalid'});},5)
            }
            else {
                setTimeout(()=>{this.setState({lastName: 'is-valid'});},5)
            } 
        }
        if (e.target.id === 'email1') {
            patt = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/gm
            value = e.target.value
            res = patt.test(value);
            if (res === true) {
                setTimeout(()=>{this.setState({email1: 'is-valid'});},5)
            }
            else if (res === false || value === "") {
                setTimeout(()=>{this.setState({email1: 'is-invalid'});},5)
            } 
        }
        if (e.target.id === 'phone1') {
            patt = /[a-z,A-Z]+/gm
            value = e.target.value
            res = patt.test(value);
            if (res === true || value === "" || value.length < 10) {
                setTimeout(()=>{this.setState({phone: 'is-invalid'});},5)
            }
            else {
                setTimeout(()=>{this.setState({phone: 'is-valid'});},5)
            } 
        }
        if (e.target.id === 'country') {
            patt = /[0-9]+/gm
            value = e.target.value
            res = patt.test(value);
            if (res === true || value === "") {
                setTimeout(()=>{this.setState({country: 'is-invalid'});},5)
            }
            else {
                setTimeout(()=>{this.setState({country: 'is-valid'});},5)
            } 
        }
        if (e.target.id === 'city') {
            patt = /[0-9]+/gm
            value = e.target.value
            res = patt.test(value);
            if (res === true || value === "") {
                setTimeout(()=>{this.setState({city: 'is-invalid'});},5)
            }
            else {
                setTimeout(()=>{this.setState({city: 'is-valid'});},5)
            } 
        }
        if (e.target.id === 'address') {
            value = e.target.value
            if (value === "") {
                setTimeout(()=>{this.setState({address: 'is-invalid'});},5)
            }
            else {
                setTimeout(()=>{this.setState({address: 'is-valid'});},5)
            } 
        }
        if (e.target.id === 'password1') {
            
            value = e.target.value
            if (value.length < 8) {
                setTimeout(()=>{this.setState({password1: 'is-invalid'});},5)
            }
            else {
                setTimeout(()=>{this.setState({password1: 'is-valid', password: value});},5)
            } 
        }
        if (e.target.id === 'password2') {
            value = e.target.value
            if (value !== this.state.password) {
                setTimeout(()=>{this.setState({password2: 'is-invalid'});},5)
            }
            else {
                setTimeout(()=>{this.setState({password2: 'is-valid'});},5)
            } 
        }
        if (e.target.id === 'zip') {
            patt = /[a-z,A-Z]+/gm
            value = e.target.value
            res = patt.test(value);
            if (res === true || value === "") {
                setTimeout(()=>{this.setState({zip: 'is-invalid'});},5)
            }
            else {
                setTimeout(()=>{this.setState({zip: 'is-valid'});},5)
            } 
        }
    }
    render() {
        return (
            <div>
                {this.state.finished ? 
                <Login/> : 
                <div  className='newacc'>
               <form onSubmit={(e)=>{this.accountDetails(e)}}>
                        <h3>Create new account</h3><br/>
                        <span style={{color: 'red'}}>* required</span>
                    <table>
                        <tbody>
                            <tr>
                                <td><label htmlFor="firstName" className="form-label">First name *</label><br/>
                                <input type="text" className={"form-control "+this.state.firstName} onChange={(e)=>{this.validate(e)}} id="firstName" placeholder="Letters only" required/></td>
                                <td><label htmlFor="lastName" className="form-label">Last name *</label><br/>
                                <input type="text" className={"form-control "+this.state.lastName} onChange={(e)=>{this.validate(e)}} id="lastName" placeholder="Letters only" required/></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="email1" className="form-label">Email *</label><br/>
                                <input type="text" className={"form-control "+this.state.email1} onChange={(e)=>{this.validate(e)}} id="email1" required/></td>
                                <td><label htmlFor="phone1" className="form-label">Phone *</label><br/>
                                <input type="text" className={"form-control "+this.state.phone} onChange={(e)=>{this.validate(e)}} id="phone1" placeholder="Digits only, at least 10 digits" required/></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="password1" className="form-label">Password *</label><br/>
                                <input type="text" className={"form-control "+this.state.password1} onChange={(e)=>{this.validate(e)}} id="password1" placeholder="At least 8 charachters" required/></td>
                                <td><label htmlFor="password2" className="form-label">Repeat password *</label><br/>
                                <input type="text" className={"form-control "+this.state.password2} onChange={(e)=>{this.validate(e)}} id="password2" placeholder="Your password should match" required/></td>
                            </tr>
                            <tr>
                            <td><label htmlFor="country" className="form-label">Country *</label><br/>
                                <input type="text" className={"form-control "+this.state.country} onChange={(e)=>{this.validate(e)}} id="country" placeholder="Letters only" required/></td>
                                <td><label htmlFor="city" className="form-label">City *</label><br/>
                                <input type="text" className={"form-control "+this.state.city} onChange={(e)=>{this.validate(e)}} id="city" placeholder="Letters only" required/></td>
                            </tr>
                            <tr>
                            <td><label htmlFor="address" className="form-label">Address *</label><br/>
                                <input type="text" className={"form-control "+this.state.address} onChange={(e)=>{this.validate(e)}} id="address" required/></td>
                                <td><label htmlFor="zip" className="form-label">Zip *</label><br/>
                                <input type="text" className={"form-control "+this.state.zip} onChange={(e)=>{this.validate(e)}} id="zip" placeholder="Digits only" required/></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="subBtnNew">
                        <input type="submit" className='payBtn' value="Submit"/>
                    </div>
                    </form>
                    </div>}
            </div>
        )
    }
}

export default Newaccount
