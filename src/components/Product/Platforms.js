import React, { Component } from 'react';

class Platforms extends Component{
    render(){
        return(    
            <div>
                <span className="fw-bold">Platforms:</span>
                <div className="btn-group m-2" role="group" aria-label="Basic radio toggle button group">
                {this.props.platforms.map((el, key) => (
                    <div key={key}>
                    <input type="radio" className="btn-check" name="btnradio" id="btnradio1" defaultChecked/>
                    <label className="btn btn-outline-primary" htmlFor="btnradio1">{el}</label>
                    </div>
                ))}
                </div>
            </div>
            
        );
    }
 }


export default Platforms;