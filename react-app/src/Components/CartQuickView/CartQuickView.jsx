// https://react-bootstrap.netlify.app/components/modal/#modals

import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import prettyFloat from '../../js/prettyFloat';
import './CartQuickView.css';

const products = require('../../database/products.json');

let total;

function veryPrettyFloat(num) {

    num = prettyFloat(num, 2, true);

    return num.includes(".") ? num.split(".")[1].length === 2 ? num : num = "0" : num + ".00";
}

export default function CartQuickView(props) {

    total = 0;
    
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    if (props.productsInCart && Object.keys(props.productsInCart).length > 0) {

        Object.keys(props.productsInCart).map(id => total+= products[id].discount ? (products[id].price * (1-products[id].discountPercentage) * props.productsInCart[id]) : (products[id].price * props.productsInCart[id]));
    }

    total = veryPrettyFloat(total);

    return (
      <>
        <button className="cartButton" onClick={handleShow}><i className="fas fa-shopping-cart" style={{color: props.color}}></i></button>;

        <Modal show={show} onHide={handleClose} animation={false} dialogClassName="custom-modal">
          <Modal.Header closeButton>
            <Modal.Title>Shopping Cart</Modal.Title>
          </Modal.Header>
          <Modal.Body>
                <table className="table table-hover">
                    <tbody>
                    {props.productsInCart && Object.keys(props.productsInCart).length > 0 ? Object.keys(props.productsInCart).map((id, count) => 
                            <tr style={{fontSize: "20px"}} key={count}>
                                <th scope="row" style={{verticalAlign: "middle"}}>{++count}</th>
                                <td style={{verticalAlign: "middle"}}><Link to={"/shop/"+products[id].name}><img src={products[id].img[0]} alt={JSON.stringify(products[id].name)} width="50px"/></Link></td>
                                <td style={{verticalAlign: "middle"}}><Link to={"/shop/"+products[id].name}>{products[id].title}</Link></td>
                                <td style={{verticalAlign: "middle"}}>₪{products[id].discount ? (products[id].price * (1-products[id].discountPercentage)).toFixed(2) : (products[id].price).toFixed(2)}</td>
                                <td style={{verticalAlign: "middle"}}>x&emsp;<input type="number" min="1" max="4" defaultValue={props.productsInCart[id]} style={{width: "50px", textAlign: "center"}} id={"quantity"+id}/></td>
                                <td style={{verticalAlign: "middle"}}>₪{products[id].discount ? (products[id].price * (1-products[id].discountPercentage) * props.productsInCart[id]).toFixed(2) : (products[id].price * props.productsInCart[id]).toFixed(2)}</td>
                                <td style={{verticalAlign: "middle"}}> <Button variant="outline-warning" onClick={() => props.addProductCart(id, document.querySelector("#quantity"+id).value)}>Update</Button></td>
                                <td style={{verticalAlign: "middle"}}> <Button variant="outline-danger" onClick={() => props.delProductCart(id)}>Remove</Button></td>
                            </tr>
                            )

                    : 
                            <tr>
                                <td>No products in the shopping cart</td>
                            </tr>
                    }
                    </tbody>
                </table>
              </Modal.Body>
          <Modal.Footer>
            <Modal.Title>
                {
                    props.productsInCart && Object.keys(props.productsInCart).length > 0 ? "Total: ₪" + total : null
                }
            </Modal.Title>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            {props.productsInCart && Object.keys(props.productsInCart).length > 0 ? <Link to="/cart"><Button variant="outline-success" onClick={handleClose}>Proceed To Checkout</Button></Link> : null}
            
            <Button variant="outline-secondary" onClick={handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}