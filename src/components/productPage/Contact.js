import React, { Component } from 'react';
// import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './contact.css'

class Contact extends Component{

    render(){
       return (
           <div 
           style={{
            backgroundImage:"url('/images/contact-bg.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize:"cover",
            height: "85vh",
            backgroundPosition:"center" 
          }}
           >
               <div className="container pt-4">
               <div className="row" id="contatti">
                    <div className="container mt-5" >

                        <div className="row" style={{height:"60vh"}}>
                        <div className="col-md-6 maps" >
                            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                                <TileLayer
                                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={[51.505, -0.09]}>
                                    <Popup>
                                    A pretty CSS3 popup. <br /> Easily customizable.
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        </div>
                        <div className="col-md-6">
                            <h2 className="text-uppercase mt-3 font-weight-bold text-white">CONTACT US</h2>
                            <form action="">
                            <div className="row">
                                <div className="col-lg-6">
                                <div className="form-group mb-3">
                                    <input type="text" className="form-control mt-2" placeholder="Name" required/>
                                </div>
                                </div>
                                {/* <div className="col-lg-6">
                                <div className="form-group">
                                    <input type="text" className="form-control mt-2" placeholder="Oggetto" required/>
                                </div>
                                </div> */}
                                <div className="col-lg-6">
                                <div className="form-group mb-3">
                                    <input type="email" className="form-control mt-2" placeholder="Email" required/>
                                </div>
                                </div>
                                {/* <div className="col-lg-6">
                                <div className="form-group">
                                    <input type="number" className="form-control mt-2" placeholder="Telefono" required/>
                                </div>
                                </div> */}
                                <div className="col-12">
                                <div className="form-group">
                                    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Your message" rows="4" required></textarea>
                                </div>
                                </div>
                                {/* <div className="col-12">
                                <div className="form-group">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
                                    <label className="form-check-label" htmlFor="invalidCheck2">
                                    Accetta le condizioni
                                    </label>
                                </div>
                                </div>
                                </div> */}
                                <div className="col-12">
                                <button className="btn btn-light" type="submit">Submit</button>
                                </div>
                            </div>
                            </form>
                            <div className="text-white">
                            <h2 className="text-uppercase mt-4 font-weight-bold">Our info</h2>

                            {/* <i className="fas fa-phone mt-3"></i> <a href="tel:+">(+39) 123456</a><br/> */}
                            <i className="fas fa-phone mt-3"></i> <a href="tel:+">(+972) 123456</a><br/>
                            <i className="fa fa-envelope mt-3"></i> <a href="">info@test</a><br/>
                            <i className="fas fa-globe mt-3"></i> Tel aviv, 1, 1<br/>
                            {/* <i className="fas fa-globe mt-3"></i> Piazza del Colosseo, 1, 00184 Roma<br/> */}
                            {/* <div className="my-4">
                            <a href=""><i className="fab fa-facebook fa-3x pr-4"></i></a>
                            <a href=""><i className="fab fa-linkedin fa-3x"></i></a>
                            </div> */}
                            </div>
                        </div>

                        </div>
                    </div>
                    </div>
{/* 
                    <div className="row text-center bg-success text-white" id="author">
                        <div className="col-12 mt-4 h3 ">
                        <a href="#">by P. Fattoruso</a>
                        </div>
                        <div className="col-12 my-2">
                        <a href="https://www.linkedin.com/in/paolofattoruso/" target="_blank"><i className="fab fa-linkedin fa-3x"></i></a>
                        </div>
                    </div> */}
           </div>
           </div>
       )
    }






}

export default Contact;