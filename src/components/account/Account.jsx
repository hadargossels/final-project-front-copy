import React, { useState,useEffect} from 'react'
import {auth,db} from '../../firebase'
import {Link} from "react-router-dom"
import Auth from '../../Auth'
import {useAuth} from '../../context/AuthShopContext'


export default function Account(props) {

    const [firstName,setFirstName]=useState("")
    const [phone,setPhone]=useState("")
    const [lastName,setLastName]=useState("")
    const [country,setCountry]=useState("")
    const [username,setUsername]=useState()
    const [userNow,setUserNow]=useState([])
    const [order,setOrder]=useState([])
    const {currentUser}=useAuth()
    const {users}=useAuth()
    const {orders}=useAuth()
   

    useEffect(()=>{

        if(currentUser){
            for (let i=0;i<users.length;i++) {
                if(users[i].email===currentUser.email)
                    setUserNow(users[i])
            }
            let arrOrder = []
            for (let i=0;i<orders.length;i++) {
                if(orders[i].customer===currentUser.email)
                    arrOrder.push(orders[i])       
            }
            setOrder(arrOrder)
        }
        
    },[currentUser,users,orders])

    function userSignOut(){
        auth.signOut().then(() => {
            Auth.logout(()=>props.history.push("/login"))
          }).catch((error) => {
            console.log("something wrong happened")
          });
        }
    function changeValue(e){
        if(e.target.id==="phoneNumber") setPhone(e.target.value)
        if(e.target.id==="country") setCountry(e.target.value)
        if(e.target.id==="firstName") setFirstName(e.target.value)
        if(e.target.id==="lastName") setLastName(e.target.value)
        if(e.target.id==="userName") setUsername(e.target.value)
     }
    function handleForm(e){
        e.preventDefault()
 
        var userData = {
            firstName: firstName,
            lastName: lastName,
            country:country,
            username: username || userNow.username,
            phone: phone,
            id:userNow.id,
            email:userNow.email,
            role:userNow.role,
            activity:userNow.activity,
            date:userNow.date

          };
        var updates = {};
        updates['/users/' + userNow.id] = userData;

        db.ref().update(updates).then(()=>alert("user updated successfully"))
        .catch(()=>alert("issue with updating"))
    }

  
    return (
        <div className="container">
            <h1 className="text-center mt-4">Hello, {currentUser && (currentUser.displayName || userNow.username) }</h1>
            <div className="row">
                <div className="col-4">
                    <div className="container border rounded mt-4 mb-4 p-3 text-center">
                            <img src={currentUser && currentUser.photoURL} name="img" alt="..."></img>
                            <h2>{currentUser && (currentUser.displayName || userNow.username) }</h2>
                            <p>{currentUser && (currentUser.metadata.creationTime|| userNow.date)}</p>
                            <hr/>
                            <label htmlFor="img">Select image:</label>
                            {/* <input type="file" id="img" name="img" accept="image/*"/> */}
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
                            <label htmlFor="firstName" className="form-label">First name</label>
                            <input type="text" className="form-control" id="firstName" onChange={(event)=>changeValue(event)} defaultValue={userNow.firstName} disabled= {currentUser && (currentUser.providerData[0].providerId!=="password"? true:false)}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="emailAddress" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="emailAddress" value={currentUser ?currentUser.email:""} disabled />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="country" className="form-label">Country</label>
                            <input type="text" className="form-control" id="country" onChange={(event)=>changeValue(event)} defaultValue={userNow.country} disabled= {currentUser && (currentUser.providerData[0].providerId!=="password"? true:false)}/>
                        </div>
                        </div>
                        <div className="col">
                        <div className="mb-3">
                            <label htmlFor="laseName" className="form-label">Last name</label>
                            <input type="text" className="form-control" id="lastName" onChange={(event)=>changeValue(event)} defaultValue={userNow.lastName} disabled= {currentUser && (currentUser.providerData[0].providerId!=="password"? true:false)}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phoneNumber" className="form-label">Phone number</label>
                            <input type="text" className="form-control" id="phoneNumber" onChange={(event)=>changeValue(event)} defaultValue={userNow.phone}  disabled= {currentUser && (currentUser.providerData[0].providerId!=="password"? true:false)}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="userName" className="form-label">User name</label>
                            <input type="text" className="form-control" id="userName" onChange={(event)=>changeValue(event)} defaultValue={userNow.username} disabled= {currentUser && (currentUser.providerData[0].providerId!=="password"? true:false)}/>
                        </div>
                        </div>
                        <hr/>
                        <button type="submit"style={{width:"200px"}} className="btn btn-warning d-block mx-auto" disabled= {currentUser && (currentUser.providerData[0].providerId!=="password"? true:false)}>Update Details</button>
                        </div>
                        </div>
                        </form>
                        
                </div>
                    
                </div>
            </div>
            <div>

            </div>

            {order && order.map((obj)=>
            <div key={obj.id} className="container border">
            <div>You have purchased: {obj.products.map((item)=><div key={item.title}><b>{item.item} units of {item.title} </b></div>)}</div>
            <p>Total price: <b>${obj.total}</b></p>
            <p>Order number: <b>{obj.reference}</b></p>
            <p>Status: <b>{obj.status}</b></p>    
            </div>
            
            )}


            <Link to='/login' onClick={(e)=>userSignOut(e)} style={{width:"150px"}} className="btn d-block mx-auto btn-primary mb-3 mt-3">Sign out</Link>

        </div>
        
    )
}
