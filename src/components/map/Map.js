import React from 'react'
import { GoogleMap, withGoogleMap, withScriptjs,Marker,InfoWindow} from "react-google-maps";


const MyGoogleMap = withScriptjs(
    withGoogleMap(
        props => (
        <GoogleMap

            defaultZoom={7}
            defaultCenter={{ lat: 40.7408707, lng:-73.8483649}}>
        <Marker position={{ lat: 40.7408707, lng: -73.8483649 }}>
                <InfoWindow>
                        <div className="container text-center">
                            
                            <p>Headquarters</p>
                            <p>Phone: + 01 234 567 89</p>
                        </div>
                </InfoWindow>
        </Marker>
        <Marker position={{ lat:  39.7459117, lng: -74.8461592 }}>
                <InfoWindow>
                        <div className="container text-center">
                            <p>Store</p>
                            <p>Phone: (555) 555-1234</p>
                        </div>
                </InfoWindow>

        </Marker>
    
        

        </GoogleMap>
        )
    )
)


export default class Map extends React.Component {
    
    render() {
        return (
            <div>
                <MyGoogleMap
                    loadingElement={<div>Loading....</div>}
                    containerElement={<div style={{height: '400px'}} className="map"></div>}
                    mapElement={<div style={{height: '400px'}} className="inner-map"></div>}
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVtHhDa2ErB1UuzEc1t3dXozBGaSHiQZk&v=3.exp&libraries=geometry,drawing,places"

                />
            </div>
        )
    }
}
