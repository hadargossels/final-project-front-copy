import React, { useRef, useState } from 'react';
import {Button, Collapse } from 'react-bootstrap';
import '../../css/payment.css';
import OrderSummary from './OrderSummary.jsx';
import 'bootstrap/js/dist/collapse';
import $ from 'jquery';
import PayPalBtn from './PayPalBtn'


export default function Payment(props) {
    const [openCostumerDetails, setOpenCostumerDetails] = useState(false);
    const [openRecipientDetails, setOpenRecipientDetails] = useState(false);
    const [openPaymentDetails, setOpenPaymentDetails] = useState(false);
    
    const costumerDetailsRef = useRef();
    const recipientDetails = useRef();
    const fullNameRef = useRef();
    const phoneRef = useRef();
    const emailRef = useRef();
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const streetRef = useRef();
    const homeNumberRef = useRef();
    const apartmentNumberRef = useRef();
    const selectDelivery = useRef();
    const cityRef = useRef();
    
    const [deliveryAmount, setDeliveryAmount] = useState(0);
    const [messageFullName, setMessageFullName] = useState('');
    const [messagePhone, setMessagePhone] = useState('');
    const [messageEmail, setMessageEmail] = useState('');
    const [messageFirstName, setMessageFirstName] = useState('');
    const [messageLastName, setMessageLastName] = useState('');
    const [messageStreet, setMessageStreet] = useState('');
    const [messageHomeNumber, setMessageHomeNumber] = useState('');
    const [messageApartmentNumber, setMessageApartmentNumber] = useState('');
    const [messageCity, setMessageCity] = useState('');


    const calculateDelivery = () => {
        let totalAmount = props.getSubTotalAmount();
        if (totalAmount < 50){
            return 50;
        }
        else if (totalAmount >= 50 && totalAmount < 125){
            return 75;
        }
        else if (totalAmount >= 125 && totalAmount < 200){
            return 100;
        }
        else{
            return 0;
        }
    }

    const onChangeDelivery = () => {
        switch (selectDelivery.current.value){
            case 'Self-pickup':
                setDeliveryAmount(0);
                break;
            case 'Postal-service':
                setDeliveryAmount(10);
                break;
            case 'Registered-mail':
                setDeliveryAmount(30);
                break;
            case 'emissary':
                const deliveryAmount = calculateDelivery();
                setDeliveryAmount(deliveryAmount);
                break;
            default:
                break;
        }
    }

    const getMyCoupon = () => {
        let myCoupon = JSON.parse(localStorage.getItem('myCoupon'));
        if (myCoupon === null)
        myCoupon = {code: '', discount: 0};
        return myCoupon;
    }

    const getTotalAmountAfterDelivery = () => {
        let myCoupon = getMyCoupon();
        return (props.getSubTotalAmount() * (1 +props.tax)) * (1 - myCoupon.discount) + deliveryAmount;
    }

    const submitCostumerDetails = (event) => {
        event.preventDefault();

        const invalidMessages= {required: "This field is required", 
                                emailPattern: "Please provide a valid email",
                                phonePattern: "Please provide a valid phone number"                           
                                };
        const phonePattrern = /^0\d{2}-?\d{3}-?\d{4}/;
        const emailPattern = /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/;
        let correctInputs = true;

        if (fullNameRef.current.validity.valueMissing){
            fullNameRef.current.style.borderColor = 'red';
            correctInputs = false;
            setMessageFullName(invalidMessages.required);
        }
        else{
            setMessageFullName('');
            fullNameRef.current.style.borderColor = 'green';
        }
        
        if (phoneRef.current.validity.valueMissing) {
            phoneRef.current.style.borderColor = 'red';
            correctInputs = false;
            setMessagePhone(invalidMessages.required);
        }
        else if (!phoneRef.current.value.match(phonePattrern)){
            phoneRef.current.style.borderColor = 'red';
            correctInputs = false;
            setMessagePhone(invalidMessages.phonePattern);
        }
        else {
            setMessagePhone('');
            phoneRef.current.style.borderColor = 'green';
        }
        
        if (!emailRef.current.value){
            emailRef.current.style.borderColor = 'red';
            correctInputs = false;
            setMessageEmail(invalidMessages.required);
        } 
        else if (!emailRef.current.value.match(emailPattern)){
            emailRef.current.style.borderColor = 'red';
            correctInputs = false;
            setMessageEmail(invalidMessages.emailPattern);
        }
        else {
            setMessageEmail('');
            emailRef.current.style.borderColor = 'green';
        }
        
        if (correctInputs){
            setOpenCostumerDetails(false);
            setOpenRecipientDetails(true);
        }  
    }

    const submitRecipientDetails = (event) => {
        event.preventDefault();

        const invalidMessages= {required: "This field is required", 
                                emailPattern: "Please provide a valid email",
                                phonePattern: "Please provide a valid phone number"                           
                                };
        let correctInputs = true;
        
        if (firstNameRef.current.validity.valueMissing){
            firstNameRef.current.style.borderColor = 'red';
            correctInputs = false;
            setMessageFirstName(invalidMessages.required);
        }
        else{
            setMessageFirstName('');
            firstNameRef.current.style.borderColor = 'green';
        }

        if (lastNameRef.current.validity.valueMissing){
            lastNameRef.current.style.borderColor = 'red';
            correctInputs = false;
            setMessageLastName(invalidMessages.required);
        }
        else{
            setMessageLastName('');
            lastNameRef.current.style.borderColor = 'green';
        }

        if (streetRef.current.validity.valueMissing){
            streetRef.current.style.borderColor = 'red';
            correctInputs = false;
            setMessageStreet(invalidMessages.required);
        }
        else{
            setMessageStreet('');
            streetRef.current.style.borderColor = 'green';
        }

        if (homeNumberRef.current.validity.valueMissing){
            homeNumberRef.current.style.borderColor = 'red';
            correctInputs = false;
            setMessageHomeNumber(invalidMessages.required);
        }
        else{
            setMessageHomeNumber('');
            homeNumberRef.current.style.borderColor = 'green';
        }

        if (apartmentNumberRef.current.validity.valueMissing){
            apartmentNumberRef.current.style.borderColor = 'red';
            correctInputs = false;
            setMessageApartmentNumber(invalidMessages.required);
        }
        else{
            setMessageApartmentNumber('');
            apartmentNumberRef.current.style.borderColor = 'green';
        }

        if (cityRef.current.validity.valueMissing){
            cityRef.current.style.borderColor = 'red';
            correctInputs = false;
            setMessageCity(invalidMessages.required);
        }
        else{
            setMessageCity('');
            cityRef.current.style.borderColor = 'green';
        }

        if (correctInputs){
            setOpenCostumerDetails(false);
        }  
    }


    const paymentHandler = (details, data) => {
        /** Here you can call your backend API
          endpoint and update the database */
        console.log(details, data);
    }


    return (
        <div className="container">
            <h3 className="text-center mb-4">Check-Out</h3>
            <div className="row">
                <div className="col-12 col-md-8 paymentForm">
                    
                        <div className="col-12 col-md-10 border-bottom" style={{borderColor: '#d9d9d9'}}>
                            <Button className="btn btn-light btn-block text-left" type="button"
                             onClick={() => setOpenCostumerDetails(!openCostumerDetails)}
                             aria-controls="costumer-details-collapse"
                             aria-expanded={openCostumerDetails}
                            >
                                Costumer Details
                            </Button>
                            <Collapse in={openCostumerDetails}>
                                <div className="mb-2" id="costumer-details-collapse">
                                    <form>
                                        <div className="form-group mt-2 payment-form">
                                            <div className="form-group">
                                                <label htmlFor="fullName">Full name: </label>
                                                <input type="text" className="form-control" ref={fullNameRef} required></input>
                                                <div className="invalidMassege text-danger">
                                                    {messageFullName}
                                                </div>
                                            </div>
                                            
                                            <div className="form-group">
                                                <label htmlFor="phone">Phone: </label>
                                                <input type="tel" className="form-control" ref={phoneRef} placeholder="050-123-1234" required></input>
                                                <div className="invalidMassege text-danger">
                                                    {messagePhone}
                                                </div>
                                            </div>
                                            
                                            <div className="form-group">
                                                <label htmlFor="email">Email: </label>
                                                <input type="mail" className="form-control" ref={emailRef} required></input>
                                                <div className="invalidMassege text-danger">
                                                    {messageEmail}
                                                </div>
                                            </div>
                                            
                                            <div className="form-check mt-2">
                                                <input type="checkbox" className="form-check-input" id="ReceiveMarketingInfo"></input>
                                                <label className="form-check-label mb-2" htmlFor="ReceiveMarketingInfo">I would like to receive information about products and promotions on the site</label>
                                            </div>
                                            
                                            <button type="submit" className="btn btn-primary btn-sm px-5" onClick={submitCostumerDetails}>Next</button>
                                        </div>
                                    </form> 
                                </div>
                            </Collapse>
                            
                        </div> 

                        <div className="col-12 col-md-10 mt-4 border-bottom" style={{borderColor: '#d9d9d9'}}>
                            <Button className="btn btn-light btn-block text-left" type="button"
                              onClick={() => setOpenRecipientDetails(!openRecipientDetails)}
                              aria-controls="costumer-details-collapse"
                              aria-expanded={openRecipientDetails}
                            >
                                Recipient Details
                            </Button>
                            <Collapse in={openRecipientDetails}>
                                <div className="collapse mb-2" id="RecipientDetails"  ref={recipientDetails}>
                                    <form>
                                        <div className="form-group mt-2">
                                        
                                            <div className="form row form-group">
                                                <div className="col-12 col-md-6">
                                                    <label htmlFor="firstName">First name:</label>
                                                    <input type="text" className="form-control" ref={firstNameRef} required></input>
                                                    <div className="invalidMassege text-danger">
                                                        {messageFirstName}
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6">
                                                    <label htmlFor="lastName">Last name:</label>
                                                    <input type="text" className="form-control" ref={lastNameRef} required></input>
                                                    <div className="invalidMassege text-danger">
                                                        {messageLastName}
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="form row form-group">
                                                <div className="col-12 col-md-6">
                                                    <label htmlFor="city">City:</label>
                                                    <input type="text" className="form-control" ref={cityRef} required></input>
                                                    <div className="invalidMassege text-danger">
                                                        {messageCity}
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6">
                                                    <label htmlFor="street">Street:</label>
                                                    <input type="text" className="form-control" ref={streetRef} required></input>
                                                    <div className="invalidMassege text-danger">
                                                        {messageStreet}
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="form row form-group">
                                                <div className="col-12 col-md-6">
                                                    <label htmlFor="apartmentNumber">Apartment number:</label>
                                                    <input type="number" className="form-control" ref={apartmentNumberRef} required></input>
                                                    <div className="invalidMassege text-danger">
                                                        {messageApartmentNumber}
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6">
                                                    <label htmlFor="homeNumber">Home number:</label>
                                                    <input type="number" className="form-control" ref={homeNumberRef} required></input>
                                                    <div className="invalidMassege text-danger">
                                                        {messageHomeNumber}
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <button type="submit" className="btn btn-primary btn-sm px-5" onClick={submitRecipientDetails}>Next</button> 
                                        </div>  
                                    </form> 
                                </div>
                            </Collapse>
                        </div>

                        <div className="col-12 col-md-10 mt-4">
                            <div className="form-group">
                                <label htmlFor="deliverySelect">Delivery:</label>
                                <select className="form-control" ref={selectDelivery} onChange={onChangeDelivery}>
                                    <option value="Self-pickup">Self-pickup: $0</option>
                                    <option value="Postal-service">Postal service: $10</option>
                                    <option value="Registered-mail">Registered mail: $30</option>
                                    <option value="emissary">emissary: ${calculateDelivery().toLocaleString()} - Free over $200</option>
                                </select>
                            </div>
                        </div>

                        {/* Payment Form */}
                        <div className="col-12 col-md-10 border-bottom" style={{borderColor: '#d9d9d9'}}>
                            <Button className="btn btn-light btn-block text-left" type="button" 
                              onClick={() => setOpenPaymentDetails(!openPaymentDetails)}
                              aria-controls="costumer-details-collapse"
                              aria-expanded={openPaymentDetails}
                            >
                                Payment Details
                            </Button>
                            <Collapse in={openPaymentDetails}>
                                <div className="mb-2 mt-3" id="paymentDetails">
                                    <form>
                                        <div className="form-group mt-2 payment-form">
                                            <div className="mb-2" id="paypalDetails">
                                                <PayPalBtn amount = {1} currency = {'USD'} onSuccess={paymentHandler}/>
                                            </div>

                                        </div>
                                    </form> 
                                </div>
                            </Collapse>
                        </div> 
                    
                        <div className="col-12 col-md-10 mt-2 mt-4">
                            <button type="submit" className="btn btn-primary">Confirm order</button> 
                        </div>
                                            
                </div>
                <div className="col-12 col-md-4">
                    <OrderSummary
                        cartProducts={props.cartProducts} 
                        getSubTotalAmount={props.getSubTotalAmount} 
                        tax={props.tax} >
                    </OrderSummary>
                    <p>Delivery: ${deliveryAmount}</p>
                    <p><b>Total after delivery: <span className="text-success">${getTotalAmountAfterDelivery().toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span></b></p>
                </div>
            </div>
        </div>
    )
}

