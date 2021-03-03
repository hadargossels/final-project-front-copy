import React,{useState,useEffect} from 'react'
import {auth,db,config} from '../../../firebase'
import { Admin, Resource } from 'react-admin';
import { UserList , MyEditUser, MyNewUser, ProductsList ,MyNewProduct , MyEditProduct } from './ListsDashBoard';
import {
    FirebaseAuthProvider,
  } from 'react-admin-firebase';
  import firebaseDataProvider from 'ra-data-firebase-client'
  import firebase from 'firebase/app'
  import "firebase/database";

export default function DashBoard(props) {
    const options = {};
    const dataProvider = firebaseDataProvider(firebase,options);
    const [myDash, setMyDash] = useState("")

    useEffect(()=>{
        auth.onAuthStateChanged(user=>{
            if(user){
                db.on("value", (snapshot) =>{
                    const myUsers = (snapshot.val().users);
                    // console.log(myUsers.GetReference(user.uid));
                    console.log(user);
                    let myUser = '';
                    for (const i in myUsers) {
                        if(i==user.uid){
                         myUser=myUsers[i]
                        }
                    }
                    console.log(myUser)
                    if(myUser.role=='admin'){
                        console.log("hey");
                        setMyDash(
                            <Admin dataProvider={dataProvider} >
                            <Resource name="users" list={UserList} edit={MyEditUser} create={MyNewUser} />
                            <Resource name="products" list={ProductsList} edit={MyEditProduct} create={MyNewProduct} />
                          </Admin>
                        )
                    }
                    // else{
                    //     props.history.push('/')
                    // }
                })
            }
            else{
                props.history.push('/')
            }
        })
    },[])

    return (
        <div>
            {myDash}
        </div>
    )
}
