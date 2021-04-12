import * as React from "react";
import { List, Datagrid, TextField, EditButton,
    Edit, SimpleForm, TextInput, Create} from 'react-admin';

export const storeInfoList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="address" />
            <TextField source="phone" />
            <TextField source="opening" />
            <TextField source="email" />
            <TextField source="about" />
            <TextField source="facebook" />
            <TextField source="instagram" />
            <TextField source="twitter" />
            <EditButton />
        </Datagrid>
    </List>
);

export const storeInfoEdit = props => (
    <Edit {...props} 
    // undoable={false}
    >
        <SimpleForm>
        <TextField source="id" />
            <TextInput source="name" />
            <TextInput source="address" />
            <TextInput source="phone" />
            <TextInput source="opening" />
            <TextInput source="email" />
            <TextInput source="about" />
            <TextInput source="facebook" />
            <TextInput source="instagram" />
            <TextInput source="twitter" />
        </SimpleForm>
    </Edit>
);

export const storeInfoCreate = props => (
       <Create {...props} undoable={false}>
            <SimpleForm>
            <TextInput source="id" />
            <TextInput source="name" />
            <TextInput source="address" />
            <TextInput source="phone" />
            <TextInput source="opening" />
            <TextInput source="email" />
            <TextInput source="about" />
            <TextInput source="facebook" />
            <TextInput source="instagram" />
            <TextInput source="twitter" />
            </SimpleForm>
        </Create>
    );
