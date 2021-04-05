

import * as React from "react";
import { List, Datagrid, TextField, EmailField,EditButton,Edit,Create,SimpleForm,
    ReferenceInput,SelectInput,TextInput,Filter,BooleanInput,AutocompleteInput,email,required} from 'react-admin';
import MyActiveField from './MyActiveField';


export const UserList = props => (
    
    <List {...props} filters={<UserFilter />} >
        <Datagrid>
            <TextField source="id" />
            <TextField source="firstName" />
            <TextField source="lastName" />
            <EmailField source="email" />
            <TextField source="phone" />
            <TextField source="address.street" label="street"/>
            <TextField source="address.city" label="city"/>
            <TextField source="address.houseType" label="houseType"/>
            <TextField source="address.zipcode" label="zipcode"/>
            <TextField source="role" />
            <MyActiveField source="active" />
            <EditButton />
        </Datagrid>
    </List>
);

export const UserEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="firstName" />
            <TextInput source="lastName" />
            <TextInput source="img" label="image"/>
            <TextInput type="email" source="email" validate={[required(), email()]} />
            <TextInput source="phone" />
            <TextInput source="password" />
            <TextInput source="address.street" label="street"/>
            <TextInput source="address.city" label="city"/>
            <TextInput source="address.houseType" label="houseType"/>
            <TextInput source="address.zipcode" label="zipcode"/>
            <BooleanInput label="active" source="active" defaultValue={true}/>
            <AutocompleteInput source="role" choices={[
                { id: 'user', name: 'User' },
                { id: 'admin', name: 'Admin' },
            ]} />
        </SimpleForm>
    </Edit>
);

export const UserCreate = props => (
        <Create {...props}>
            <SimpleForm>
                <TextInput source="firstName" />
                <TextInput source="lastName" />
                <TextInput source="email" required/>
                <TextInput source="password" required/>
                <TextInput source="phone" />
                <TextInput source="img" label="image"/>
                <TextInput source="address.street" />
                <TextInput source="address.city" />
                <TextInput source="address.houseType" />
                <TextInput source="address.zipcode" />
                <BooleanInput label="active" source="active" defaultValue={true}/>
                <AutocompleteInput source="role" required choices={[
                    { id: 'user', name: 'User' },
                    { id: 'admin', name: 'Admin' },
                ]} />
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

    