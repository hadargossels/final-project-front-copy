import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    EmailField,
    EditButton,
    Edit,
    Create,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
    Filter,
    AutocompleteInput,
    PasswordInput,
    BooleanInput
} from 'react-admin';
import MyTextField from './MyTextField';

export const UserEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" />
            <AutocompleteInput source="roll" choices={[
                { id: 'Admin', name: 'Admin' },
                { id: 'User', name: 'User' },
                { id: 'Coustomer', name: 'Coustomer' },
            ]} />
            <TextInput source="email" />
            <TextInput source="phone" />
            <PasswordInput source="password" />
            <BooleanInput label="active" source="active" />
        </SimpleForm>
    </Edit>
);

export const UserCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <AutocompleteInput source="roll" choices={[
                { id: 'Administrator', name: 'Administrator' },
                { id: 'Site Owner', name: 'Site Owner' },
                { id: 'Coustomer', name: 'Coustomer' },
            ]} />
            <TextInput source="email" />
            <TextInput source="phone" />
        </SimpleForm>
    </Create>
);

const UserFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="id" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

export const UserList = props => (
    <List filters={<UserFilter />} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="roll" />
            <MyTextField source="active" />
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="address.country" />
            <TextField source="phone" />
            <EditButton />
        </Datagrid>
    </List>
);