import React, { Component } from 'react'
import './ContactUs.css'
import Contact from '../../pictures/ContactUs.jpg'
import {
    GoogleMap,
    withGoogleMap,
    withScriptjs,
    InfoWindow,
    Marker,
  } from "react-google-maps";
import Store from '../../pictures/Bitcoin-Store.png';

 

export default class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isOpen: false,
        };
        this.handleToggleClose = this.handleToggleClose.bind(this);
        this.handleToggleOpen = this.handleToggleOpen.bind(this);
      }
    
      handleToggleOpen = () => {
        this.setState({
          isOpen: true,
        });
      };
    
      handleToggleClose = () => {
        this.setState({
          isOpen: false,
        });
      };

    Google = withScriptjs(
        withGoogleMap(
            props => (
            <GoogleMap
                defaultZoom={14}
                defaultCenter={{ lat: 32.0671552, lng: 34.7909145}}
            >
            <Marker
          position={{ lat: 32.0671552, lng: 34.7909145 }}
          onMouseOver={() => {
            this.handleToggleOpen();
            setTimeout(() => {
              this.handleToggleClose();
            }, 3000);
          }}
        >
          {this.state.isOpen && (
            <InfoWindow onCloseClick={() => this.handleToggleClose()}>
              <div>
                <span className="text-center"><i className="fab fa-bitcoin" style={{color:"orange",fontSize:"20px"}}></i>Yoni Token, </span>  
                <span><b>Yigal Alon 90</b></span><br/>
                <img alt="..." src={Store} style={{width:"105px",height:"75px", marginLeft:"30px"}}/>
              </div>
            </InfoWindow>
          )}
        </Marker>
            </GoogleMap>
            )
        )
    )


    render() {
        const MyGoogleMap= this.Google;
        return (
            <div>
                <br/><h1 className="text-center">Please get in touch and our experts support</h1>
                    <h1 className="text-center">team will answer all your questions.</h1>
                    <br/><br/>
                    <div className="container">
                    <div className="row">
                        <div className="col d-flex justify-content-end">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputName" className="form-label"><b>Full name *</b></label>
                                <input placeholder="Full name *" type="text" className="form-control inputTxt" style={{width:"400px"}} id="exampleInputName" aria-describedby="emailHelp" required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label"><b>Email address *</b></label>
                                <input placeholder="Email *" type="email" className="form-control" style={{width:"400px"}} id="exampleInputEmail1" aria-describedby="emailHelp" required/>
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
                            <textarea className="form-control" style={{resize:"none",width:"400px",height:"200px"}} placeholder="Your message *"></textarea>
                            <br/>
                            <button type="submit" className="btn btn-warning submitBtn d-flex" style={{margin:"0 auto"}}>Submit</button>
                            <br/>
                            </form>
                        </div>
                        <div className="col">
                            <img alt="..." src={Contact} className="contactImg"/>
                            <br/><br/>
                            <div>Phone number: +972-xxx-xxxxxxx</div>
                            <div>Email address: xxxxxx@gmail.com</div>
                            <div>Our Address: Yigal Alon 90,Tel-Aviv</div>
                            <div>
                            <MyGoogleMap
                                loadingElement={<div>Loading....</div>}
                                containerElement={<div style={{height: '300px'}} className="map"></div>}
                                mapElement={<div style={{height: '300px'}} className="inner-map"></div>}
                                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVtHhDa2ErB1UuzEc1t3dXozBGaSHiQZk&v=3.exp&libraries=geometry,drawing,places"
                                />

                            </div>
                            <br/><br/>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
