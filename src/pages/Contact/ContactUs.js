import axios from 'axios';
import React, {useState} from 'react'
import Map from '../../components/Map/Map'

export default function ContactUs() {
    const [validFields, setValidFields] = useState({name:"",email:"", subject:"",message:""})
    const [alert, setAlert] = useState("")

    function addMsg(e){
        e.preventDefault()
        let mailPattern = new RegExp(/^\w+@\w+(\.[A-z]+){1,2}$/);
        let newValidFields = {...validFields}

        let isValid = true;

        if (e.target[0].value){
            newValidFields.name = "is-valid"
        }
        else{
            newValidFields.name = "is-invalid"
            isValid = false
        }

        if (mailPattern.test(e.target[1].value)){
            newValidFields.email = "is-valid"
        }
        else{
            newValidFields.email = "is-invalid"
            isValid = false
        }

        if (e.target[2].value){
            newValidFields.subject = "is-valid"
        }
        else{
            newValidFields.subject = "is-invalid"
            isValid = false
        }

        if (e.target[3].value){
            newValidFields.message = "is-valid"
        }
        else{
            newValidFields.message = "is-invalid"
            isValid = false
        }
        setValidFields(newValidFields)
        if (isValid){
            axios.post(`${process.env.REACT_APP_SERVER}/tickets`, {name:e.target[0].value, sender:e.target[1].value, subject:e.target[2].value, body:e.target[3].value,},{headers: {Authorization: `bearer ${process.env.REACT_APP_PUBLIC_HEADER}`}}).then(response=>{
                if (response.data){
                    setAlert(`Message sent! Your appeal number is ${response.data._id}`)
                    axios.post(`${process.env.REACT_APP_SERVER}/mail/sendMail`, {sender:e.target[1].value, id:response.data._id})
                }
            })
        }
    }


    return (
        <div className="py-5 text-center">
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
                    <div className={`alert alert-success ${alert? "" : "d-none"}`}>{alert}</div>
                    <form className="container" onSubmit={(e)=>addMsg(e)}>
                        <div className="row g-3 justify-content-center">
                            <div className="col-md-5">
                                <input type="text" className={`form-control my-2 ${validFields.name}`} placeholder="Name"/>
                                <div className="invalid-feedback">Please fill your name.</div>
                            </div>
                            <div className="col-md-5">
                                <input type="text" className={`form-control my-2 ${validFields.email}`} placeholder="Email"/>
                                <div className="invalid-feedback">Invalid email.</div>
                            </div>
                            <div className="col-md-10">
                                <input type="text" className={`form-control my-2 ${validFields.subject}`} placeholder="Subject"/>
                                <div className="invalid-feedback">Please enter the message subject.</div>
                            </div>
                            <div className="col-md-10">
                                <textarea rows="4" maxLength="500" className={`form-control my-2 ${validFields.message}`} id="msg" placeholder="Message"></textarea>
                                <div className="invalid-feedback">Please enter a message.</div>
                            </div>
                            <div className="col-md-6">
                                <button className="btn btn-lg btn-primary">Send your message!</button>
                            </div>
                        </div>
                    </form>
                </div>
           </div>
        </div>
    )
}

