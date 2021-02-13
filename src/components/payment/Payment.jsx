import React, { Component } from 'react'
import Dropdown from '../dropdown/Dropdown'
import Login from '../login/Login'
import './Payment.css'

export class Payment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            payment: true,
        }
        
    }
    render() {
        return (
            <div>
                <div>
                    <div>
                        <h3>Summery</h3>
                        <Dropdown/>
                    </div>
                    <div>
                        <h3>Sign in to proceed</h3>
                        <Login visibilty={this.state.payment ? 'none' : 'block'}/>
                    </div>
                    <form>
                    <table>
                        <tbody>
                            <tr>
                                <td><label htmlFor="firstname">First name:</label><br/><input type="text" id="firstname" name="firstname" required/></td>
                                <td><label htmlFor="lastname">Last name:</label><br/><input type="text" id="lastname" name="lastname" required/></td>
                            </tr>
                            <tr>
                                <td colSpan='2'><label htmlFor="email1">Email:</label><br/><input type="email" id="email1" name="email1" required/></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="password1">Password:</label><br/><input type="text" id="password1" name="password1" required/></td>
                                <td><label htmlFor="password2">Repete password:</label><br/><input type="text" id="password2" name="password2" required/></td>
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
                                <td>
                                <label htmlFor="delivery">Choose delivery:</label><br/>
                                    <select name="delivery" id="delivery" required>
                                    <option value="standard">Standard delivery: 10$</option>
                                    <option value="express">Express delivery: 20$</option>
                                    <option value="nextday">Next day delivery: 30$</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan='2'>
                                    Payment method: <br/>
                                    <input type="radio" id="card" name="gender" value="card" required/>
                                    <label for="card">Credit/Debit card</label>
                                    <input type="radio" id="paypal" name="gender" value="paypal"/>
                                    <label for="paypal">PayPal</label>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <input type="submit" value="Submit"/>
                </form>
                </div>

            </div>
        )
    }
}

export default Payment
