import React, {useState} from 'react'
import {Alert} from 'react-bootstrap'

export default function AlertBox() {
    const [show, setShow] = useState(true);

    if (show) {
        return (
        <Alert variant="success" onClose={() => setShow(false)} dismissible>
            The product was successfully added to the shopping cart
        </Alert>
        );
    }
    else {
        return <div></div>
    }
}
