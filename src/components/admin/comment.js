import * as React from "react";
import { List, Datagrid, TextField, EditButton,
    Edit, SimpleForm, TextInput, Create, DateField, DateInput } from 'react-admin';

export const commentList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <DateField source="date" />
            <TextField source="comment" />
            <TextField source="postId" />
            <EditButton />
        </Datagrid>
    </List>
);

export const commentEdit = props => (
    <Edit {...props} 
    // undoable={false}
    >
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="name" />
            <DateInput source="date" />
            <TextInput source="comment" />
            <TextInput source="postId" />
        </SimpleForm>
    </Edit>
);

export const commentCreate = props => (
       <Create {...props} undoable={false}>
            <SimpleForm>
            <TextInput source="id" />
            <TextInput source="name" />
            <DateInput source="date" />
            <TextInput source="comment" />
            <TextInput source="postId" />
            </SimpleForm>
        </Create>
    );
