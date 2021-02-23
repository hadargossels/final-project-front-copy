import React, {Component, createRef} from 'react';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    InfoWindow
} from "react-google-maps";

class Contact extends Component {
    constructor(props){
        super(props);
        this.fullNameRef = createRef();
        this.phoneRef = createRef();
        this.emailRef = createRef();
        this.notesRef = createRef();
        this.state = {
            messageFullName: '',
            messagePhone: '',
            messageEmail: '',
            messageNotes: ""
        }
    }

    submitContact = (event) => {
        event.preventDefault();

        const invalidMessages= {required: "This field is required", 
                                emailPattern: "Please provide a valid email",
                                phonePattern: "Please provide a valid phone number"                           
                                };
        const phonePattrern = /^0\d{2}-?\d{3}-?\d{4}/;
        const emailPattern = /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/;
        let correctInputs = true;

        if (this.fullNameRef.current.validity.valueMissing){
            this.fullNameRef.current.style.borderColor = 'red';
            correctInputs = false;
            this.setState({messageFullName: invalidMessages.required});
        }
        else{
            this.setState({messageFullName: ''});
            this.fullNameRef.current.style.borderColor = 'green';
        }
        
        if (this.phoneRef.current.validity.valueMissing) {
            this.phoneRef.current.style.borderColor = 'red';
            correctInputs = false;
            this.setState({messagePhone: invalidMessages.required});
        }
        else if (!this.phoneRef.current.value.match(phonePattrern)){
            this.phoneRef.current.style.borderColor = 'red';
            correctInputs = false;
            this.setState({messagePhone: invalidMessages.phonePattern});
        }
        else {
            this.setState({messagePhone: ''});
            this.phoneRef.current.style.borderColor = 'green';
        }
        
        if (!this.emailRef.current.value){
            this.emailRef.current.style.borderColor = 'red';
            correctInputs = false;
            this.setState({messageEmail: invalidMessages.required});
        } 
        else if (!this.emailRef.current.value.match(emailPattern)){
            this.emailRef.current.style.borderColor = 'red';
            correctInputs = false;
            this.setState({messageEmail: invalidMessages.emailPattern});
        }
        else {
            this.setState({messageEmail: ''});
            this.emailRef.current.style.borderColor = 'green';
        }

        if (this.notesRef.current.validity.valueMissing){
            this.notesRef.current.style.borderColor = 'red';
            correctInputs = false;
            this.setState({messageNotes: invalidMessages.required});
        }
        else{
            this.setState({messageNotes: ''});
            this.notesRef.current.style.borderColor = 'green';
        }
    
        if (correctInputs) {

        }
        else {
            
        }
    }

    render() {
        const MapWithAMarker = withScriptjs(withGoogleMap(props =>
            <GoogleMap
              defaultZoom={15}
              defaultCenter={{ lat: 32.07458, lng: 34.79219 }}
            >
                <Marker
                  position={{ lat: 32.07458, lng: 34.79219 }}
                >
                    <InfoWindow>
                        <div>Derech Menachem Begin 132, Tel Aviv-Yafo</div>
                    </InfoWindow>
                </Marker>
            </GoogleMap>
        ));

        return(
            <>
            <div className="container my-4">
                <MapWithAMarker
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBN0_UWUyYf1lDEB-x_XVixTMHhAhEEtA0&v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    />
            </div>

            <div className="container-fluid mt-4 py-5" style={{backgroundColor: "#f2f2f2"}}>
                <div className=" d-flex flex-column justify-content-center align-items-center">
                    <h3>Contact Us</h3>
                    <div style={{minWidth:"700px"}}>
                        <form>
                            <label htmlFor="fullName">Full name: </label>
                            <input type="text" className="form-control" ref={this.fullNameRef} required></input>
                            <div className="invalidMassege text-danger">
                                {this.state.messageFullName}
                            </div>

                            <label htmlFor="phone">Phone: </label>
                            <input type="tel" className="form-control" ref={this.phoneRef} placeholder="050-123-1234" required></input>
                            <div className="invalidMassege text-danger">
                                {this.state.messagePhone}
                            </div>
                            
                            <label htmlFor="email">Email: </label>
                            <input type="mail" className="form-control" ref={this.emailRef} required></input>
                            <div className="invalidMassege text-danger">
                                {this.state.messageEmail}
                            </div>

                            <label for="notes">Comment: </label>
                            <textarea className="form-control" ref={this.notesRef} rows="3" required></textarea>
                            <div className="invalidMassege text-danger">
                                {this.state.messageNotes}
                            </div>

                            <div className="d-flex justify-content-center mt-3">
                            <button type="submit" className="btn btn-primary align-middle" onClick={this.submitContact}>Submit</button>
                            </div>
                            
                        </form>
                    </div>
                </div> 
            </div>
            </>
        ) 
 
    }
}

export default Contact;