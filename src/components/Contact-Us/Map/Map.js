import React, { Component } from 'react'
import  {GoogleMap, InfoWindow, Marker, withGoogleMap, withScriptjs} from "react-google-maps"
import './Map.css'

const MyGoogleMap = withScriptjs(
    withGoogleMap(
        props => (
            <GoogleMap
            defaultZoom={16.46}
            
            defaultCenter={{lat:32.0860527, lng:34.7785829}}>
                <Marker id={1}
                    position={{lat:32.0860527, lng:34.7785829}}
                    onClick={()=>props.selectMarker(1)}
                >
                    {props.show && (
                        <InfoWindow>
                            <div className="infoWin" style={{width:160, height:90}}>
                                <div className="row mx-0">
                                    <div className="mapLogo col-3 mx-0 px-0">
                                        <a style={{textDecoration:"none"}} href="/">
                                            <img width="50px" className="rounded-circle" src="./img/99236.jpg" alt=""/>
                                        </a>
                                    </div>
                                    <div className="col-9 mx-0 ps-1">
                                        <h5>Penguin Games</h5>
                                    </div>
                                    <span>96 Arlozorov St. Tel Aviv</span><br/>
                                    <span>03-666-6666</span>
                                </div>
                            </div>
                        </InfoWindow>
                    )}
                </Marker>
            </GoogleMap>
        )
    )
)

export default class Map extends Component {
    constructor(){
        super()
        this.state = {id:1,show:false}
        this.selectMarker = this.selectMarker.bind(this)
    }

    selectMarker(){
        let tmpObj = this.state.show
        this.setState({show:!tmpObj})
    }

    render() {
        return (
            <div>
                <MyGoogleMap
                    loadingElement= {<div>Loading...</div>}
                    containerElement={<div style={{height: '100%'}} className="map"></div>}
                    mapElement={<div style={{height:"400px"}} className="inner-map"></div>}
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVtHhDa2ErB1UuzEc1t3dXozBGaSHiQZk&v=3.exp&libraries=geometry,drawing,places"
                    show = {this.state.show}
                    selectMarker = {this.selectMarker}
                />
            </div>
        )
    }
}
