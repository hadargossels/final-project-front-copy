import React, { Component } from 'react'
import './Contact.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import axios from 'axios';
  
export default class Contact extends Component {

    constructor(props) {
        super (props) 
        this.state = {
            ticketInfo: [],
            isOpen:false,
            messege: '',
            color: "white",
            info: {}

        }
        this.nameRef = React.createRef();
        this.emailRef = React.createRef();
        this.phoneRef = React.createRef();
        this.messegeRef = React.createRef();
        this.subjectRef = React.createRef();
    }

    componentWillMount () {
      this.getStoreInfo()
      
    }
    
    async getStoreInfo() {
      try {
        const response = await axios.get(`${process.env.REACT_APP_URL}/storeInfo/`);
        let info = response.data;
        this.setState({info: info[0]})
      } catch (error) {
        console.error(error);
      }
    }

    onToggleOpen=()=>{
        let isOpen=this.state.isOpen
        isOpen=!isOpen
        this.setState({isOpen})
      }

    async handleTicket(e) {
      e.preventDefault()
      let name = this.nameRef.current.value
      let email = this.emailRef.current.value
      let phone = this.phoneRef.current.value
      let messege = `${this.messegeRef.current.value}
      
      custumer phone: ${phone}`
      let subject = this.subjectRef.current.value
      try {await axios.post(`${process.env.REACT_APP_URL}/mail/sendMailFromClient`, {
          from: email,
          name: name,
          subject: subject,
          text: messege,
        })
        .then((response) => {
          this.setState({messege: 'Ticket sent succesfully', color: "green"})
        }, (error) => {
          console.error('axios error ' + error);
        });

      }
      catch {
          console.error('Faild to send ticket')
          this.setState({messege: 'Faild to send ticket', color: "red"})
      }
      
  }


    render() {
        return (

        <div className="contact">
            <div className='contInner'>
            <h1>CONTACT US</h1>
                <span style={{color: 'red'}}>* required</span>
                <form onSubmit={(e)=>{this.handleTicket(e)}}>
                <label htmlFor="name">Name: *</label><br/>
                <input ref={this.nameRef} type="name" id="contname" name="name" required/><br/><br/>
                <label htmlFor="email">Email: *</label><br/>
                <input ref={this.emailRef} type="email" id="contemail" name="email" required/><br/><br/>
                <label htmlFor="phone">Phone number: *</label><br/>
                <input ref={this.phoneRef} type="tel" id="phone" name="phone" required/><br/><br/>
                <label htmlFor="subject">Subject: *</label><br/>
                <input ref={this.subjectRef} type="text" id="contsubject" name="subject" required/><br/><br/>
                <label htmlFor="messege">Messege: *</label><br/>
                <textarea id="messege" name="messege" rows="4" cols="50" required ref={this.messegeRef}></textarea><br/><br/>
                <input type="submit" id="submsg" value="SUBMIT"></input><br/><br/>
                </form><br/>
                <span style={{color: this.state.color}}>{this.state.messege}</span>
            </div>

            <div className="location contInner">

                  <MapContainer center={[31.7773702, 35.22302]} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                      attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[31.7773702, 35.22302]}>
                      <Popup>
                        <div style={{padding: "25px"}}> 
                          <h5>{this.state.info.name}</h5>              
                          <h6>{this.state.info.address}</h6>
                          <img src='/img/plh-crd-mamilla-mall-ministry-of-tourism-2.jpg' alt="img" height="80px" />
                        </div>
                      </Popup>
                    </Marker>
                  </MapContainer><br/>
                  <div>
                    {this.state.info.name},<br/>
                    {this.state.info.address}<br/>
                    Opening Hours: <br/>
                    {this.state.info.opening}<br/>
                    Telephone: {this.state.info.phone}<br/>
                    Email: {this.state.info.email}<br/>
                </div>
            </div>
        </div>

        )
    }
}
