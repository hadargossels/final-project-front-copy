
import React from 'react'
import './Login.css';
import Auth from '../../Auth'

export default function Login (props) {
    
        return (
            <div>
                <h1 className="text-center">Login Page</h1><br/>
                <button onClick={()=>
                    Auth.login(()=>
                        props.history.push("/dashboard")
                    )
                } 
                style={{backgroundColor:"green"}}>Login</button><br/>
                <button onClick={()=>
                    Auth.logout(()=>
                        props.history.push("/home")
                    )
                } 
                style={{backgroundColor:"red"}}>Logout</button><br/>
            </div>
        )
    
}
