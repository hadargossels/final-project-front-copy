import * as React from "react";
import { List, Datagrid, TextField, EditButton, ImageField,
    Edit, SimpleForm, TextInput, Create } from 'react-admin';

export const productList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <ImageField source="src" title="title"/>
            <TextField source="price" />
            <TextField source="name" />
            <ImageField source="gallery1" title="title"/>
            <ImageField source="gallery2" title="title"/>
            <ImageField source="gallery3" title="title"/>
            <TextField source="description" />
            <TextField source="stock" />
            <TextField source="rating" />
            <TextField source="raters" />
            <ImageField source="related1" title="title"/>
            <ImageField source="related2" title="title"/>
            <ImageField source="related3" title="title"/>
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
