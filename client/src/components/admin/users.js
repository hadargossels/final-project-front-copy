import * as React from "react";
import DeleteWithCustomConfirmButton from 'ra-delete-with-custom-confirm-button';
import Delete from '@material-ui/icons/Delete';
import ErrorOutline from '@material-ui/icons/ErrorOutline';
import { auth, firebasedb } from '../../firebase';
import {
    required,
    minLength,
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
    Filter,
    SimpleShowLayout,
    PasswordInput
} from 'react-admin';

const roleOptions = [
    { id: 'admin', name: 'admin' },
    { id: 'site-owner', name: 'site-owner' },
    { id: 'client', name: 'client' }
]

const UserCreateAuth = (data) => (
    auth.createUserWithEmailAndPassword(data.email, data.password)
    .then(async (userCredential) => {
        // Signed in 
        let user = userCredential.user;
        firebasedb.ref('users').child(user.uid).set({
            "id": user.uid,
            "active": true,
            "email": data.email,
            "firstName": data.firstName,
            "lastName": data.lastName,
            "phone": data.phone,
            "role": data.role
        })
    })
    .catch((error) => {
        window.alert(error.message);
    })
)

const DeleteConfirmTitle = 'Are you sure you want to delete this user?';

const DeleteConfirmContent = (props) => {
    return (
      <SimpleShowLayout {...props} >
        <TextField source="id" />
        <TextField source="role" />
        <TextField source="firstName" />
        <TextField source="lastName" />
        <TextField source="email" />
      </SimpleShowLayout>
    );
};

export const UserList = props => (
    <List filters={<UserFilter />} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <BooleanField source="active" />
            <TextField source="role" />
            <TextField source="firstName" label="First Name" />
            <TextField source="lastName" label="Last Name" />
            <EmailField source="email" />
            <TextField source="phone" />
            <EditButton />
            <DeleteWithCustomConfirmButton
                title={DeleteConfirmTitle}      // your custom title of delete confirm dialog
                content={DeleteConfirmContent}  // your custom contents of delete confirm dialog
                confirmColor='warning'          // color of delete button ('warning' or 'primary', default: 'warning')
                ConfirmIcon={Delete}            // icon of delete button (default: 'Delete')
                cancel='Cancel'                 // label of cancel button (default: 'Cancel')
                CancelIcon={ErrorOutline}       // icon of cancel button (default: 'ErrorOutline')
                undoable={true}                 // undoable (default: true)
            />
        </Datagrid>
    </List>
);

export const UserEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="email" disabled />
            <SelectInput source="role" choices={roleOptions} />
            <TextInput source="firstName" label="First Name" validate={[required()]} />
            <TextInput source="lastName" label="Last Name" validate={[required()]} />
            <TextInput source="phone" validate={[required()]} />
            <BooleanInput source="active" />
        </SimpleForm>
    </Edit>
);

export const UserCreate = props => (
    <Create {...props}>
        <SimpleForm save={(data) => UserCreateAuth(data)} redirect="list">
            <SelectInput source="role" choices={roleOptions} validate={[required()]} />
            <TextInput source="email" validate={[required()]} />
            <TextInput source="firstName" label="First Name" validate={[required()]} />
            <TextInput source="lastName" label="Last Name" validate={[required()] }/>
            <TextInput source="phone" validate={[required()]} />
            <PasswordInput source="password" label="Password" validate={[required(), minLength(6)] } />
            <BooleanInput source="active" defaultValue={true} />
        </SimpleForm>
    </Create>
);

const UserFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <BooleanInput source="active" />
        <SelectInput source="role" choices={roleOptions} />
    </Filter>
);