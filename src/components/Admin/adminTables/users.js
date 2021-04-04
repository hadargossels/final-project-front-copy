import * as React from "react";
import { ReferenceInput, BooleanInput, required, Create, EditButton, Edit, SimpleForm, TextInput, SelectInput, List, Datagrid, TextField, EmailField, Toolbar, SaveButton,  BooleanField, NumberField, PasswordInput } from 'react-admin';

import {useStyles, MyFilter, ActionsButtons} from '../addOns'


export const UserList = props => (
    <List {...props} filters={<MyFilter/>} sort={{ field: 'name', order: 'ASC' }}  actions={<ActionsButtons/>} bulkActionButtons={false}>
        <Datagrid >
            <TextField source="name" label="First name" />
            <TextField source="lastname" label="Last name" />
            <EmailField source="email" />
            <NumberField source="phone"/>
            <TextField label="Role" source="role"  />
            <BooleanField source="active"/>
            <EditButton />
        </Datagrid>
    </List>
)

export const UserEdit = props => (
    <Edit {...props} undoable={false} >
        <SimpleForm toolbar={<CustomToolbar />}>
            <TextInput source="id" disabled/>
            <TextInput source="email" type="email" />
            <PasswordInput source="password" validate={required()} />
            <TextInput label="First name" source="name"/>
            <TextInput label="Last name" source="lastname" />
            <TextInput source="phone"/>
            <ReferenceInput source="role" reference="roles">
                <SelectInput optionText="roleName" />
            </ReferenceInput>
            <TextInput multiline label="Address - Street" source="address.street" />
            <TextInput multiline label="Address 2 (Apt., etc)" source="address.apt" />
            <TextInput label="City" source="address.city"/>
            <BooleanInput source="active"/>
        </SimpleForm>
    </Edit>
)

export const UserCreate = props => (
    <Create {...props} >
        <SimpleForm>
           <TextInput source="email" type="email" validate={required()} />
           <PasswordInput source="password" validate={required()} />
           <TextInput label="First name" source="name" validate={required()}/>
            <TextInput label="Last name" source="lastname" validate={required()} />
            <TextInput source="phone"/>
            <ReferenceInput source="role" reference="roles">
                <SelectInput optionText="roleName"/>
            </ReferenceInput>
            <TextInput multiline label="Address - Street" source="address.street"/>
            <TextInput multiline label="Address 2 (Apt., etc)" source="address.apt" />
            <TextInput label="City" source="address.city"/>
            <BooleanInput label="Active" source="active" defaultValue={true}/>
        </SimpleForm>
    </Create>
)

//custom toolbar without an option to delete
const CustomToolbar = props => (
    <Toolbar {...props} classes={useStyles()}>
        <SaveButton />
    </Toolbar>
);