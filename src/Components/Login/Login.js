import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
    render () {
        return(    
            <main className="Login my-64">
                <div className="bg-gray-300 mx-auto w-1/3 text-center text-2xl shadow shadow-md border-4 rounded border-gray-100">
                    <h1 className="text-6xl text-yellow-600 py-8">Sign In</h1>
                    <form>
                        <p  className="pb-4">
                        <label htmlFor="email">Email:&nbsp;&nbsp;&nbsp;</label>
                        <input type="email" id="email" name="email"/>
                        </p>
                        <p className="pb-4">
                        <label htmlFor="password">Password:&nbsp;&nbsp;&nbsp;</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password"
                        />
                        </p>
                        <input 
                            type="submit" 
                            value="Enter" 
                            className="text-yellow-800 my-4 bg-yellow-400 text-white active:bg-yellow-400 font-bold uppercase text-lg px-4 py-2 rounded shadow-md hover:shadow-none outline-none focus:outline-none"
                        />
                    </form>
                    <p className="my-6 pb-1.5">
                        New?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button className="shadow bg-yellow-700 text-white active:bg-yellow-700 font-bold uppercase text-lg px-4 py-2 rounded shadow-lg hover:shadow-none outline-none focus:outline-none my-4 display-inline text-yellow-100">
                            Sign Up Now!
                        </button>
                    </p>
                </div>
            </main>
        )
    }
}

export default Login;