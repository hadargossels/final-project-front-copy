import React, { Component } from 'react'
import './Login.css'
export default class Login extends Component {
    render() {
        return (
            <div >
                <form id="formLogin">
                          <div class="mb-3">
                            <label htmlfor="exampleInputEmail1" class="form-label">
                              Email address
                            </label>
                            <input
                              type="email"
                              class="form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                            />
                            <div id="emailHelp" class="form-text">
                              We'll never share your email with anyone else.
                            </div>
                          </div>
                          <div class="mb-3">
                            <label
                              htmlfor="exampleInputPassword1"
                              class="form-label"
                            >
                              Password
                            </label>
                            <input
                              type="password"
                              class="form-control"
                              id="exampleInputPassword1"
                            />
                          </div>
                          <div class="mb-3 form-check">
                            <input
                              type="checkbox"
                              class="form-check-input"
                              id="exampleCheck1"
                            />
                            <label class="form-check-label" htmlfor="exampleCheck1">
                              Check me out
                            </label>
                          </div>
                            <button type="button" class="btn btn-success btnLogin">
                          Sign in
                        </button>
                        </form>
            </div>
        )
    }
}
