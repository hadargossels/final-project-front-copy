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
      defaultZoom={14}
      defaultCenter={{ lat: 32.8068173, lng: 35.0017155 }}
    >
      <Marker
        onClick={props.onToggleOpen}
        position={{ lat: 32.8057713, lng: 34.9886692 }}
      >
        {props.isOpen && (
          <InfoWindow onClick={props.onToggleOpen}>
            <div>
              {/* <FaAnchor /> */}
              <h1>Dog Best Friends</h1>
              <h5>The best dogs products</h5>
              <img src="https://cdn.pixabay.com/photo/2015/06/08/15/02/pug-801826_960_720.jpg" />
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
      isOpen: false,
    };
  }

  onToggleOpen = () => {
    let isOpen = this.state.isOpen;
    isOpen = !isOpen;
    this.setState({ isOpen });
  };
  render() {
    return (
      <div>
        <MyGoogleMap
          loadingElement={<div>Loading....</div>}
          containerElement={
            <div style={{ height: "80%" }} className="map"></div>
          }
          mapElement={
            <div style={{ height: "800px" }} className="inner-map"></div>
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
