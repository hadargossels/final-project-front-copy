import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

export default function CartAlert() {

    const [show, setShow] = useState(true);
  
    if (show) {
      return (
        <Alert variant="success" onClose={() => setShow(false)} dismissible style={{width: "50%", margin: "0 auto", position: "relative", top: "100px"}}>
          <Alert.Heading style={{textAlign: "center"}}>The Shopping Cart Has Been Updated</Alert.Heading>
          {/* <p>
            Change this and that and try again. Duis mollis, est non commodo
            luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
            Cras mattis consectetur purus sit amet fermentum.
          </p> */}
        </Alert>
      );
    }
    return (<Button onClick={() => setShow(true)} style={{display: "none"}}>Show Alert</Button>);
  }
  
// render(<CartAlert />);