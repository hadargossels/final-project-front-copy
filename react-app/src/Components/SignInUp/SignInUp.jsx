// https://bbbootstrap.com/snippets/login-form-footer-and-social-media-icons-55203607

import React from 'react';
import './SignInUp.css';

export default function SignInUp() {

    let callRefBtn = React.createRef();

    return(
       <div className="lead" style={{textAlign: "center"}}>
           <br/><br/>
           <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
                <div className="row d-flex">
                    <div className="col-lg-6" style={{margin: "0 auto"}}>
                        <div className="card2 card border-0 px-4 py-5">
                            <div className="row mb-4 px-3" style={{margin: "0 auto"}}>
                                <h5 className="mb-0 mr-4 mt-2">Sign in with</h5>
                                <div className="text-center mr-3">
                                    <a style={{color: "#3b5998"}} href="#!" role="button"><i class="fab fa-facebook-f fa-lg"></i></a>
                                </div>
                                <div className="text-center mr-3">
                                    <a style={{color: "black"}} href="#!" role="button"><i class="fab fa-github fa-lg"></i></a>
                                </div>
                                <div className="btn-google text-center mr-3">
                                    <a style={{color: "#dd4b39"}} href="#!" role="button"><i class="fab fa-google fa-lg"></i></a>
                                </div>
                            </div>
                            <form onSubmit={e => { e.preventDefault(); callRefBtn.current.click(); }}>
                                <div className="row px-3 mb-4">
                                    <div className="line"></div> <small className="or text-center">OR</small>
                                    <div className="line"></div>
                                </div>
                                <div className="row px-3"> <label className="mb-1">
                                        <h6 className="mb-0 text-sm">Email Address</h6>
                                    </label> <input className="mb-4" type="text" name="text" placeholder="Enter a valid email address" required/> </div>
                                <div className="row px-3"> <label className="mb-1">
                                        <h6 className="mb-0 text-sm">Password</h6>
                                    </label> <input type="password" name="password" placeholder="Enter password" required/> </div>
                                <div className="row px-3 mb-4 my-3">
                                    <div className="custom-control custom-checkbox custom-control-inline"> <input id="chk1" type="checkbox" name="chk" className="custom-control-input"/> <label for="chk1" className="custom-control-label text-sm">Remember me</label> </div> <a href="#" className="ml-auto mb-0 text-sm">Forgot Password?</a>
                                </div>
                                <div className="row mb-3 px-3"> <button type="submit" className="btn btn-blue text-center" ref={callRefBtn} style={{margin: "0 auto"}}>Login</button> </div>
                                <div className="row mb-4 px-3"> <small className="font-weight-bold" style={{margin: "0 auto"}}>Don't have an account? <a className="text-danger ">Sign Up</a></small> </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    );
}