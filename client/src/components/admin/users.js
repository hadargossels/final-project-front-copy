import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    BooleanField,
    EmailField,
    EditButton,
    Edit,
    Create,
    SimpleForm,
    SelectInput,
    TextInput,
    BooleanInput,
    Filter
} from 'react-admin';

export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <BooleanField source="active" />
            <TextField source="role" />
            <TextField source="firstName" label="First Name" />
            <TextField source="lastName" label="Last Name" />
            <EmailField source="email" />
            <TextField source="phone" />
            <EditButton />
        </Datagrid>
    </List>
);

export const UserEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput disabled source="email" />
            <SelectInput source="role" choices={[
                { id: 'admin', name: 'admin' },
                { id: 'site-owner', name: 'site-owner' },
                { id: 'client', name: 'client' }
            ]} />
            <TextInput source="firstName" label="First Name" />
            <TextInput source="lastName" label="Last Name" />
            <TextInput source="phone" />
            <BooleanInput source="active" />
            {/* <TextInput source="address.street" label="Street" />
            <NumberInput source="address.houseNumber" label="House Number" />
            <NumberInput source="address.apartmentNumber" label="Apartment Number" />
            <TextInput source="address.city" label="City" />
            <TextInput source="address.country" label="Country" />
            <NumberInput source="address.zipcode" label="Zipcode" /> */}
        </SimpleForm>
    </Edit>
);

export const UserCreate = props => (
    <Create {...props}>
        <SimpleForm>        
            <SelectInput source="role" choices={[
                { id: 'admin', name: 'admin' },
                { id: 'site-owner', name: 'site-owner' },
                { id: 'client', name: 'client' }
            ]} />
            <TextInput source="email" />
            <TextInput source="firstName" label="First Name" />
            <TextInput source="lastName" label="Last Name" />
            <TextInput source="phone" />
            <BooleanInput source="active" />
        </SimpleForm>
    </Create>
);

const UserFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <BooleanInput source="active" />
        <SelectInput source="role" choices={[
                { id: 'admin', name: 'admin' },
                { id: 'site-owner', name: 'site-owner' },
                { id: 'client', name: 'client' }
        ]} />
    </Filter>
);