import React,{useState} from 'react'
import './ContactUs.css'
import Contact from '../../pictures/ContactUs.jpg'
import Store from '../../pictures/Bitcoin-Store.png';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import markerIconPng from 'leaflet/dist/images/marker-icon.png'
import {Icon} from 'leaflet'
import {useAuth} from '../../context/AuthShopContext'
import axios from 'axios'
export default function ContactUs() {
    const {details}=useAuth()
    const data={
        from: "",
        name: "",
        subject: "user question",
        text: ""
    }
    const [inputs,setInputs]=useState(data)


    function handleChange(e){
        const {name,value}=e.target
        setInputs(prev=>({...prev,[name]:value}))
    } 

    function submitForm(e){
    e.preventDefault()
    axios.post(`${process.env.REACT_APP_PROXY}/sendMailFromClient`,{
        from: inputs.from,
        name: inputs.name,
        subject: "user question",
        text: inputs.text
        })
        .then(function (response) {
            console.log(response)
          })
    }
    
        return (
            <div>
                <br/><h1 className="text-center">Please get in touch and our experts support</h1>
                    <h1 className="text-center">team will answer all your questions.</h1>
                    <br/><br/>
                    <div className="container">
                    <div className="row">
                        <div className="col-6 d-flex justify-content-end">
                        <form onSubmit={(event)=>submitForm(event)}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputName" className="form-label"><b>Full name *</b></label>
                                <input name="name" onChange={(event)=>handleChange(event)} placeholder="Full name *" type="text" className="form-control inputTxt" style={{width:"300px"}} id="exampleInputName" aria-describedby="emailHelp" required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label"><b>Email address *</b></label>
                                <input name ="from" onChange={(event)=>handleChange(event)} placeholder="Email *" type="email" className="form-control" style={{width:"300px"}} id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                            </div>
                        
                            <div><b>Are you an existing customer? *</b></div>
                            <div className="form-check" style={{padding:"none"}}>
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" required/>
                            <label className="form-check-label" htmlFor="flexRadioDefault1">Yes</label>
                            </div>
                            <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" required/>
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                            No
                            </label>
                            </div>
                            <label><b>Your message *</b></label>
                            <textarea name="text" onChange={(event)=>handleChange(event)} className="form-control" style={{resize:"none",width:"300px",height:"200px"}} placeholder="Your message *"></textarea>
                            <br/>
                            <button type="submit" className="btn btn-warning submitBtn d-flex" style={{margin:"0 auto"}}>Submit</button>
                            <br/>
                            </form>
                        </div>
                        <div className="col-6 text-center">
                            <img alt="..." src={Contact} className="contactImg"/>
                            <br/><br/>
                            <div><b>Phone number: </b><br/>{details && details[0].phoneNumber}</div>
                            <div><b>Email address:</b><br/> {details && details[0].storeEmail}</div>
                            <div><b>Our Address: </b><br/>{details && details[0].storeAddress}</div>
                        
                            <MapContainer center={[32.0671552, 34.7909145]} zoom={14} scrollWheelZoom={false}>
                                <TileLayer
                                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker 
                                icon={new Icon({iconUrl:markerIconPng})}
                                position={[32.0671552, 34.7909145]}
                                >
                                  <Popup>
                                  <div>
                                  <span className="text-center"><i className="fab fa-bitcoin" style={{color:"orange",fontSize:"20px"}}></i>{details && details[0].storeName}, </span>  
                                    <span><b>{details && details[0].storeAddress}</b></span><br/>
                                    <a href="http://localhost:3000/home"><img alt="..." src={Store} style={{width:"105px",height:"75px", marginLeft:"30px"}}/></a>
                                  </div>
                                  </Popup>
                                </Marker>
                              </MapContainer>
                              
                            <br/><br/>
                        </div>

                    </div>
                </div>
            </div>
        )
    }

