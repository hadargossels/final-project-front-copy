import * as React from "react";
import {useNotify, useRedirect, SelectInput, List, Create, TextInput, Datagrid, TextField, EmailField,Edit, SimpleForm,EditButton } from 'react-admin';
import MyUserField from './MyUserField';
import {auth,db} from "../../firebase"

export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="phone" />
            <TextField source="role" />
            <MyUserField source="activity" />
            <EditButton basepath="/users" />
        </Datagrid>
    </List>
);
const UserTitle = ({ record }) => {
    return <span>User {record ? `"${record.name}"` : ''}</span>;
}
export const UserEdit = props => (
    <Edit title={<UserTitle />} {...props}> 
        <SimpleForm>
        <SelectInput source="activity" choices={[
                { id: 'Active', name: 'Active' },
                { id: 'Not Active', name: 'Not Active' },
            ]} /> 
        <SelectInput source="role" choices={[
                { id: 'User', name: 'User' },
                { id: 'Owner', name: 'Shop Owner' },
                { id: 'Admin', name: 'Admin' },
            ]} /> 
        </SimpleForm>
    </Edit>
);


export const UserCreate = props =>{
    const redirect = useRedirect();
    const notify = useNotify();


    function addUser(userData){
        auth.createUserWithEmailAndPassword(userData.email, userData.password)
        .then(() => {

            auth.onAuthStateChanged((user)=>{
                db.ref().child('users').child(user.uid).set({
                    id:user.uid,
                    username:userData.username,
                    email:userData.email,
                    role:"User",
                    activity:"Active"
                })
                 redirect('/users');
            })     
       
        })  
        .catch((error) => {
            notify(`Could not add user: ${error.message}`)
        });
    }

    return (
    <Create {...props} >
        <SimpleForm save={(userData)=>addUser(userData)}>
            <TextInput source="username" />
            <TextInput source="email" />
            <TextInput source="password" />
        <SelectInput source="role" choices={[
                { id: 'User', name: 'User' },
                { id: 'Owner', name: 'Shop Owner' },
                { id: 'Admin', name: 'Admin' },
            ]} /> 
        </SimpleForm>
    </Create>
)};