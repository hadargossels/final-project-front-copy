import * as React from "react";
// import { useMediaQuery } from '@material-ui/core';

import { List, Datagrid, TextField, EmailField, UrlField,DateField, DeleteButton,EditButton,

      
        Edit,
        Create,
        SimpleForm,
        TextInput
    } from 'react-admin';
export const RoleList = props => (
    <List {...props}>
            <Datagrid>
                <TextField source="id" />
                <TextField source="role" />
                <EditButton basePath="/roles"/>
                <DeleteButton basePath="/roles"/>
            </Datagrid>
    </List>
);


export const RoleEdit = props => (
    <Edit title="Edit Role" {...props}>
        <SimpleForm>
           <TextInput disabled source="id" />
            <TextInput source="role" />
        </SimpleForm>
    </Edit>
);
export const RoleCreate = props => (
    <Create title="Create a Role" {...props}>
        <SimpleForm>
            <TextInput source="role" />
       </SimpleForm>
    </Create>
);