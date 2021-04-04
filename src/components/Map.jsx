import React from 'react'
import { GoogleMap, withGoogleMap, withScriptjs, Marker, InfoWindow} from "react-google-maps";
import './Map.css'


// const { compose, withProps, withStateHandlers } = require("recompose");


const MyGoogleMap = withScriptjs(
    withGoogleMap(
        props => (
        <GoogleMap
            defaultZoom={17.25}
            defaultCenter={{ lat: 31.8923238, lng: 34.8071061 }}
        >
            <Marker position={{ lat: 31.89202124986812, lng: 34.80620390087978 }} onClick={() => props.onToggleOpen()}>
                {props.isOpen ? 
                    <InfoWindow onCloseClick={() => props.onToggleOpen()}>
                        <div style={{direction:"rtl",padding:"10px 0px 10px 24px"}}>
                            <h3>הקונדיטוריה של שירלי</h3>
                            <p style={{fontSize:"16px"}}>עוגות ומאפים בהתאמה אישת</p>
                            <div className="imgWindow"></div>
                        </div>
                    </InfoWindow>
                : null
                }
            </Marker>
        </GoogleMap>
        )
    )
)

export default class Map extends React.Component {

    constructor(){

        super()

        this.state = {isOpen: false}

        this.onToggleOpen = this.onToggleOpen.bind(this)
    }

    onToggleOpen() {
        
        this.setState({isOpen: !this.state.isOpen})
    }

    render() {
        return (
            <div>
                
                    <MyGoogleMap
                        isOpen = {this.state.isOpen}
                        onToggleOpen = {this.onToggleOpen}
                        loadingElement={<div>Loading....</div>}
                        containerElement={<div style={{height: '100%'}} className="map"></div>}
                        mapElement={<div style={{height: '500px'}} className="inner-map"></div>}
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVtHhDa2ErB1UuzEc1t3dXozBGaSHiQZk&v=3.exp&libraries=geometry,drawing,places" />
                
            </div>
        )
    }
}

