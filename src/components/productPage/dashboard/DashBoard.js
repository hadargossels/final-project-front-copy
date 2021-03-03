import React,{useState,useEffect} from 'react'
import {auth,db,config} from '../../../firebase'
import { Admin, Resource } from 'react-admin';
import { UserList , MyEditUser, MyNewUser, ProductsList } from './ListsDashBoard';
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
    console.log(dataProvider);

    useEffect(()=>{
        auth.onAuthStateChanged(user=>{
            if(user){
                db.on("value", (snapshot) =>{
                    const myUsers = (snapshot.val().users);
                    console.log(myUsers);
                    let myUser = '';
                    for (const i in myUsers) {
                        if(myUsers[i].id==user.uid){
                         myUser=myUsers[i]
                        }
                    }
                    console.log(myUser)
                    if(myUser.role=='admin'){
                        setMyDash(
                            <Admin dataProvider={dataProvider} >
                            <Resource name="users" list={UserList} edit={MyEditUser} create={MyNewUser} />
                            <Resource name="products" list={UserList} edit={MyEditUser} create={MyNewUser} />
                          </Admin>
                        )
                    }
                    else{
                        props.history.push('/')
                    }
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
