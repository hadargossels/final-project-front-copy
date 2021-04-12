import * as React from "react";
import { List, Datagrid, TextField, EditButton, ImageField,
    Edit, SimpleForm, TextInput, Create, EmailField, ArrayField } from 'react-admin';

export const productList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <EmailField source="email"/>
            <TextField source="firstName" />
            <TextField source="lastName" />
            <TextField source="country" />
            <TextField source="city" />
            <TextField source="address" />
            <TextField source="zip" />
            <TextField source="phone" />
            <ArrayField source="items" />
            <TextField source="total" />
            <EditButton />
        </Datagrid>
    </List>
);

export const productEdit = props => (
    <Edit {...props} undoable={false}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="src" />
            <TextInput source="price" />
            <TextInput source="name" />
            <TextInput source="gallery1" />
            <TextInput source="gallery2" />
            <TextInput source="gallery3" />
            <TextInput source="description" />
            <TextInput source="stock" />
            <TextInput source="rating" />
            <TextInput source="raters" />
            <TextInput source="related1" />
            <TextInput source="related2" />
            <TextInput source="related3" />
        </SimpleForm>
    </Edit>
);

export const productCreate = props => (
       <Create {...props}>
            <SimpleForm>
            <TextInput source="id" />
            <TextInput source="src" />
            <TextInput source="price" />
            <TextInput source="name" />
            <TextInput source="gallery1" />
            <TextInput source="gallery2" />
            <TextInput source="gallery3" />
            <TextInput source="description" />
            <TextInput source="stock" />
            <TextInput source="rating" />
            <TextInput source="raters" />
            <TextInput source="related1" />
            <TextInput source="related2" />
            <TextInput source="related3" />
            </SimpleForm>
        </Create>
    );
