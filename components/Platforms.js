import React, { Component } from 'react';

class Platforms extends Component{
    render(){
        let platforms= ["PlayStation4","Nintendo Switch"]

        return(
            <div className="py-4">
                <span className="fw-bold">Platforms:</span>
                <div className="btn-group m-2" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked/>
                    <label className="btn btn-outline-primary" htmlFor="btnradio1">{platforms[0]}</label>

                    <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off"/>
                    <label className="btn btn-outline-primary" htmlFor="btnradio2">{platforms[1]}</label>
                </div>
            </div>
            
        );
    }
 }


export default Platforms;