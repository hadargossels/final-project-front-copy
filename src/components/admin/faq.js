import * as React from "react";
import { List, Datagrid, TextField, EditButton,
    Edit, SimpleForm, TextInput, Create, DateField, DateInput } from 'react-admin';

export const faqList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="content" />
            <EditButton />
        </Datagrid>
    </List>
);

export const faqEdit = props => (
    <Edit {...props} 
    // undoable={false}
    >
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="title" />
            <TextInput source="content" />
        </SimpleForm>
    </Edit>
);

export const faqCreate = props => (
       <Create {...props} undoable={false}>
            <SimpleForm>
            <TextInput source="id" />
            <TextInput source="title" />
            <TextInput source="content" />
            </SimpleForm>
        </Create>
    );
