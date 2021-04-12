import React, {Component} from 'react'
import Dropdown from '../dropdown/Dropdown'
import Paypal from '../Paypal'
import Success from '../Success/Success'
import Fail from '../Fail/Fail'
import './Payment.css'
import {db} from '../../firebase'
import UpdateProfile from '../UpdateProfile'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {Form, Button, Card, Alert} from 'react-bootstrap'



export class Payment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            payment: true,
            shippingInfo: [],
            invoice: [],
            token: localStorage.getItem("token"),
            payload: {},
            error: ''

        }
        this.firstNameRef = React.createRef();
        this.lastNameRef = React.createRef();
        this.emailRef = React.createRef();
        this.countryRef = React.createRef();
        this.cityRef = React.createRef();
        this.addressRef = React.createRef();
        this.zipRef = React.createRef();
        this.phoneRef = React.createRef();
    }

parseJwt () {
    let token = localStorage.getItem("token")
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    this.setState({payload: JSON.parse(jsonPayload)})
};

    componentWillMount () {
        this.parseJwt()
        this.getInvoice()        
      }

      async handleSubmit(e) {
        e.preventDefault()
        let payload = this.state.payload
        this.setState({error: ''})
        let id = payload.id
        let firstName =  this.firstNameRef.current.value 
        let lastName = this.lastNameRef.current.value  
        let email = this.emailRef.current.value 
        let country = this.countryRef.current.value 
        let city = this.cityRef.current.value 
        let address = this.addressRef.current.value
        let zip = this.zipRef.current.value
        let phone = this.phoneRef.current.value

        try {
            const response = await axios.put(`${process.env.REACT_APP_URL}/user/${id}`, 
            {
                id:id,
                firstName: firstName,
                lastName: lastName,
                address: address,
                email: email,
                country: country,
                city: city,
                zip: zip,
                phone: phone,
                role: 'custumer',
                active: true
            }
            )
            .then((response) => {console.log(response)}, (error) => {console.log('axios error ' + error)})  
        } 
        catch (error) {
            this.setState({error})
        }
    }
      
    async getInvoice() {
        try {
            await axios.get(`${process.env.REACT_APP_URL}/invoice/`)
            .then((response)=>{this.setState({invoice:response.data})})
        } catch (error) {
            console.error(error);
        }
        }

      async createInvoice(e) {
        e.preventDefault();
        let basket = [...localStorage.getItem("cart")]
        let payload = {...this.state.payload}
        let shipping = this.props.location.paymentProps.shipping
        let tax_rate = 0.18
        let total = this.props.location.paymentProps.total
        let taxes = total * tax_rate
        let total_ex_taxes = total - taxes
        let invoice = [...this.state.invoice]
        let id = parseInt(invoice[invoice.length-1].id + 1) 
        try {await axios.post(`${process.env.REACT_APP_URL}/invoice/`, {
                basket : basket,
                id : id,
                customer_id : payload.id,
                date : new Date (),
                delivery_fees : shipping,
                reference : localStorage.getItem("orderId"),
                returned : "false",
                status : "ordered",
                tax_rate : tax_rate,
                total : total, 
                taxes : taxes,
                total_ex_taxes : total_ex_taxes
          })
          .then((response) => {
            console.log(response);
            localStorage.setItem("cart", [])
          }, (error) => {
            console.log('axios error ' + error);
          });
        }
        catch {
           console.error('Faild to complete order')
        }
      }


    render() {
        
        return (
            <div>
                <div className='payCont'>
                    <div className="summery">
                        <h3>Summery</h3>
                        <Dropdown/>
                    </div><br/>
                    <div>
                        <h3>Shipping Details</h3>
                        <>
{this.state.payload ? 
    <>
  <Card style={{maxWidth: '400px', margin: '15px auto'}} className='d-flex justify-content-center'>
            <Card.Body>
                {this.state.error && <Alert variant='danger'>{this.state.error}</Alert>}
                <Form onSubmit={(e)=>{this.handleSubmit(e)}}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={this.emailRef} required defaultValue={this.state.payload.email}/>
                    </Form.Group>                    
                    <Form.Group id="firstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" ref={this.firstNameRef} defaultValue={this.state.payload.firstName}/>
                    </Form.Group>
                    <Form.Group id="lastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" ref={this.lastNameRef} defaultValue={this.state.payload.lastName}/>
                    </Form.Group>
                    <Form.Group id="country">
                        <Form.Label>country</Form.Label>
                        <Form.Control type="text" ref={this.countryRef} defaultValue={this.state.payload.country}/>
                    </Form.Group>
                    <Form.Group id="city">
                        <Form.Label>city</Form.Label>
                        <Form.Control type="text" ref={this.cityRef} defaultValue={this.state.payload.city}/>
                    </Form.Group>
                    <Form.Group id="address">
                        <Form.Label>address</Form.Label>
                        <Form.Control type="text" ref={this.addressRef} defaultValue={this.state.payload.address}/>
                    </Form.Group>
                    <Form.Group id="zip">
                        <Form.Label>zip</Form.Label>
                        <Form.Control type="text" ref={this.zipRef} defaultValue={this.state.payload.zip}/>
                    </Form.Group>
                    <Form.Group id="phone">
                        <Form.Label>phone</Form.Label>
                        <Form.Control type="text" ref={this.phoneRef} defaultValue={this.state.payload.phone}/>
                    </Form.Group><br/>
                    <Button className='w-100' type='submit'>Update</Button><br/><br/>
                </Form>
            </Card.Body>
        </Card>
        </> : <div>Loading...</div>}
        </>
                    </div><br/>
                    <div><h3>Payment method:</h3> <br/>
                        <Paypal/></div>
                    <button  className='payBtn' data-bs-toggle="modal" data-bs-target={"#modalPay"} disabled={false} onClick={(e)=>{this.createInvoice(e)}}>Submit your order</button>
                    <div className="modal fade" id={"modalPay"} tabIndex="-1" aria-labelledby={"exampleModalLabel"} aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            <div>
                                {localStorage.getItem("orderErr").length === 0 ? <Success email={this.emailRef.current ? this.emailRef.current.value : null}/> : <Fail/>}
                                <Link to="/"><button data-bs-dismiss="modal" aria-label="Close">Back to home page</button></Link>
                            </div>
                        </div>
                        </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Payment
