import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class App extends Component {

    constructor(props) {

        super(props);

        this.state = {email: this.props.user.email};

        this.updateDetails = this.updateDetails.bind(this);
    }

    updateDetails(form) {

        this.props.user.updateEmail(form[2].value)
            .then(() => { window.alert("Email changed successfully") ;this.setState({email: form[2].value}) })
            .catch(function(error) {window.alert(error)});
    }

    render() {
        return(
            <div className="lead" style={{textAlign: "center", width: "95%", margin: "0 auto"}}>
                <br/><br/><br/><br/>

                <div className="main-body">
                
                <div>
                    <ol className="breadcrumb">
                        <li><NavLink to="/account" style={{textDecoration: "none"}}>Account&nbsp;</NavLink></li>
                            / <NavLink to={"/account/profile/"} style={{textDecoration: "none"}}><li className="active">&nbsp;Profile</li></NavLink>
                    </ol>
                </div>

                    <div className="row gutters-sm">
                        <div className="col-md-4 mb-3">
                        <div className="card">
                            <div className="card-body">
                            <div className="d-flex flex-column align-items-center text-center">
                                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150"/>
                                <div className="mt-3">
                                <h4>John Doe</h4>
                                <p className="text-secondary mb-1">Full Stack Developer</p>
                                <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                                <button className="btn btn-primary">Follow</button>
                                <button className="btn btn-outline-primary">Message</button>
                                </div>
                            </div>
                            </div>
                        </div>
                        {/* <div className="card mt-3">
                            <ul className="list-group list-group-flush">
                            <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-globe mr-2 icon-inline"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>Website</h6>
                                <span className="text-secondary">https://bootdey.com</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-github mr-2 icon-inline"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>Github</h6>
                                <span className="text-secondary">bootdey</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-twitter mr-2 icon-inline text-info"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>Twitter</h6>
                                <span className="text-secondary">@bootdey</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-instagram mr-2 icon-inline text-danger"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>Instagram</h6>
                                <span className="text-secondary">bootdey</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-facebook mr-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>Facebook</h6>
                                <span className="text-secondary">bootdey</span>
                            </li>
                            </ul>
                        </div> */}
                        </div>
                        <div className="col-md-8">
                        <form method="POST" onSubmit={(e) => { e.preventDefault(); this.updateDetails(e.target); }}>
                            <div className="card mb-3">
                                <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-3">
                                    <h5 className="mb-0">First Name</h5>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                    <input type="text" className="form-control" defaultValue="Kenneth" style={{textAlign: "center", width: "30%", margin: "0 auto", fontSize: "large"}} required disabled/>
                                    </div>
                                </div>
                                <hr/>
                                <div className="row">
                                    <div className="col-sm-3">
                                    <h5 className="mb-0">Last Name</h5>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                    <input type="text" className="form-control" defaultValue="Valdez" style={{textAlign: "center", width: "30%", margin: "0 auto", fontSize: "large"}} required disabled/>
                                    </div>
                                </div>
                                <hr/>
                                <div className="row">
                                    <div className="col-sm-3">
                                    <h5 className="mb-0">Email</h5>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                    <input type="text" className="form-control" defaultValue={this.state.email} style={{textAlign: "center", width: "30%", margin: "0 auto", fontSize: "large"}} required/>
                                    </div>
                                </div>
                                {/* <hr/>
                                <div className="row">
                                    <div className="col-sm-3">
                                    <h5 className="mb-0">Phone</h5>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                    <input type="text" className="form-control" defaultValue="(239) 816-9029" style={{textAlign: "center", width: "30%", margin: "0 auto", fontSize: "large"}} required disabled/>
                                    </div>
                                </div> */}
                                <hr/>
                                <div className="row">
                                    <div className="col-sm-3">
                                    <h5 className="mb-0">Mobile</h5>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                    <input type="text" className="form-control" defaultValue="(320) 380-4539" style={{textAlign: "center", width: "30%", margin: "0 auto", fontSize: "large"}} required disabled/>
                                    </div>
                                </div>
                                <hr/>
                                <div className="row">
                                    <div className="col-sm-3">
                                    <h5 className="mb-0">Address</h5>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                    <input type="text" className="form-control" defaultValue="Bay Area, San Francisco, CA" style={{textAlign: "center", width: "30%", margin: "0 auto", fontSize: "large"}} required disabled/>
                                    </div>
                                </div>
                                <hr/>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0"></h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        <button className="btn btn-primary">Save Changes</button>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </form>
                        {/* <div className="row gutters-sm">
                            <div className="col-sm-6 mb-3">
                            <div className="card h-100">
                                <div className="card-body">
                                <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">assignment</i>Project Status</h6>
                                <small>Web Design</small>
                                <div className="progress mb-3" style={{height: "5px"}}>
                                    <div className="progress-bar bg-primary" role="progressbar" style={{width: "80", ariaValuenow: "80", ariaValuemin: "0", ariaValuemax: "100"}}></div>
                                </div>
                                <small>Website Markup</small>
                                <div className="progress mb-3" style={{height: "5px"}}>
                                    <div className="progress-bar bg-primary" role="progressbar" style={{width: "72%", ariaValuenow: "72", ariaValuemin: "0", ariaValuemax: "100"}}></div>
                                </div>
                                <small>One Page</small>
                                <div className="progress mb-3" style={{height: "5px"}}>
                                    <div className="progress-bar bg-primary" role="progressbar" style={{width: "89%", ariaValuenow: "89", ariaValuemin: "0", ariaValuemax: "100"}}></div>
                                </div>
                                <small>Mobile Template</small>
                                <div className="progress mb-3" style={{height: "5px"}}>
                                    <div className="progress-bar bg-primary" role="progressbar" style={{width: "55%", ariaValuenow: "55", ariaValuemin: "0", ariaValuemax: "100"}}></div>
                                </div>
                                <small>Backend API</small>
                                <div className="progress mb-3" style={{height: "5px"}}>
                                    <div className="progress-bar bg-primary" role="progressbar" style={{width: "66%", ariaValuenow: "66", ariaValuemin:"0", ariaValuemax: "100"}}></div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-6 mb-3">
                            <div className="card h-100">
                                <div className="card-body">
                                <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">assignment</i>Project Status</h6>
                                <small>Web Design</small>
                                <div className="progress mb-3" style={{height: "5px"}}>
                                    <div className="progress-bar bg-primary" role="progressbar" style={{width: "80", ariaValuenow: "80", ariaValuemin: "0", ariaValuemax: "100"}}></div>
                                </div>
                                <small>Website Markup</small>
                                <div className="progress mb-3" style={{height: "5px"}}>
                                    <div className="progress-bar bg-primary" role="progressbar" style={{width: "72%", ariaValuenow: "72", ariaValuemin: "0", ariaValuemax: "100"}}></div>
                                </div>
                                <small>One Page</small>
                                <div className="progress mb-3" style={{height: "5px"}}>
                                    <div className="progress-bar bg-primary" role="progressbar" style={{width: "89%", ariaValuenow: "89", ariaValuemin: "0", ariaValuemax: "100"}}></div>
                                </div>
                                <small>Mobile Template</small>
                                <div className="progress mb-3" style={{height: "5px"}}>
                                    <div className="progress-bar bg-primary" role="progressbar" style={{width: "55%", ariaValuenow: "55", ariaValuemin: "0", ariaValuemax: "100"}}></div>
                                </div>
                                <small>Backend API</small>
                                <div className="progress mb-3" style={{height: "5px"}}>
                                    <div className="progress-bar bg-primary" role="progressbar" style={{width: "66%", ariaValuenow: "66", ariaValuemin:"0", ariaValuemax: "100"}}></div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div> */}
                        </div>
                    </div>
                </div>

                {/* <form className="form-signin">
                    <div className="text-center mb-4">
                        <img className="mb-4" src="/docs/4.5/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/>
                        <h1 className="h3 mb-3 font-weight-normal">Floating labels</h1>
                        <p>Build form controls with floating labels via the <code>:placeholder-shown</code> pseudo-element. <a href="https://caniuse.com/#feat=css-placeholder-shown">Works in latest Chrome, Safari, Firefox, and IE 10/11 (prefixed).</a></p>
                    </div>

                    <div className="form-label-group">
                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autofocus=""/>
                        <label for="inputEmail">Email address</label>
                    </div>

                    <div className="form-label-group">
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required=""/>
                        <label for="inputPassword">Password</label>
                    </div>

                    <div className="checkbox mb-3">
                        <label>
                        <input type="checkbox" value="remember-me"/> Remember me
                        </label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                    <p className="mt-5 mb-3 text-muted text-center">© 2017-2020</p>
                </form> */}

            <br/><br/><br/><br/><br/><br/>
            </div>
        );  
    }
}