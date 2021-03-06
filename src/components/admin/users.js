import * as React from "react";
import { List, Datagrid, TextField, EmailField, EditButton,
    Edit, SimpleForm, TextInput, Create } from 'react-admin';

export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="firstName" />
            <TextField source="lastName" />
            <EmailField source="email" />
            <TextField source="country" />
            <TextField source="city" />
            <TextField source="address" />
            <TextField source="zip" />
            <TextField source="phone" />
            <TextField source="role" />
            <TextField source="active" />
            <EditButton />
        </Datagrid>
    </List>
);

export const userEdit = props => (
    <Edit {...props} 
    // undoable={false}
    >
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="firstName" />
            <TextInput source="lastName" />
            <TextInput source="email" />
            <TextInput source="country" />
            <TextInput source="city" />
            <TextInput source="address" />
            <TextInput source="zip" />
            <TextInput source="phone" />
            <TextInput source="role" />
            <TextInput source="active" />
        </SimpleForm>
    </Edit>
);

export const userCreate = props => (
       <Create {...props} undoable={false}>
            <SimpleForm>
            <TextInput source="id" />
            <TextInput source="firstName" />
            <TextInput source="lastName" />
            <TextInput source="email" />
            <TextInput source="country" />
            <TextInput source="city" />
            <TextInput source="address" />
            <TextInput source="zip" />
            <TextInput source="phone" />
            <TextInput source="role" />
            <TextInput source="active" />
            </SimpleForm>
        </Create>
    );
