import React, { useState,useEffect } from 'react'
import {auth} from '../../../firebase'

const PrivetSection = props=> {
    const [myPersonal, setMyPersonal] = useState("")
    // console.log(auth.currentUser);
    useEffect(() => {
        auth.onAuthStateChanged(user=> {
            if (!user) {
               props.history.push('/')
            }
            else{
                setMyPersonal(
                    <h1>Your personal page</h1>
                )
            }
        });
    }, [])


        return (
            <div className="container text-center p-5">
                {myPersonal}
            </div>
        )
}
export default PrivetSection