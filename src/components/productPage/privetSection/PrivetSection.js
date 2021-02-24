import React from 'react'
import {auth} from '../../../firebase'

const PrivetSection = props=> {

        auth.onAuthStateChanged(user=> {
            if (!user) {
               props.history.push('/')
            }
        });
        return (
            <div className="container text-center p-5">
                <h1>Your personal page</h1>
            </div>
        )
}
export default PrivetSection