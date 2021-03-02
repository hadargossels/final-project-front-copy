import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import Map from '../../components/Map/Map'

export default class ContactUs extends Component {
    constructor(){
        super()
        this.state = {
            currentMsg: [{id:"name", value:"", valid:""}, {id:"email", value:"", valid:""}, {id:"msg", value:"", valid:""}],
            validMsg:false
        }
        this.validateField = this.validateField.bind(this)
    }

    addMsg(e){
        e.preventDefault()
        let validMsg = true;
        let currentMsg = [...this.state.currentMsg]
        for (let field of currentMsg){
            if (field.valid !== "is-valid"){
                field.valid = "is-invalid"
                validMsg = false;
            }
        }
        this.setState({validMsg})
    }

    updateMsg(e){
        let currentMsg = [...this.state.currentMsg]
        for (let obj of currentMsg){
            if (obj.id === e.target.id)
                obj.value = e.target.value
        }
        this.setState({currentMsg}, this.validateField(e))
    }

    validateField(e){
        let currentMsg = [...this.state.currentMsg]
        for (let field of currentMsg){
            if (field.id === e.target.id){
                switch (e.target.id) {
                    case "name":
                    case "msg":
                        if (e.target.value)
                            field.valid = "is-valid"
                        else
                            field.valid = "is-invalid"
                        break;
                    case "email":
                        let mailPattern = new RegExp(/^\w+@\w+(\.[A-z]+){1,2}$/);
                        if (e.target.value.match(mailPattern))
                            field.valid = "is-valid"
                        else
                            field.valid = "is-invalid"
                        break;
                    default:
                        break;
                }
                break;
            }
        }
        this.setState({currentMsg})
    }

    render() {
        return (
            <div className="py-5 text-center">
                {this.state.validMsg ? <Redirect to="/msgsent"/> : ""}
                <Map/>
                <div className="py-3 container">
                   <h2 className="py-2">Contact Us</h2> 
                   <div className="row">
                        <div className="col-md-4">
                            <h5 className="text-primary">Address</h5>
                            <span>96 Arlozorov St.</span><br/>
                            <span>Tel Aviv, Israel 6264718</span>
                        </div>
                        <div className="col-md-4 py-2">
                            <h5 className="text-primary">Working Hours</h5>
                            <span>Sunday-Thursday: 10:00-20:00</span><br/>
                            <span>Friday: 10:00-15:00</span><br/>
                            <span>Saturday: 19:00-22:00</span>
                        </div>
                        <div className="col-md-4">
                            <h5 className="text-primary">Contact Info</h5>
                            <span>Phone: 03-666-6666</span><br/>
                            <span>Email: placeholder@placeholder.com</span>
                        </div>
                    </div>
                    <div className="py-3">
                        <h2 className="py-2">Leave us a message</h2>
                        <form className="container">
                            <div className="row g-3 justify-content-center">
                                <div className="col-md-5">
                                    <input type="text" className={`form-control my-2 ${this.state.currentMsg[0].valid}`} id="name" onChange={(e)=>this.updateMsg(e)} value={this.state.currentMsg.name} placeholder="Name"/>
                                    <div className="invalid-feedback">Please fill your name.</div>
                                </div>
                                <div className="col-md-5">
                                    <input type="text" className={`form-control my-2 ${this.state.currentMsg[1].valid}`} id="email" onChange={(e)=>this.updateMsg(e)} placeholder="Email"/>
                                    <div className="invalid-feedback">Invalid email.</div>
                                </div>
                                <div className="col-md-10">
                                    <textarea rows="4" maxLength="500" className={`form-control my-2 ${this.state.currentMsg[2].valid}`} id="msg" onChange={(e)=>this.updateMsg(e)} placeholder="Message"></textarea>
                                    <div className="invalid-feedback">Please enter a message.</div>
                                </div>
                                <div className="col-md-6">
                                    <button onClick={(e)=>this.addMsg(e)} className="btn btn-lg btn-primary">Send your message!</button>
                                </div>
                            </div>
                        </form>
                    </div>
               </div>
            </div>
        )
    }
}
