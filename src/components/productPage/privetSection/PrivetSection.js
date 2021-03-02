import React, { useState,useEffect , useRef } from 'react'
import {auth} from '../../../firebase'

const PrivetSection = props=> {
    const [myPersonal, setMyPersonal] = useState("")
    const myName = useRef(null)
    const myEmail = useRef(null)
    const myAddress = useRef(null)
    const myCountry = useRef(null)
    const myCity = useRef(null)
    // console.log(auth.currentUser);
    console.log(auth.currentUser);
    const user = auth.currentUser;
    useEffect(() => {
        auth.onAuthStateChanged(user=> {
            if (!user) {
               props.history.push('/')
            }
            else{
                const isGoogle = user.providerData[0].providerId === 'google.com'? true : false;
                setMyPersonal(
                    <div className="row">
                        <div className="col-sm-12 col-md-4">
                            {isGoogle?<img className="rounded-pill" src={user.photoURL} alt="no pic" />:<i className="far fa-user fs-1"></i>}
                            <h2>{user.displayName}</h2>  
                        </div>
                        <div className="col-sm-6 col-md-1">
                            <label className="">Name</label>
                            <label className="mt-3">email</label>
                            <label className="mt-3">Address</label>
                            <label className="mt-3">Country</label>
                            <label className="mt-3">City</label>
                        </div>
                        <div className="col-sm-6 col-md-5">
                            {isGoogle? <input ref={myName} className="mt-2" type="text" value={user.displayName} /> : <input ref={myName} className="" type="text" defaultValue={user.displayName} />}<br/>
                            {isGoogle? <input ref={myEmail} className="mt-2" type="email" value={user.email} /> : <input ref={myEmail} className="mt-2" type="email" defaultValue={user.email} />}<br/>
                            <input ref={myAddress} className="mt-2" type="text" placeholder={user.address?user.address:"Address"} /><br/>
                            <input ref={myCountry} className="mt-2" type="text" placeholder={user.country?user.country:"Country"} /><br/>
                            <input ref={myCity} className="mt-2" type="text" placeholder={user.city?user.city:"City"} /><br/>
                            <button onClick={updateProfile} className="btn btn-dark mt-2">Update Profile</button>
                        </div>
                        <div className="col-sm-12 col-md-2">
                            <img src="/images/experisSportLogo.png"></img>
                        </div>
                    </div>
                )
            }
        });
    }, [])


        return (
            <div className="container p-5">
                {myPersonal}
            </div>
        )

        function updateProfile(){
            user.updateProfile({
                displayName: myName.current.value,
                email : myEmail.current.value,
                address : myAddress.current.value,
                country : myCountry.current.value,
                city : myCity.current.value,
                // photoURL: "https://example.com/jane-q-user/profile.jpg"
              }).then(()=> {window.location.reload()})
        }
}
export default PrivetSection