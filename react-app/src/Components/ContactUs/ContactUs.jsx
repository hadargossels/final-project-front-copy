import React, { Component } from 'react'
import { GoogleMap, withGoogleMap, withScriptjs, Marker, InfoWindow} from "react-google-maps";
import './ContactUs.css';

const MyGoogleMap = withScriptjs(
    withGoogleMap(
        props => (
        <GoogleMap
            defaultZoom={18}
            defaultCenter={{ lat: 32.0671507, lng: 34.7931032 }}
        >
            <Marker position={{ lat: 32.0671507, lng: 34.7931032 }} label="LIEL'S" onClick={() => props.onToggleOpen()}>
                {!props.isOpen ? 
                    <InfoWindow onCloseClick={() => props.onToggleOpen()}>
                        <div style={{textAlign: "center"}}>
                            <br/><img src="/images/logos/logo.png" alt="LIEL'S"/>
                            <h6><br/><i>&nbsp;Yigal Alon St 90, Tel Aviv-Yafo, Israel&ensp;</i></h6>
                            <h6><i>Telephone: +972-3-0000000</i></h6>
                        </div>
                    </InfoWindow>
                : null
                }
            </Marker>
        </GoogleMap>
        )
    )
)

export default class ContactUs extends Component {

    constructor() {

        super()

        this.state = {isOpen: false}

        this.onToggleOpen = this.onToggleOpen.bind(this)
    }

    onToggleOpen() {
        
        this.setState({isOpen: !this.state.isOpen})
    }

    render() {
        return (
            <div className="conatiner lead">
                
                <br/><br/>

                <MyGoogleMap
                    isOpen = {this.state.isOpen}
                    onToggleOpen = {this.onToggleOpen}
                    loadingElement={<div>Loading....</div>}
                    containerElement={<div style={{height: '50%'}} className="map"></div>}
                    mapElement={<div style={{height: '500px'}} className="inner-map"></div>}
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVtHhDa2ErB1UuzEc1t3dXozBGaSHiQZk&v=3.exp&libraries=geometry,drawing,places"
                />

                <br/><br/>

                <div style={{margin: "0 auto", width: "40%"}}>

                    <h2 style={{textAlign: "center"}}>DROP YOUR MESSAGE</h2>

                    <br/><p style={{textAlign: "center"}}><i>Yigal Alon St 90, Tel Aviv-Yafo, Israel</i></p>
                    <p style={{textAlign: "center"}}><i>Telephone: +972-3-0000000</i></p><br/>
                    
                    <form className="row main_contact" method="POST" id="contact_message" onSubmit={e => { e.preventDefault(); }}>

                        <div className="col-sm">

                            <label>Name *</label><br/>
                            <input type="text" name="name" required/><br/>

                            <br/><label>Email *</label><br/>
                            <input type="email" name="email" required/>

                        </div>

                        <div className="col-sm">

                            <label>Subject *</label><br/>
                            <input type="text" name="subject" required/><br/>

                            <br/><label>Message *</label><br/>
                            <textarea name="message" form="contact_message" required style={{resize: "none"}}></textarea>

                        </div>
            
                        <button type="submit" name="submit_message">SUBMIT MESSAGE</button>

                    </form>

                </div>

                <br/><br/><br/><br/>

            </div>
        )
    }
}