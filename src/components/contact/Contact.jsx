import React, { Component } from 'react'
import './Contact.css'
import {
    GoogleMap,
    withGoogleMap,
    withScriptjs,
    Marker,
    InfoWindow,
  } from "react-google-maps";

  const MyGoogleMap = withScriptjs(
    withGoogleMap((props) => (
      <GoogleMap
        defaultZoom={14}
        defaultCenter={{ lat: 31.7773702, lng: 35.22302 }}
      >
        
          <Marker
            onClick={props.onToggleOpen}
            position={{ lat: 31.7773702, lng: 35.22302 }}
          >
            {props.isOpen && (
             <InfoWindow onClick={props.onToggleOpen}>
                <div style={{padding: "25px"}}> 
                  <h3>Stationery Store</h3>              
                  <h6>8, ALROV MAMILLA AVENUE, Jerusalem</h6>
                  <img src='/img/plh-crd-mamilla-mall-ministry-of-tourism-2.jpg' height="150px" />
                </div>
              </InfoWindow>
            )}
         </Marker>
        
      </GoogleMap>
    ))
  );
  
export default class Contact extends Component {

    constructor(props) {
        super (props) 
        this.state = {
            ticketInfo: [],
            isOpen:false,

        }
    }

    onToggleOpen=()=>{
        let isOpen=this.state.isOpen
        isOpen=!isOpen
        this.setState({isOpen})
      }

    ticket (e) {
        e.preventDefault()
        let ticketInfo = []
        for (let i = 0; i < 20; i+=5) {
           let title = e.target.childNodes[i].innerText
           let value = e.target.childNodes[i+2].value
           let ticketObj = {title, value}
           ticketInfo.push(ticketObj)
        }
        setTimeout(()=>{this.setState({ticketInfo});console.log(this.state.ticketInfo);},5);
    }

    render() {
        return (

        <div className="contact">
            <div className='contInner'>
            <h1>CONTACT US</h1>
                <span style={{color: 'red'}}>* required</span>
                <form onSubmit={(e)=>{this.ticket(e)}}>
                <label htmlFor="name">Name: *</label><br/>
                <input type="name" id="contname" name="name" required/><br/><br/>
                <label htmlFor="email">Email: *</label><br/>
                <input type="email" id="contemail" name="email" required/><br/><br/>
                <label htmlFor="phone">Phone number: *</label><br/>
                <input type="tel" id="phone" name="phone" required/><br/><br/>
                <label htmlFor="messege">Messege: *</label><br/>
                <textarea id="messege" name="messege" rows="4" cols="50" required></textarea><br/><br/>
                <input type="submit" id="submsg" value="SUBMIT"></input><br/><br/>
                </form>
            </div>

            <div className="location contInner">
            <div>
                    Stationery Store,<br/>
                    8, ALROV MAMILLA AVENUE, Jerusalem<br/>
                    Opening Hours: <br/>
                    10am - 10pm<br/>
                    Telephone: 111-1111111<br/>
                    Email: email@email.com<br/>
                </div>
                <MyGoogleMap
                    loadingElement={<div>Loading....</div>}
                    containerElement={
                        <div style={{ height: "100%" }} className="map"></div>
                    }
                    mapElement={
                        <div style={{ height: "400px", width: "500px" }} className="inner-map"></div>
                        
                    }
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVtHhDa2ErB1UuzEc1t3dXozBGaSHiQZk&v=3.exp&libraries=geometry,drawing,places"
                    isMarkerShown={this.state.isMarkerShown}
                    onMarkerClick={this.handleMarkerClick}
                    onToggleOpen={this.onToggleOpen}
                    isOpen={this.state.isOpen}
                    withScriptjs
                />



            </div>
        </div>

        )
    }
}
