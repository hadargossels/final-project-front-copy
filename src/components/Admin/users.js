import * as React from "react";
import {BooleanInput, email, required, Create, EditButton, Edit, SimpleForm, TextInput, ReferenceInput, Filter, SelectInput, ReferenceField, List, Datagrid, TextField, EmailField, Toolbar, SaveButton, DeleteWithConfirmButton, BooleanField} from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import { BulkDeleteWithConfirmButton } from 'react-admin';

const validateEmail = email();

export const UserList = props => (
    <List filters={<UserFilter/>}  bulkActionButtons={<UserBulkActionButtons />} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <ReferenceField source="roleId" reference="roles">
               <TextField source="name" />
            </ReferenceField>
            <TextField source="name" />
            <EmailField source="email" />
            <TextField label="Address" source="address.street" />
            <BooleanField source="active"/>
            <EditButton />
        </Datagrid>
    </List>
)

export const UserEdit = props => (
    <Edit {...props} undoable={false}>
        <SimpleForm validate={validateUserCreation} toolbar={<CustomToolbar />}>
            <TextInput source="id" disabled/>
            <TextInput source="name" />
            <ReferenceInput source="roleId" reference="roles" >
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="email" type="email" validate={validateEmail} />
            <TextInput multiline source="address.street" validate={required()}/>
            <BooleanInput label="Active" source="active"/>
        </SimpleForm>
    </Edit>
);


export const UserCreate = props => (
    <Create {...props}>
        <SimpleForm validate={validateUserCreation}>
            <TextInput source="name" />
            <ReferenceInput source="roleId" reference="roles" >
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="email" type="email" validate={validateEmail}/>
            <TextInput label="Address" multiline source="address.street"/>
            <BooleanInput label="Active" source="active" defaultValue={true}/>
        </SimpleForm>
    </Create>
);

const validateUserCreation = (values) => {
    const errors = {};
    if (!values.name) {
        errors.name = ['filling name is required'];
    }
    if (!values.roleId) {
        errors.roleId = ['choosing a role is required'];
    }
    if (!values.email) {
        errors.email = ['filling email is required'];
    }
    return errors
};

const CustomToolbar = props => (
    <Toolbar {...props} classes={useStyles()}>
        <SaveButton />
        <DeleteWithConfirmButton />
    </Toolbar>
);

const useStyles = makeStyles({
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
    },
});

const UserBulkActionButtons = props => (
    <React.Fragment>
        <BulkDeleteWithConfirmButton {...props} />
    </React.Fragment>
);

const UserFilter = (props) => (
    <Filter {...props} >
        <TextInput label="Search..." source="q" alwaysOn />
        <ReferenceInput label="Role" source="roleId" reference="roles" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
)
