import React, { createRef } from 'react';
import '../payment.css';
import OrderSummary from './OrderSummary.jsx';
import 'bootstrap/js/dist/collapse';
import $ from 'jquery';


class Payment extends React.Component {
    constructor(props) {
        super(props);
        this.costumerDetailsRef = createRef();
        this.recipientDetails = createRef();
        this.fullNameRef = createRef();
        this.phoneRef = createRef();
        this.emailRef = createRef();
        this.firstNameRef = createRef();
        this.lastNameRef = createRef();
        this.streetRef = createRef();
        this.homeNumberRef = createRef();
        this.apartmentNumberRef = createRef();
        this.selectDelivery = createRef();
        this.cityRef = createRef();
        this.state = {
            deliveryAmount: 0,
            messageFullName: '',
            messagePhone: '',
            messageEmail: '',
            messageFirstName: '',
            messageLastName: '',
            messageStreet: '',
            messageHomeNumber: '',
            messageApartmentNumber: '',
            messageCity: ''
            
        }
    }

    calculateDelivery = () => {
        let totalAmount = this.props.getSubTotalAmount();
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

    onChangeDelivery = () => {
        switch (this.selectDelivery.current.value){
            case 'Self-pickup':
                this.setState({deliveryAmount: 0});
                break;
            case 'Postal-service':
                this.setState({deliveryAmount: 10});
                break;
            case 'Registered-mail':
                this.setState({deliveryAmount: 30});
                break;
            case 'emissary':
                let deliveryAmount = this.calculateDelivery();
                this.setState({deliveryAmount});
                break;
            default:
                break;
        }
    }

    getTotalAmountAfterDelivery = () => {
        return (this.props.getSubTotalAmount() * (1 +this.props.tax)) * (1) + this.state.deliveryAmount;
    }

    submitCostumerDetails = (event) => {
        event.preventDefault();

        const invalidMessages= {required: "This field is required", 
                                emailPattern: "Please provide a valid email",
                                phonePattern: "Please provide a valid phone number"                           
                                };

        let correctInputs = true;
        if (this.fullNameRef.current.validity.valueMissing){
            this.fullNameRef.current.style.borderColor = 'red';
            correctInputs = false;
            this.setState({messageFullName: invalidMessages.required});
        }
        else{
            this.setState({messageFullName: ''});
            this.fullNameRef.current.style.borderColor = 'green';
        }
        
        const phonePattrern = /^0\d{2}-\d{3}-\d{4}/;
        if (this.phoneRef.current.validity.valueMissing) {
            this.phoneRef.current.style.borderColor = 'red';
            correctInputs = false;
            this.setState({messagePhone: invalidMessages.required});
        }
        else if (!this.phoneRef.current.value.match(phonePattrern)){
            this.phoneRef.current.style.borderColor = 'red';
            correctInputs = false;
            this.setState({messagePhone: invalidMessages.phonePattern});
        }
        else {
            this.setState({messagePhone: ''});
            this.phoneRef.current.style.borderColor = 'green';
        }
        
        const emailPattern = /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/;
        if (!this.emailRef.current.value){
            this.emailRef.current.style.borderColor = 'red';
            correctInputs = false;
            this.setState({messageEmail: invalidMessages.required});
        } 
        else if (!this.emailRef.current.value.match(emailPattern)){
            this.emailRef.current.style.borderColor = 'red';
            correctInputs = false;
            this.setState({messageEmail: invalidMessages.emailPattern});
        }
        else {
            this.setState({messageEmail: ''});
            this.emailRef.current.style.borderColor = 'green';
        }
        
        if (correctInputs){
            $(this.costumerDetailsRef.current).collapse('hide');
            $(this.recipientDetails.current).collapse('show');
        }  
    }

    submitRecipientDetails = (event) => {
        event.preventDefault();

        const invalidMessages= {required: "This field is required", 
                                emailPattern: "Please provide a valid email",
                                phonePattern: "Please provide a valid phone number"                           
                                };

        let correctInputs = true;
        
        if (this.firstNameRef.current.validity.valueMissing){
            this.firstNameRef.current.style.borderColor = 'red';
            correctInputs = false;
            this.setState({messageFirstName: invalidMessages.required});
        }
        else{
            this.setState({messageFirstName: ''});
            this.firstNameRef.current.style.borderColor = 'green';
        }

        if (this.lastNameRef.current.validity.valueMissing){
            this.lastNameRef.current.style.borderColor = 'red';
            correctInputs = false;
            this.setState({messageLastName: invalidMessages.required});
        }
        else{
            this.setState({messageLastName: ''});
            this.lastNameRef.current.style.borderColor = 'green';
        }

        if (this.streetRef.current.validity.valueMissing){
            this.streetRef.current.style.borderColor = 'red';
            correctInputs = false;
            this.setState({messageStreet: invalidMessages.required});
        }
        else{
            this.setState({messageStreet: ''});
            this.streetRef.current.style.borderColor = 'green';
        }

        if (this.homeNumberRef.current.validity.valueMissing){
            this.homeNumberRef.current.style.borderColor = 'red';
            correctInputs = false;
            this.setState({messageHomeNumber: invalidMessages.required});
        }
        else{
            this.setState({messageHomeNumber: ''});
            this.homeNumberRef.current.style.borderColor = 'green';
        }

        if (this.cityRef.current.validity.valueMissing){
            this.cityRef.current.style.borderColor = 'red';
            correctInputs = false;
            this.setState({messageCity: invalidMessages.required});
        }
        else{
            this.setState({messageCity: ''});
            this.cityRef.current.style.borderColor = 'green';
        }

        if (correctInputs){
            $(this.recipientDetails.current).collapse('hide');
        }  
    }

    render() {
        return (
            <div className="container">
                <h3 className="text-center mb-4">Check-Out</h3>
                <div className="row">
                    <div className="col-12 col-md-8 paymentForm">
                       
                            <div className="col-12 col-md-10 border-bottom" style={{borderColor: '#d9d9d9'}}>
                                <button className="btn btn-light btn-block text-left" type="button" data-toggle="collapse" data-target="#costumerDetails" aria-expanded="false" aria-controls="collapseExample">
                                    Costumer details
                                </button>
                                <div className="collapse mb-2" id="costumerDetails" ref={this.costumerDetailsRef}>
                                    <form>
                                        <div className="form-group mt-2 payment-form">
                                            <label htmlFor="fullName">Full name: </label>
                                            <input type="text" className="form-control" ref={this.fullNameRef} required></input>
                                            <div className="invalidMassege text-danger">
                                                {this.state.messageFullName}
                                            </div>

                                            <label htmlFor="phone">Phone: </label>
                                            <input type="tel" className="form-control" ref={this.phoneRef} placeholder="050-123-1234" required></input>
                                            <div className="invalidMassege text-danger">
                                                {this.state.messagePhone}
                                            </div>
                                            
                                            <label htmlFor="email">Email: </label>
                                            <input type="mail" className="form-control" ref={this.emailRef} required></input>
                                            <div className="invalidMassege text-danger">
                                                {this.state.messageEmail}
                                            </div>
                                            
                                            <div className="form-check mt-2">
                                                <input type="checkbox" className="form-check-input" id="ReceiveMarketingInfo"></input>
                                                <label className="form-check-label mb-2" htmlFor="ReceiveMarketingInfo">I would like to receive information about products and promotions on the site</label>
                                            </div>
                                            
                                            <button type="submit" className="btn btn-primary btn-sm" onClick={this.submitCostumerDetails}>Next</button>
                                        </div>
                                    </form> 
                                </div>
                            </div> 

                            <div className="col-12 col-md-10 mt-4 border-bottom" style={{borderColor: '#d9d9d9'}}>
                                <button className="btn btn-light btn-block text-left" type="button" data-toggle="collapse" data-target="#RecipientDetails" aria-expanded="false" aria-controls="collapseExample">
                                    Recipient details
                                </button>
                                <div className="collapse mb-2" id="RecipientDetails"  ref={this.recipientDetails}>
                                    <form>
                                        <div className="form-group mt-2">
                                            <div className="form row">
                                                <div className="col-6">
                                                    <label htmlFor="firstName">First name:</label>
                                                    <input type="text" className="form-control" ref={this.firstNameRef} required></input>
                                                    <div className="invalidMassege text-danger">
                                                        {this.state.messageFirstName}
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <label htmlFor="lastName">Last name:</label>
                                                    <input type="text" className="form-control" ref={this.lastNameRef} required></input>
                                                    <div className="invalidMassege text-danger">
                                                        {this.state.messageLastName}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form row">
                                                <div className="col-12 col-md-6">
                                                    <label htmlFor="street">Street:</label>
                                                    <input type="text" className="form-control" ref={this.streetRef} required></input>
                                                    <div className="invalidMassege text-danger">
                                                        {this.state.messageStreet}
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-3">
                                                    <label htmlFor="homeNumber">Home number:</label>
                                                    <input type="number" className="form-control" ref={this.homeNumberRef} required></input>
                                                    <div className="invalidMassege text-danger">
                                                        {this.state.messageHomeNumber}
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-3">
                                                    <label htmlFor="apartmentNumber">Apartment number:</label>
                                                    <input type="number" className="form-control" ref={this.apartmentNumberRef} required></input>
                                                    <div className="invalidMassege text-danger">
                                                        {this.state.messageApartmentNumber}
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <label htmlFor="city">City:</label>
                                            <input type="text" className="form-control mb-4" ref={this.cityRef} required></input>
                                            <div className="invalidMassege text-danger">
                                                {this.state.messageCity}
                                            </div>

                                            <button type="submit" className="btn btn-primary btn-sm" onClick={this.submitRecipientDetails}>Next</button> 
                                        </div>  
                                    </form> 
                                </div>
                            </div>

                            <div className="col-12 col-md-10 mt-4">
                                <div className="form-group">
                                    <label htmlFor="deliverySelect">Delivery:</label>
                                    <select className="form-control" ref={this.selectDelivery} onChange={this.onChangeDelivery}>
                                        <option value="Self-pickup">Self-pickup: $0</option>
                                        <option value="Postal-service">Postal service: $10</option>
                                        <option value="Registered-mail">Registered mail: $30</option>
                                        <option value="emissary">emissary: ${this.calculateDelivery().toLocaleString()} - Free over $200</option>
                                    </select>
                                </div>
                            </div>
                        
                            <div className="col-12 col-md-10 mt-2">
                                <button type="submit" className="btn btn-primary">Payment</button> 
                            </div>
                                              
                    </div>
                    <div className="col-12 col-md-4">
                        <OrderSummary
                            cartProducts={this.props.cartProducts} 
                            getSubTotalAmount={this.props.getSubTotalAmount} 
                            tax={this.props.tax} >
                        </OrderSummary>
                        <p>Delivery: ${this.state.deliveryAmount}</p>
                        <p><b>Total after delivery: <span className="text-success">${this.getTotalAmountAfterDelivery().toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span></b></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Payment;