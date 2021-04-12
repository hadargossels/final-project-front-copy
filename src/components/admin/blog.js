import * as React from "react";
import { List, Datagrid, TextField, EmailField, EditButton,
    Edit, SimpleForm, TextInput, Create, DateField, ImageField, DateInput } from 'react-admin';

export const blogList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="content" />
            <DateField source="date" />
            <TextField source="comments" />
            <ImageField source="src" />
            <EditButton />
        </Datagrid>
    </List>
);

export const blogEdit = props => (
    <Edit {...props} 
    // undoable={false}
    >
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="title" />
            <TextInput source="content" />
            <DateInput source="date" />
            <TextInput source="comments" />
            <TextInput source="src" />
        </SimpleForm>
    </Edit>
);

export const blogCreate = props => (
       <Create {...props} undoable={false}>
            <SimpleForm>
            <TextInput source="id" />
            <TextInput source="title" />
            <TextInput source="content" />
            <DateInput source="date" />
            <TextInput source="comments" />
            <TextInput source="src" />
            </SimpleForm>
        </Create>
    );
