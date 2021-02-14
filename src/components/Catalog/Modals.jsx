import React from 'react'
import './Modal.css'


export default function Modals(props) {
  
        return (
          <div>
          
          <button id="zoomIn" className="mx-auto" data-bs-toggle="modal" data-bs-target={`#id${props.id}`}><i className="fas fa-search-plus"></i></button>


        <div className="modal fade" id={`id${props.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">{props.title}</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <img className="bigPic" src={props.image} alt="..."></img>
                </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
                
              </div>
            </div>
          </div>
        </div>
        </div>
        )
  }
