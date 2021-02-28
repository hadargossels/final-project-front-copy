import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function BestSell() {

    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const [show3, setShow3] = useState(false);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);

    const [show4, setShow4] = useState(false);
    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);

    return (
        <>
            <div className="container" style={{ height: '70vh', marginTop: '12vh' }}>
                <h3>Top Selling</h3>
                <div className="row mt-5">
                    <div className="col-md-6 col-lg-3 col-md-4">
                        {" "}
                        <Link
                            to={"/product/SamsungGalaxyS21Ultra5G"}
                            style={{ textDecoration: "none" }}
                        >
                            <img src="./imgs/Samsung_S21-1.png" alt="prod pic" width="300px" height="300px" />
                        </Link>
                        <p>Samsung Galaxy S21 Ultra 5G</p>
                        <Button variant="primary" onClick={handleShow1}>
                            Quick View
                        </Button>
                        <Modal show={show1} onHide={handleClose1}>
                            <Modal.Header closeButton>
                                <Modal.Title>Samsung Galaxy S21 Ultra 5G</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                The highest resolution photos and video on a smartphone.
                                Galaxy`s fastest processor yet. A battery that goes all-day—and
                                then some. First ever S Pen compatibility. A striking new
                                design.
                            </Modal.Body>
                            <Modal.Footer>
                                <Link
                                    to={"/product/SamsungGalaxyS21Ultra5G"}
                                    style={{ textDecoration: "none" }}
                                >
                                    <Button variant="secondary" onClick={handleClose1}>
                                        Go to the product
                                    </Button>
                                </Link>
                            </Modal.Footer>
                        </Modal>
                    </div>

                    <div className="col-md-6 col-lg-3 col-md-4">
                        <Link to={"/product/SamsungGalaxyZFold25G"} style={{ textDecoration: 'none' }}>
                            <img
                                src="./imgs/Samsung_Z-1.jpg"
                                alt="prod pic"
                                width="300px"
                                height="300px"
                            />
                        </Link>
                        <p>Samsung Galaxy Z-Fold2 5G</p>
                        <Button variant="primary" onClick={handleShow2}>
                            Quick View
                        </Button>
                        <Modal show={show2} onHide={handleClose2}>
                            <Modal.Header closeButton>
                                <Modal.Title>Samsung Galaxy Z-Fold2 5G</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>The highest resolution photos and video on a smartphone. Galaxy`s fastest processor yet. A battery that goes all-day—and then some. First ever S Pen compatibility. A striking new design.</Modal.Body>
                            <Modal.Footer>
                                <Link to={"/product/SamsungGalaxyZFold25G"} style={{ textDecoration: 'none' }}>
                                    <Button variant="secondary" onClick={handleClose2}>
                                        Go to the product
                                        </Button>
                                </Link>
                            </Modal.Footer>
                        </Modal>
                    </div>

                    <div className="col-md-6 col-lg-3 col-md-4">
                        <Link to={"/product/AppleiPhone12ProMax"} style={{ textDecoration: 'none' }}>
                            <img
                                src="./imgs/Iphone_12proMax-1.jpg"
                                alt="prod pic"
                                width="300px"
                                height="300px"
                            />
                        </Link>
                        <p>Applei Phone 12 Pro Max</p>
                        <Button variant="primary" onClick={handleShow3}>
                            Quick View
                        </Button>
                        <Modal show={show3} onHide={handleClose3}>
                            <Modal.Header closeButton>
                                <Modal.Title>Applei Phone 12 Pro Max</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>The highest resolution photos and video on a smartphone. Galaxy`s fastest processor yet. A battery that goes all-day—and then some. First ever S Pen compatibility. A striking new design.</Modal.Body>
                            <Modal.Footer>
                                <Link to={"/product/AppleiPhone12ProMax"} style={{ textDecoration: 'none' }}>
                                    <Button variant="secondary" onClick={handleClose3}>
                                        Go to the product
                                        </Button>
                                </Link>
                            </Modal.Footer>
                        </Modal>
                    </div>

                    <div className="col-md-6 col-lg-3 col-md-4">
                        <Link to={"/product/PowerBank14000mAhLenovo"} style={{ textDecoration: 'none' }}>
                            <img
                                src="./imgs/Lenovo-PowerBank-1.jpg"
                                alt="prod pic"
                                width="300px"
                                height="300px"
                            />
                        </Link>
                        <p>Power Bank 14000mAh Lenovo</p>
                        <Button variant="primary" onClick={handleShow4}>
                            Quick View
                        </Button>
                        <Modal show={show4} onHide={handleClose4}>
                            <Modal.Header closeButton>
                                <Modal.Title>Power Bank 14000mAh Lenovo</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Lenovo USB-C Laptop Power Bank 14000mAh with Round-Tip Dongle, Slim-Tip Dongle and USB-C Cable.</Modal.Body>
                            <Modal.Footer>
                                <Link to={"/product/PowerBank14000mAhLenovo"} style={{ textDecoration: 'none' }}>
                                    <Button variant="secondary" onClick={handleClose4}>
                                        Go to the product
                                        </Button>
                                </Link>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
            </div>
        </>
    );
}
