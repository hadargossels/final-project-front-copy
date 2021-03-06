// import React, {  } from 'react'
// import {auth} from "../../firebase"
// import {Link} from "react-router-dom"
// import Auth from '../../Auth'

// // let user = JSON.parse(localStorage.getItem('currentUser')) || [];

// export default function Dashboard(props){
    

//     function userSignOut(){
//     auth.signOut().then(() => {
//         Auth.logout(()=>props.history.push("/login"))
//       }).catch((error) => {
//         console.log("something wrong happened")
//       });
//     }

//         return (
//             <div>
//                 <h1 className="text-center mt-4">Hello {user.Username}</h1>
//                 <h1 className="text-center mt-4">Your Dashboard</h1> 
//                 <Link to='/login' onClick={(e)=>userSignOut(e)} style={{width:"150px"}} className="btn d-block mx-auto btn-warning">Sign out</Link>
//             </div>
//         )
//     }

