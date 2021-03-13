import React, { useEffect, useState } from 'react';
import {useAuth} from '../../context/AuthContext';
import {firebasedb} from '../../firebase';

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
            {console.log(userOrders)}
            {userOrders.map(order => {
                <h1>{order.id}</h1>
               
                })
            }
            
        </div>
    )
}
