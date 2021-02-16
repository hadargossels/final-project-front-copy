import React from "react";
import {
  GoogleMap,
  withGoogleMap,
  withScriptjs,
  Marker,
  InfoWindow,
  FaAnchor,
} from "react-google-maps";

const MyGoogleMap = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 32.7899701, lng: 35.0102303  }}
    >
      
        <Marker
          onClick={props.onToggleOpen}
          position={{ lat: 32.7899701, lng: 35.0102303 }}
        >
          {props.isOpen && (
           <InfoWindow onClick={props.onToggleOpen}>
              <div> 
                {/* <FaAnchor /> */}
                <h1>בוטיק נספרסו חיפה</h1>              
                <h5>Nespresso- בוטיק חיפה</h5>
                <h6>tel:04-9958122</h6>
                <h6>דרך שמחה גולן 54, חיפה ,3299001</h6>
                <h6>https://www.nespresso.com/il/he/home-new</h6>
                <img src="./images/shop.jpg" width="100px" />
              </div>
               
            </InfoWindow>
          )}
       </Marker>
      
    </GoogleMap>
  ))
);

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen:false,
    };
  }

  onToggleOpen=()=>{
    let isOpen=this.state.isOpen
    isOpen=!isOpen
    this.setState({isOpen})
  }
  render() {
    return (
      <div>
        <MyGoogleMap
          loadingElement={<div>Loading....</div>}
          containerElement={
            <div style={{ height: "100%" }} className="map"></div>
          }
          mapElement={
            <div style={{ height: "400px" }} className="inner-map"></div>
          }
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVtHhDa2ErB1UuzEc1t3dXozBGaSHiQZk&v=3.exp&libraries=geometry,drawing,places"
          isMarkerShown={this.state.isMarkerShown}
          onMarkerClick={this.handleMarkerClick}
          onToggleOpen={this.onToggleOpen}
          isOpen={this.state.isOpen}

          // isMarkerShown
          withScriptjs
          // isMarkerShown={false}
        />
      </div>
    );
  }
}