import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import AccountMenu from '../AccountMenu/AccountMenu';
import { db } from '../../js/firebase';
export default class AccountOrders extends Component {

    constructor(props) {

        super(props);

        this.state = {orders: []};

        this.idToTitle = this.idToTitle.bind(this);
        this.cancelOrder = this.cancelOrder.bind(this);
    }

    idToTitle(prodId, index) {

        let data;
        
        db.on("value", async (snapshot) => {

            data = await (snapshot.val().products);
            
            if (data) {
                
                for await (const [key, value] of Object.entries(data)) {
                
                    if (data[key].id === prodId) {

                        if (document.querySelector("#prodID_" + index + "_" + prodId)) {

                            document.querySelector("#prodID_" + index + "_" + prodId).innerText = data[key].title
                        }
                    }
                }
            }
        });
    }

    cancelOrder(orderID) {

        window.confirm("Are you sure?");
    }

    async componentDidMount() {

        let data;
        let orders = [];

        await db.on("value", async (snapshot) => {

            data = await (snapshot.val().orders);
            
            if (data) {
                
                for await (const [key, value] of Object.entries(data)) {
                
                    if (data[key].uid === this.props.user.id)
                        orders.push(data[key])
                }

                orders = orders.sort((a,b) => {
        
                    return (a.datetime > b.datetime) ? 1 : ((b.datetime > a.datetime) ? -1 : 0)
                });

                this.setState({ orders });
            }
        });
    }

    render() {
        return (
            <div className="lead" style={{textAlign: "center", width: "95%", margin: "0 auto"}}>
                <br/><br/><br/><br/>

                <div className="main-body">
                
                <div>
                    <ol className="breadcrumb">
                        <li><NavLink to="/account" style={{textDecoration: "none"}}>Account&nbsp;</NavLink></li>
                            / <NavLink to={"/account/orders/"} style={{textDecoration: "none"}}><li className="active">&nbsp;Orders</li></NavLink>
                    </ol>
                </div>

                    <div className="row gutters-sm">

                        <AccountMenu {...this.props} />

                        <div className="col-md-10">
                            <div className="card mb-3">
                                <div className="card-body">
                                {this.state.orders.length > 0 ? 
                                    <div className="row">
                                        <table className="table table-hover table-borderless" style={{textAlign: "center", fontSize: "medium"}}>
                                            <tbody>
                                                <tr>
                                                    <th>#</th>
                                                    <th>ID</th>
                                                    <th>Date-Time</th>
                                                    <th>Products</th>
                                                    <th>Shipping</th>
                                                    <th>Total</th>
                                                    <th>Payment</th>
                                                    <th>Status</th>
                                                    <th>Cancel</th>
                                                </tr>
                                                {this.state.orders.map((order, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td>{index+1}</td>
                                                            <td>{order.id}</td>
                                                            <td>{order.datetime}</td>
                                                            <td>
                                                                {order.productsInCart.map((prod, count) => {
                                                                    return <p key={count}><span id={"prodID_" + index + "_" + prod.prodId}>{this.idToTitle(prod.prodId, index)}</span>&nbsp;x{prod.prodQuantity}</p>
                                                                })}
                                                            </td>
                                                            <td>{order.shipping[0] + ": " + order.shipping[1]}</td>
                                                            <td>{order.total}</td>
                                                            <td>{order.payment}</td>
                                                            <td style={{fontWeight: "bold"}}>{order.status === "Delivered" ? <span className="text-success">{order.status}</span> : order.status === "Canceled" ? <span className="text-danger">{order.status}</span> : <span className="text-warning">{order.status}</span>}</td>
                                                            <td>
                                                                {order.status === "Delivered" || order.status === "Canceled" || order.status === "Dispatched" ? null :
                                                                <button className="btn btn-danger font-weight-bold" onClick={() => this.cancelOrder(order.id)}>Cancel Order</button>}
                                                            </td>
                                                        </tr>
                                                                    
                                                )})}
                                            </tbody>
                                        </table>
                                    </div>
                                :
                                    <div className="row">
                                        <div className="col-sm-4">
                                            No orders have been made yet.
                                        </div>
                                    </div>
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            <br/><br/><br/><br/><br/><br/>
            </div>
        )
    }
}
