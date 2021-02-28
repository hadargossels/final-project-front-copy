import React, { Component } from 'react'
import './profileUser.css'

export default class ProfileUser extends Component {
    onSubmitForm(e){
        e.preventDefault();
    }
    render() {
        return (
            <div className="profileUserDiv">
                <div className="row justify-content-center">
                    <div className="sumDiv col-3">
                        <img src="https://react-material-dashboard.devias.io/static/images/avatars/avatar_6.png"/>
                        <h3>header name</h3>
                        <p>UPLOAD PICTURE</p>
                    </div>
                    <div className="profileDiv col-7">
                        <h3>Profile</h3>
                        <hr/>
                        <form className="row justify-content-center" onSubmit={this.onSubmitForm.bind(this)}>
                            <div className="inputDiv col-5">
                                <label className="Labels">*First name</label>
                                <input ref={this.nameInputRef} className="inputProf" type="text" id="nameprof"/><br/>
                                <div className="hideLabelprof" ref={this.nameLabelRef}><label className="redLabel">*Name is missing</label></div>
                            </div>
                            <div className="inputDiv col-5"> 
                                <label className="Labels">*Last name</label>
                                <input ref={this.lastNameInputRef} className="inputProf" type="text" id="lastNameprof"/><br/>
                                <div ref={this.lastNameLabelRef} className="hideLabelprof"><label className="redLabel">*Last name is missing</label></div>
                            </div>
                            <div className="inputDiv col-5">
                            <label className="Labels">*Email Address</label>
                                <input ref={this.emailInputRef} className="inputProf" type="email" id="emailprof" /><br/>
                                <div ref={this.emailLabelRef} className="hideLabelprof"><label className="redLabel">*Your email must be a valid email</label></div>
                            </div>
                            <div className="inputDiv col-5">
                                <label className="Labels">*Phone number</label>
                                <input ref={this.phoneInputRef} className="inputProf" type="tel" id="phoneProf" /><br/>
                                <div ref={this.phoneLabelRef} className="hideLabelprof"><label className="redLabel">*The phone number is incorrect</label></div>
                            </div>
                            <button className="saveBtn col-3">SAVE DETAILES</button>
                        </form>

                    </div>

                </div>
                
            </div>
        )
    }
}
