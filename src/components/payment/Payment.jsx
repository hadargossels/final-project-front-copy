import React, {Component} from 'react'
import Dropdown from '../dropdown/Dropdown'
import Login from '../login/Login'
import Paypal from '../Paypal'
import Success from '../Success/Success'
import Fail from '../Fail/Fail'
import './Payment.css'

export class Payment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            payment: true,
            shippingInfo: [],
            email: "",
            firstName: "",
            lastName: "",
            email1: "",
            phone: "",
            country: "",
            city: "",
            address: "",
            zip: "",
            paypal: true

        }
        console.log(this.state.shippingInfo)
    }

    shipping (e) {
        e.preventDefault()
        let shippingInfo = []
        for (let i =0; i<4; i++) {
            for (let j=0; j<2; j++) {
                let titel = e.target.childNodes[3].childNodes[0].childNodes[i].childNodes[j].childNodes[0].innerText
                let value = e.target.childNodes[3].childNodes[0].childNodes[i].childNodes[j].childNodes[2].value
                let shippingObject = {titel, value}
                shippingInfo.push(shippingObject)
            }
        }
        let note = e.target.childNodes[3].childNodes[0].childNodes[4].childNodes[0].childNodes[2].value
        let noteObj = {title: 'note', value: note}
        shippingInfo.push(noteObj)

        let email = e.target.childNodes[3].childNodes[0].childNodes[1].childNodes[0].childNodes[2].value
        setTimeout(()=>{this.setState({shippingInfo, email, paypal: false})},5)
    }

    validate (e) {
        if (e.target.id === 'firstName') {
            var patt = /[0-9]+/gm
            var value = e.target.value
            var res = patt.test(value);
            console.log(res)
            console.log(value)
            if (res === true || value === "") {
                setTimeout(()=>{this.setState({firstName: 'is-invalid'});},5)
            }
            else {
                setTimeout(()=>{this.setState({firstName: 'is-valid'});},5)
            } 
        }
        if (e.target.id === 'lastName') {
            var patt = /[0-9]+/gm
            var value = e.target.value
            var res = patt.test(value);
            console.log(res)
            console.log(value)
            if (res === true || value === "") {
                setTimeout(()=>{this.setState({lastName: 'is-invalid'});},5)
            }
            else {
                setTimeout(()=>{this.setState({lastName: 'is-valid'});},5)
            } 
        }
        if (e.target.id === 'email1') {
            var patt = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/gm
            var value = e.target.value
            var res = patt.test(value);
            console.log(res)
            console.log(value)
            if (res === true) {
                setTimeout(()=>{this.setState({email1: 'is-valid'});},5)
            }
            else if (res === false || value === "") {
                setTimeout(()=>{this.setState({email1: 'is-invalid'});},5)
            } 
        }
        if (e.target.id === 'phone1') {
            var patt = /[a-z,A-Z]+/gm
            var value = e.target.value
            var res = patt.test(value);
            console.log(res)
            console.log(value)
            if (res === true || value === "" || value.length < 10) {
                setTimeout(()=>{this.setState({phone: 'is-invalid'});},5)
            }
            else {
                setTimeout(()=>{this.setState({phone: 'is-valid'});},5)
            } 
        }
        if (e.target.id === 'country') {
            var patt = /[0-9]+/gm
            var value = e.target.value
            var res = patt.test(value);
            console.log(res)
            console.log(value)
            if (res === true || value === "") {
                setTimeout(()=>{this.setState({country: 'is-invalid'});},5)
            }
            else {
                setTimeout(()=>{this.setState({country: 'is-valid'});},5)
            } 
        }
        if (e.target.id === 'city') {
            var patt = /[0-9]+/gm
            var value = e.target.value
            var res = patt.test(value);
            console.log(res)
            console.log(value)
            if (res === true || value === "") {
                setTimeout(()=>{this.setState({city: 'is-invalid'});},5)
            }
            else {
                setTimeout(()=>{this.setState({city: 'is-valid'});},5)
            } 
        }
        if (e.target.id === 'address') {
            if (value === "") {
                setTimeout(()=>{this.setState({address: 'is-invalid'});},5)
            }
            else {
                setTimeout(()=>{this.setState({address: 'is-valid'});},5)
            } 
        }
        if (e.target.id === 'zip') {
            var patt = /[a-z,A-Z]+/gm
            var value = e.target.value
            var res = patt.test(value);
            console.log(res)
            console.log(value)
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
                <div className='payCont'>
                    <div className="summery">
                        <h3>Summery</h3>
                        <Dropdown/>
                    </div>
                    {localStorage.getItem("user").length === 0 ? <div>
                        <h3>Sign in to proceed</h3>
                        <Login/>
                    </div> : null}
                    {localStorage.getItem("user").length > 0 ? 
                    <div className="shippingI">
                        <form onSubmit={(e)=>{this.shipping(e)}}>
                        <h3>Shipping information</h3><br/>
                        <span style={{color: 'red'}}>* required</span>
                    <table>
                        <tbody>
                            <tr>
                                <td><label htmlFor="firstName" className="form-label">First name *</label><br/>
                                <input type="text" className={"form-control "+this.state.firstName} onChange={(e)=>{this.validate(e)}} id="firstName" required/></td>
                                <td><label htmlFor="lastName" className="form-label">Last name *</label><br/>
                                <input type="text" className={"form-control "+this.state.lastName} onChange={(e)=>{this.validate(e)}} id="lastName" required/></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="email1" className="form-label">Email *</label><br/>
                                <input type="text" className={"form-control "+this.state.email1} onChange={(e)=>{this.validate(e)}} id="email1" required/></td>
                                <td><label htmlFor="phone1" className="form-label">Phone</label><br/>
                                <input type="text" className={"form-control "+this.state.phone} onChange={(e)=>{this.validate(e)}} id="phone1" required/></td>
                            </tr>
                            <tr>
                            <td><label htmlFor="country" className="form-label">Country *</label><br/>
                                <input type="text" className={"form-control "+this.state.country} onChange={(e)=>{this.validate(e)}} id="country" required/></td>
                                <td><label htmlFor="city" className="form-label">City *</label><br/>
                                <input type="text" className={"form-control "+this.state.city} onChange={(e)=>{this.validate(e)}} id="city" required/></td>
                            </tr>
                            <tr>
                            <td><label htmlFor="address" className="form-label">Address *</label><br/>
                                <input type="text" className={"form-control "+this.state.address} onChange={(e)=>{this.validate(e)}} id="address" required/></td>
                                <td><label htmlFor="zip" className="form-label">Zip *</label><br/>
                                <input type="text" className={"form-control "+this.state.zip} onChange={(e)=>{this.validate(e)}} id="zip" required/></td>
                            </tr>
                            <tr>
                                <td colSpan='2'><label htmlFor="notesarea">Notes:</label><br/>
                                <textarea className='form-control' id="notesarea" name="notesarea" rows="4" cols="55"></textarea></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="shippingI">
                        <input type="submit" className='payBtn' value="Submit your shipping information"/>
                    </div>
                    </form><br/>
                    <div><h3>Payment method:</h3> <br/>
                        <Paypal/></div>
                    <button  className='payBtn' data-bs-toggle="modal" data-bs-target={"#modalPay"} disabled={this.state.paypal}>Submit your order</button>
                    <div className="modal fade" id={"modalPay"} tabIndex="-1" aria-labelledby={"exampleModalLabel"} aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            <div>
                                {localStorage.getItem("orderErr").length === 0 ? <Success email={this.state.email}/> : <Fail/>}
                            </div>
                        </div>
                        </div>
                        </div>
                    </div>
                    : null}
                    
                </div>

            </div>
        )
    }
}

export default Payment
