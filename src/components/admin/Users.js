

import * as React from "react";
import { List, Datagrid, TextField, EmailField,ReferenceField,EditButton,Edit,Create,SimpleForm,
    ReferenceInput,SelectInput,TextInput, DeleteButton,Filter,BooleanInput,AutocompleteInput   } from 'react-admin';
import MyActiveField from './MyActiveField';
import ActivationButton from './ActivationButton';


export const UserList = props => (
    <List filters={<UserFilter />} {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="firstName" />
            <TextField source="lastName" />
            <EmailField source="email" />
            <TextField source="phone" />
            <TextField source="address.street" />
            <TextField source="address.city" />
            <TextField source="address.type" />
            <TextField source="address.zipcode" />
            <TextField source="roll" />
            <MyActiveField source="active" />
            <EditButton />
            <ActivationButton source="active"/>
        </Datagrid>
    </List>
);

export const UserEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextField source="firstName" />
            <TextField source="lastName" />
            <EmailField source="email" />
            <TextField source="phone" />
            <TextField source="address.street" />
            <TextField source="address.city" />
            <TextField source="address.type" />
            <TextField source="address.zipcode" />
            <BooleanInput label="active" source="active" />
            <AutocompleteInput source="roll" choices={[
                { id: 'user', name: 'User' },
                { id: 'admin', name: 'Admin' },
                { id: 'coustomer', name: 'Coustomer' },
            ]} />
            {/* <ReferenceInput label="Roll" source="roll" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput> */}
                
        </SimpleForm>
    </Edit>
);

export const UserActivation = props => (
    // <Edit {...props}>
        console.log(props)
    // </Edit>
);

export const UserCreate = props => (
        <Create {...props}>
            <SimpleForm>
                <TextInput disabled source="id" />
                <TextInput source="firstName" />
                <TextInput source="lastName" />
                <TextInput source="email" />
                <TextInput source="phone" />
                <TextInput source="address.street" />
                <TextInput source="address.city" />
                <TextInput source="address.type" />
                <TextInput source="address.zipcode" />
                <BooleanInput label="active" source="active" />
                <AutocompleteInput source="roll" choices={[
                    { id: 'user', name: 'User' },
                    { id: 'admin', name: 'Admin' },
                    { id: 'coustomer', name: 'Coustomer' },
                ]} />
                {/* <ReferenceInput label="Roll" source="roll" reference="users">
                    <SelectInput optionText="name" />
                </ReferenceInput> */}
            </SimpleForm>
        </Create>
    );

    const UserFilter = (props) => (
        <Filter {...props}>
            <TextInput label="Search" source="q" alwaysOn />
            <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
                <SelectInput optionText="name" />
            </ReferenceInput>
        </Filter>
    );