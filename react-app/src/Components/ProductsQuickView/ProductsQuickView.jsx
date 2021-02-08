// https://react-bootstrap.netlify.app/components/modal/#modals

import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function ProductsQuickView(props) {

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <button type="button" className="btn btn-outline-info" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={handleShow}>
            <i class="fas fa-search"></i>
        </button>
  
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>{props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <img src={props.img} alt={props.name} height="150px"/>
              <p>{props.subtitle}</p>
              {props.price}
              {props.newPrice}
              {props.rating}
              {props.status}
              </Modal.Body>
          <Modal.Footer>
            {props.addNotify}
            {props.moreDetails}
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;
            <Button variant="outline-secondary" onClick={handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}