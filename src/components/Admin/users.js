import * as React from "react";
import { SelectInput, List, Create, TextInput, Datagrid, TextField, EmailField,Edit, SimpleForm,EditButton } from 'react-admin';
import MyUserField from './MyUserField';
import Button from '@material-ui/core/Button';


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
                { id: 'Admin', name: 'Admin' },
            ]} /> 
        </SimpleForm>
    </Edit>
);


export const UserCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="email" />
            <TextInput source="phone" />
        <SelectInput source="role" choices={[
                { id: 'User', name: 'User' },
                { id: 'Admin', name: 'Admin' },
            ]} /> 
        </SimpleForm>
    </Create>
);