import React, {Component} from 'react'
import Dropdown from '../dropdown/Dropdown'
import Login from '../login/Login'
import Paypal from '../Paypal'
import './Payment.css'

export class Payment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            payment: true,
            shippingInfo: []
        }
        
    }

    shipping (e) {
        e.preventDefault()
        let shippingInfo = []
        for (let i =0; i<4; i++) {
            for (let j=0; j<2; j++) {
                let titel = e.target.childNodes[1].childNodes[0].childNodes[i].childNodes[j].childNodes[0].innerText
                let value = e.target.childNodes[1].childNodes[0].childNodes[i].childNodes[j].childNodes[2].value
                let shippingObject = {titel, value}
                shippingInfo.push(shippingObject)
            }
        }
        let note = e.target.childNodes[1].childNodes[0].childNodes[4].childNodes[0].childNodes[2].value
        let noteObj = {title: 'note', value: note}
        shippingInfo.push(noteObj)

        setTimeout(()=>{this.setState({shippingInfo});},5)
    }
    render() {

        return (
            <div>
                <div>
                    <div>
                        <h3>Summery</h3>
                        <Dropdown/>
                    </div>
                    {localStorage.getItem("user").length === 0 ? <div>
                        <h3>Sign in to proceed</h3>
                        <Login visibilty={this.state.payment ? 'none' : 'block'}/>
                    </div> : null}
                    {localStorage.getItem("user").length > 0 ? <form onSubmit={(e)=>{this.shipping(e)}}>
                        <h3>Shipping information</h3>
                    <table>
                        <tbody>
                            <tr>
                                <td><label htmlFor="firstname">First name:</label><br/><input type="text" id="firstname" name="firstname" required/></td>
                                <td><label htmlFor="lastname">Last name:</label><br/><input type="text" id="lastname" name="lastname" required/></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="email1">Email:</label><br/><input type="email" id="email1" name="email1" required/></td>
                                <td><label htmlFor="phone1">Phone:</label><br/><input type="tel" id="phone1" name="phone1" required/></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="country">Country:</label><br/><input type="text" id="country" name="country" required/></td>
                                <td><label htmlFor="city">City:</label><br/><input type="text" id="city" name="city" required/></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="address">Address:</label><br/><input type="text" id="address" name="address" required/></td>
                                <td><label htmlFor="zip">Zip code:</label><br/><input type="text" id="zip" name="zip" required/></td>
                            </tr>
                            <tr>
                                <td colSpan='2'><label htmlFor="notesarea">Notes:</label><br/><textarea id="notesarea" name="notesarea" rows="4" cols="50"></textarea></td>
                            </tr>
                            <tr>
                                <td colSpan='2'>
                                    Payment method: <br/>
                                    <Paypal/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <input type="submit" value="Submit"/>
                </form> : null}
                    
                </div>

            </div>
        )
    }
}

export default Payment
