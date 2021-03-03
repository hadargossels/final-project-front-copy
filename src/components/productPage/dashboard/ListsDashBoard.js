import * as React from "react";
import { List, Datagrid, TextField, EmailField, UrlField , EditButton,   Create,     Toolbar,
    SaveButton,
    DeleteButton,
    Edit,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,} from 'react-admin';
// import MyUrlField from "./myUrlField";
import { makeStyles } from '@material-ui/core/styles';
import { Select } from "@material-ui/core";

const useStyles = makeStyles({
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
    },
});

const CustomToolbar = props => (
    <Toolbar {...props} classes={useStyles()}>
        <SaveButton />
        <DeleteButton undoable={false} />
    </Toolbar>
);

export const MyEditUser = props => (
    <Edit {...props}>
        <SimpleForm>
            {/* <CustomToolbar/> */}
            <TextInput source="role" />
            <TextInput source="username" />
            <TextInput source="email" />
            <TextInput source="active" />
        </SimpleForm>
    </Edit>
)


export const MyNewUser = props => (
    <Create {...props}>
        <SimpleForm>
            {/* <ReferenceInput source="username" reference="data">
                <SelectInput optionText="id" />
            </ReferenceInput> */}
            <TextInput source="id" />
            <TextInput source="email" />
            {/* <TextInput source="active" />
            <TextInput source="name" /> */}
            <TextInput source="username" />
            {/* <TextInput source="phone" /> */}
            <TextInput source="role" />
            {/* <TextInput source="address" /> */}
        </SimpleForm>
    </Create>
)

export const UserList = props =>
     (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            {/* <TextField source="name" /> */}
            <TextField source="username" />
            <EmailField source="email" />
            {/* <TextField source="address" />
            <TextField source="phone" /> */}
            <TextField source="role" />
            {/* <TextField source="active" /> */}
            <EditButton/>
        </Datagrid>
    </List>);

export const ProductsList = props =>
(
<List {...props}>
   <Datagrid rowClick="edit">
       <TextField source="id" />
       <TextField source="name" />
       <TextField source="urlImg" />
       <TextField source="price" />
       <EmailField source="stars" />
       <TextField source="type" />
       <TextField source="onSale" />
       <EditButton/>
   </Datagrid>
</List>);
