import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { firebasedb } from '../../firebase';
import { Container, Table } from 'react-bootstrap'

export default function ProfileOrdes() {
    const { currentUser } = useAuth();
    const [myUser, setMyUser] = useState();
    const [userOrders, setuserOrders] = useState([]);

    useEffect(() => {
        if (currentUser){
            firebasedb.ref('users').child(currentUser.uid).get()
            .then (snapshot => {
                setMyUser(snapshot.val());
            }) 

            firebasedb.ref('orders').get()
            .then (snapshot => {
                const userOrders = [];
                for (let key in snapshot.val()){
                    if(snapshot.val()[key].customer_details.user_id == currentUser.uid){
                        userOrders.push(snapshot.val()[key])
                    }
                }
                setuserOrders(userOrders);
            }) 
        }
    }, [currentUser])



    return (
        <div>
            {userOrders.length > 0 ? 
                <Container>
                    {console.log(userOrders)}
                    {console.log("hi")}
                    <h3 className="mb-3">Orders</h3>
                    {userOrders.map(order => (
                        <div className="mb-4">
                            <div className="d-flex">
                                <p><b>Order Id: </b>{order.id}</p>
                                <p className="ml-3"><b>Status: </b> {order.order_details.status}</p>
                                <p className="ml-3"><b>Total: </b>${order.order_details.total_amount.value}</p>
                                <p></p>
                            </div>

                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                    <th></th>
                                    <th>Product Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {order.order_details.products.map((product, index) => (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{product.name}</td>
                                        <td>{(product.price * (1 - product.discount)).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                                        <td>{product.quantity}</td>
                                        <td>${(parseInt(product.quantity) * (product.price * (1 - product.discount))).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                                    </tr>
                                ))}
                            </tbody>
                            </Table>
                        </div>
                        
                        
                    ))}
                </Container>
            : ''}
        </div>
    )
}
