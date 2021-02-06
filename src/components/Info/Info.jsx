import React, { Component } from 'react'

export default class Info extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="text-center">Info about hardware walltets</h1><br/>
                <p>A hardware wallet is a special type of bitcoin wallet which stores the user's private keys in a secure hardware device.</p>

                    <p>They have major advantages over standard software wallets:</p>
                    <ol>
                        <li>private keys are often stored in a protected area of a microcontroller, and cannot be transferred out of the device in plaintext</li>
                        <li>immune to computer viruses that steal from software wallets</li>
                        <li>can be used securely and interactively, private keys never need to touch potentially-vulnerable software</li>
                        <li>much of the time, the software is open source, allowing a user to validate the entire operation of the device</li>
                    </ol>
            </div>
        )
    }
}
