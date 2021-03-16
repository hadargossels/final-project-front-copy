import React, { Component } from 'react';
import FinalDetails from '../FinalDetails/FinalDetails';
import './SignedCheckout.css';
import {db} from '../../firebase'
import SignedCheckoutForms from './SignedCheckoutForms/SignedCheckoutForms'

class SignedCheckout extends Component {
  constructor() {
    super();
    this.state = {
      delivery: null,
      curUser: null,
    }
  }

  componentDidMount = () => {
    db.ref('users').on('value', (snapshot)=>{
        let arr = [];
        for (let obj in snapshot.val()) {
            arr.push(snapshot.val()[obj])
        }

        let currEmail = localStorage.getItem('currentUser')

        for (let item of arr) {
            if(item.email === currEmail) {
                this.setState({
                    curUser: item
                },() => {
                    this.props.addToOrder("firstName", this.state.curUser.firstName)

                    this.props.addToOrder("email", this.state.curUser.email)
            
                    if(this.state.curUser.lastName !== "none") {
                        let fullname = `${this.state.curUser.firstName} ${this.state.curUser.lastName}`
                        this.props.addToOrder("fullName", fullname) 
                        this.props.addToOrder("lastName", this.state.curUser.lastName)
                    }
            
                    if(this.state.curUser.phoneNum !== "none") {
                        this.props.addToOrder("phoneNum", this.state.curUser.phoneNum) 
                    }
            
                    if(this.state.curUser.address !== "none") {
                        this.props.addToOrder("fullAd", this.state.curUser.address) 
                    }
            
                    if(this.state.curUser.city !== "none") {
                        this.props.addToOrder("city", this.state.curUser.city) 
                    }
            
                    if(this.state.curUser.country !== "none") {
                        this.props.addToOrder("country", this.state.curUser.country) 
                    }
                })
            }
        }
    })
  }

  setDelivery = (val) => {
    this.setState({
      delivery: val,
    },() => {this.props.addToOrder("delivery",this.state.delivery)})
  }

  setOrder = (name1,val) => {
    this.props.addToOrder(name1,val)
  }

  render () {
      let pending;
      if(this.state.curUser === null) {
        pending=<h1 className="text-9xl text-yellow-600">Loading...</h1>
      } else {
        pending=<SignedCheckoutForms delivery={this.state.delivery} addToOrder={this.setOrder} curUser={this.state.curUser}/>
      }
    return (
    <main className="SignedCheckout text-center">
        <div className="forms">
            {pending}
        </div>
        <div className="checkoutDetails">
            <FinalDetails setDelivery={this.setDelivery}/>
        </div>
    </main>
    )
  }
}

export default SignedCheckout;