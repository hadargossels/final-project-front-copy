import React, { useState } from 'react'
import {auth} from '../../firebase'

export default function Account() {

    const [email,setEmail]=useState(auth.currentUser.email)

    function handleForm(e){
        e.preventDefault()
        var user = auth.currentUser;

        user.updateEmail(email).then(function() {
        console.log("update successful")
        }).catch(function(error) {
            console.log("error")
        });
    }
    function changeValue(e){
        setEmail(e.target.value)
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <div className="container border rounded mt-4 mb-4 p-3">
                            <img alt="..."></img>
                            <h2>Jonathan Binder</h2>
                            <p>Israel</p>
                            <p>10:22 AM GTM-7</p>
                            <hr/>
                            <button className="btn btn-warning d-block mx-auto">UPLOAD PICTURE</button>
                    </div>

                </div>
                <div className="col-8">
                <div className="container border rounded mt-4 mb-4 p-3">
                    <h2 className="text-center">User Profile</h2>
                    <hr/>
                    <form onSubmit={(event)=>handleForm(event)}>
                        <div className="container">
                        <div className="row">
                        <div className="col">
                        <div className="mb-3">
                            <label htmlFor="firstName" className="form-label">First name *</label>
                            <input type="text" className="form-control" id="firstName" onChange={(event)=>changeValue(event)}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="emailAddress" className="form-label">Email address *</label>
                            <input type="email" className="form-control" id="emailAddress" onChange={(event)=>changeValue(event)} value={email}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="country" className="form-label">Country *</label>
                            <input type="text" className="form-control" id="country" onChange={(event)=>changeValue(event)}/>
                        </div>
                        </div>
                        <div className="col">
                        <div className="mb-3">
                            <label htmlFor="laseName" className="form-label">Last name *</label>
                            <input type="text" className="form-control" id="laseName" onChange={(event)=>changeValue(event)}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phoneNumber" className="form-label">Phone number *</label>
                            <input type="text" className="form-control" id="phoneNumber" onChange={(event)=>changeValue(event)}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="userName" className="form-label">User name *</label>
                            <input type="text" className="form-control" id="userName" onChange={(event)=>changeValue(event)}/>
                        </div>
                        </div>
                        <hr/>
                        <button type="submit"style={{width:"200px"}} className="btn btn-warning d-block mx-auto">Update Details</button>
                        </div>
                        </div>
                        </form>
                        
                </div>
                    
                </div>
            </div>
            
        </div>
    )
}
