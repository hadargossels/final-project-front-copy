import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Newaccount extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }  
    }
    render() {
        return (
            <div>
                <form>
                    <table>
                        <tbody>
                            <tr>
                                <td><label htmlFor="firstname">First name:</label></td>
                                <td><label htmlFor="lastname">Last name:</label></td>
                            </tr>
                            <tr>
                                <td><input type="text" id="firstname" name="firstname"/></td>
                                <td><input type="text" id="lastname" name="lastname"/></td>
                            </tr>
                            <tr>
                                <td colSpan='2'><label htmlFor="email1">Email:</label></td>
                            </tr>
                            <tr>
                                <td colSpan='2'><input type="email" id="email1" name="email1"/></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="password1">Password:</label></td>
                                <td><label htmlFor="password2">Repete password:</label></td>
                            </tr>
                            <tr>
                                <td><input type="text" id="password1" name="password1"/></td>
                                <td><input type="text" id="password2" name="password2"/></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="country">Country:</label></td>
                                <td><label htmlFor="city">City:</label></td>
                            </tr>
                            <tr>
                                <td><input type="text" id="country" name="country"/></td>
                                <td><input type="text" id="city" name="city"/></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="address">Address:</label></td>
                                <td><label htmlFor="zip">Zip code:</label></td>
                            </tr>
                            <tr>
                                <td><input type="text" id="address" name="address"/></td>
                                <td><input type="text" id="zip" name="zip"/></td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        )
    }
}

Newaccount.propTypes = {
    name: PropTypes.string
  };

export default Newaccount
