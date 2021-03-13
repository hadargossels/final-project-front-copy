import React, { Component } from 'react';
import './TrackOrder.css';
import {db} from '../../firebase'
import formatPrice from '../utility/Price'

class TrackOrder extends Component {
    constructor() {
        super()
        this.state = {
            orders: [],
            num: null,
            curOrder: null,
        }
    }

    componentDidMount = () => {
        db.ref('orders').on('value', (snapshot)=>{
            let arr = [];
            for (let obj in snapshot.val()) {
                arr.push(snapshot.val()[obj])
            }
            this.setState({
                orders: arr,
            })
        })
    }

    addNum = (event) => {
        this.setState({
            num: event.target.value
        })
    }

    findOrder = () => {
        let ordNum = Number(this.state.num)
        let isFound = false;
        if(this.state.orders.length) {
            for(let ord of this.state.orders) {
                if(ord.id === ordNum) {
                    isFound = true;
                    this.setState({
                        curOrder: ord,
                    },() => {console.log(this.state.curOrder)})
                    break;
                }
            }
        }
        if(isFound === false) {
            this.setState({
                curOrder: null
            })
        }
    }

    render () {

        let orderID;
        if(this.state.curOrder) {
            orderID = this.state.curOrder.id
        }

        let ordDetails;
        if(this.state.curOrder) {
            ordDetails =                     <div>
            <div>
                <h1 className="text-yellow-800 text-4xl font-medium mt-2 my-4">Payer Details</h1> 
                <div className="mb-4">
                    <p><span className="underline">Order Status:</span> {this.state.curOrder.status}</p>
                    <table>
                        <tr>
                            <td className="w-72"><span className="underline">Payer Name:</span> {this.state.curOrder.payerName}</td>
                            <td className="w-72"><span className="underline">email:</span> {this.state.curOrder.email}</td>
                        </tr>
                        <tr>
                            <td className="w-72"><span className="underline">Payment:</span> {this.state.curOrder.payment}</td>
                            <td className="w-72"><span className="underline">Price:</span> {formatPrice(this.state.curOrder.price)}</td>
                        </tr>
                    </table>
                </div>
            </div>
            <hr className="border-yellow-900 mr-96 my-6"/>
            <div>
                <h1 className="text-yellow-800 text-4xl font-medium mt-2 my-4">Products</h1> 
                <table>
                    {this.state.curOrder.items.map(item => (
                        <tr>
                            <td className="w-40">{item.ISBN10}</td>
                            <td className="w-96">{item.title}</td>
                            <td className="w-96">{formatPrice(item.price)}</td>
                        </tr>
                    ))}
                </table>
            </div>
            <hr className="border-yellow-900 mr-96 my-6"/>
            <div>
                <h1 className="text-yellow-800 text-4xl font-medium mt-2 my-4">Reciever Details</h1>
                <table>
                    <tr>
                        <td className="w-72"><span className="underline">Reciever Name:</span> {this.state.curOrder.recieverName}</td>
                        <td className="w-72"><span className="underline">Phone Number:</span> {this.state.curOrder.phoneNum}</td>
                    </tr>
                    <tr>
                        <td className="w-72"><span className="underline">Address:</span> {this.state.curOrder.fullAd}</td>
                        <td className="w-72"><span className="underline">Zipcode:</span> {this.state.curOrder.zipCode}</td>
                    </tr>
                    <tr>
                        <td className="w-72"><span className="underline">City:</span> {this.state.curOrder.city}</td>
                        <td className="w-72"><span className="underline">Country:</span> {this.state.curOrder.country}</td>
                    </tr>
                </table>
                <p className="mb-2"><span className="underline">Notes:</span> {this.state.curOrder.notes}</p>
            </div>
        </div>
        } else {
            ordDetails = <div></div>
        }

        return(    
            <main className="TrackOrder mb-12">
                <div className="mt-4 mb-6 border-4 border-yellow-200 bg-yellow-100 mx-12 rounded text-center text-3xl">
                    <h1 className="text-yellow-900 text-6xl font-bold mt-2">Track Order</h1>
                    <div className="my-4">
                        <label>Enter Order Number:</label>
                        &nbsp;
                        <input type="text" className="border border-black" onChange={(event) => {this.addNum(event)}}/>
                    </div>
                    <button className="bg-yellow-800 text-yellow-100 rounded px-4 py-2 shadow-lg hover:shadow-none border border-yellow-800 mb-3" onClick={() => {this.findOrder()}}>
                        Find Order
                    </button>
                </div>
                <div className="bg-gray-300 text-3xl shadow shadow-md border-4 rounded border-solid border-8 border-gray-400 mx-12 pl-4">
                    <h1 className="text-yellow-700 text-5xl font-medium mt-2">Order ID: {orderID}</h1>
                    {ordDetails}
                </div>
            </main>
        )
    }
}

export default TrackOrder;