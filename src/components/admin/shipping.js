import * as React from "react";
import { List, Datagrid, TextField, EditButton,
    Edit, SimpleForm, TextInput, Create, DateField, DateInput } from 'react-admin';

export const shippingList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="region" />
            <TextField source="cost" />
            <TextField source="estimatedTime" />
            <TextField source="service" />
            <EditButton />
        </Datagrid>
    </List>
);

export const shippingEdit = props => (
    <Edit {...props} 
    // undoable={false}
    >
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="region" />
            <TextInput source="cost" />
            <TextInput source="estimatedTime" />
            <TextInput source="service" />
        </SimpleForm>
    </Edit>
);

export const shippingCreate = props => (
       <Create {...props} undoable={false}>
            <SimpleForm>
            <TextInput source="id" />
            <TextInput source="region" />
            <TextInput source="cost" />
            <TextInput source="estimatedTime" />
            <TextInput source="service" />
            </SimpleForm>
        </Create>
    );
