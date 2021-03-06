import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
// import * as parkData from "./data/skateboard-parks.json";
import "./leaf-map.scss";
import { Link } from "react-router-dom";

// export const icon = new Icon({
//   iconUrl: "/skateboarding.svg",
//   iconSize: [25, 25],
// });

export default function LeafMap() {
  // const [activePark, setActivePark] = React.useState(null);

  return (
    // <MapContainer center={[45.4, -75.7]} zoom={12}>
    //   <TileLayer
    //     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //     attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    //   />

    //   {parkData.features.map((park) => (
    //     <Marker
    //       key={park.properties.PARK_ID}
    //       position={[
    //         park.geometry.coordinates[1],
    //         park.geometry.coordinates[0],
    //       ]}
    //       onClick={() => {
    //         setActivePark(park);
    //       }}
    //       icon={icon}
    //     />
    //   ))}

    //   {activePark && (
    //     <Popup
    //       position={[
    //         activePark.geometry.coordinates[1],
    //         activePark.geometry.coordinates[0],
    //       ]}
    //       onClose={() => {
    //         setActivePark(null);
    //       }}
    //     >
    //       <div>
    //         <h2>{activePark.properties.NAME}</h2>
    //         <p>{activePark.properties.DESCRIPTIO}</p>
    //       </div>
    //     </Popup>
    //   )}
    // </MapContainer>
    <MapContainer
      center={[31.9140832, 34.8073902]}
      zoom={15}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[31.913727, 34.8081797]}>
        <Popup>
          <div>
            {/* <FaAnchor /> */}
            <h5>Dog Best Friends</h5>
            {/* <p>The best dogs products</p> */}
            <img
              src="https://cdn.pixabay.com/photo/2015/06/08/15/02/pug-801826_960_720.jpg"
              height="70px"
              width="110px "
            />
            <div
            //   className="col-md-6 mt-3 contact-widget-section2 wow animated fadeInLeft"
            //   data-wow-delay=".2s"
            >
              {/* <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using Content.
              </p> */}
              <div className="find-widget">
                Company: <a href="">Dog best friends</a>
              </div>
              <div className="find-widget">
                Address: <a href="#"> Moskovich 19,Rehovot </a>
              </div>
              <div className="find-widget">
                Phone: <a href="#"> 08-111-1111</a>
              </div>
              <div className="find-widget">
                Website: <a href="https://uny.ro">www.dogFrienfs.com</a>
              </div>
              <div className="find-widget">
                Program: <a href="#">Sun to Sat: 09:30 AM - 10.30 PM</a>
              </div>
            </div>
            <Link to="/">
              <button type="button" class="btn btn-info visit-us-google-map">
                Visit Us
              </button>
            </Link>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
