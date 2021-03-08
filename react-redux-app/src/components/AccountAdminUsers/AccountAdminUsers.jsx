import { Fragment } from 'react';
import { BulkDeleteWithConfirmButton } from 'react-admin';
import { auth, db } from '../../js/firebase';
import firebase from 'firebase/app';
import 'firebase/auth';
import { 
    List,
    Datagrid,
    TextField,
    NumberField,
    EmailField,
    EditButton,
    DeleteWithConfirmButton,
    Edit,
    SimpleForm,
    TextInput,
    Create,
    required,
    Toolbar,
    SaveButton,
    BooleanInput,
    SelectInput,
    NumberInput,
    RefreshButton,
    ExportButton,
    email,
    BooleanField,
    Filter,
    CreateButton,
    Show,
    SimpleShowLayout
} from 'react-admin';

const UserBulkActionButtons = props => (
    <Fragment>
        {/* <BulkDeleteWithConfirmButton {...props} /> */}
    </Fragment>
);

const UserActionsButtons = props => (
    <div>
        <RefreshButton {...props}/>
        <CreateButton {...props} />
        <ExportButton {...props}/>
    </div>
);

const MyActiveField = ({ record = {}, source }) => {
    return (
        <>
            {record[source] ? <span style={{color: "green"}}>Yes</span> : <span style={{color: "red"}}>No</span>}
        </>
    );
}

const UserTitle = ({ record }) => {
    return <span>{record ? `User "${record.name}"` : ''}</span>;
}

const UserEditToolbar = props => (
    <Toolbar {...props} >
        <SaveButton />
        {/* <DeleteWithConfirmButton/> */}
    </Toolbar>
);

const UserFilter = props => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

const UserCreateAuth = (props, data, password) => (

    auth().createUserWithEmailAndPassword(data.email, password)

    .then(async (userCredential) => {
        // Signed in 
        let user = userCredential.user;
        //this.setState({redirect: true})

        db.child("users").child(user.uid).set({

            "id": user.uid,
            "active": true,
            "address": data.address,
            "email": data.email,
            "fname": data.fname,
            "lname": data.lname,
            "mobile": data.mobile,
            "city": data.city,
            "country": data.country,
            "type": data.type
    })

    }).then(() => {
        auth().signOut(); 
        // auth().signInWithEmailAndPassword("a@a.com", "123456");
        //props.history.push("/account/admin#/users");
    })

    .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        //alert(errorCode.split("auth/")[1] + ": " + errorMessage)
        window.alert(errorMessage);
    })
);

const UserPanel  = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField label="First Name" source="fname" />
            <TextField label="Last Name" source="lname" />
            <EmailField source="email" />
            <TextField source="mobile" />
            <TextField source="address" />
            <TextField source="city" />
            <TextField source="country" />
            <TextField source="type" />
            <MyActiveField source="active" />
        </SimpleShowLayout>
    </Show>
);

export const UserList = props => (
    <List {...props} filters={<UserFilter/>} actions={<UserActionsButtons/>} bulkActionButtons={<UserBulkActionButtons />} >
        <Datagrid rowClick="expand" expand={<UserPanel />}>
            {/* <TextField source="id" /> */}
            <TextField label="First Name" source="fname" />
            <TextField label="Last Name" source="lname" />
            <EmailField source="email" />
            <TextField source="mobile" />
            <TextField source="address" />
            <TextField source="city" />
            <TextField source="country" />
            <TextField source="type" />
            <MyActiveField source="active" />
            <EditButton />
        </Datagrid>
    </List>
);

export const UserEdit = props => (
    <Edit {...props} title={<UserTitle />} undoable={false}>
        <SimpleForm toolbar={<UserEditToolbar />}>
            <TextInput disabled source="id" />
            <TextInput label="First Name" source="fname" validate={[required()]} />
            <TextInput label="Last Name" source="lname" validate={[required()]} />
            <TextInput disabled type="email" source="email" validate={[required(), email()]} />
            <TextInput source="mobile" validate={[required()]} />
            <TextInput source="address" validate={[required()]} />
            <TextInput source="city" validate={[required()]} />
            <TextInput source="country" validate={[required()]} />
            <SelectInput label="Type" source="type" validate={[required()]} choices={[
                { id: 'Administrator', name: 'Administrator' },
                { id: 'Customer', name: 'Customer' },
                { id: 'Site Owner', name: 'Site Owner' },
            ]}/>
            <BooleanInput label="Active" source="active"/>
        </SimpleForm>
    </Edit>
);

export const UserCreate = props => (
    <Create {...props}>
        <SimpleForm save={(data) => UserCreateAuth(props ,data, "111111")} >
            <TextInput label="First Name" source="fname" validate={[required()]} />
            <TextInput label="Last Name" source="lname" validate={[required()]} />
            <TextInput type="email" source="email" validate={[required(), email()]} />
            <TextInput source="mobile" validate={[required()]} />
            <TextInput source="address" validate={[required()]} />
            <TextInput source="city" validate={[required()]} />
            <TextInput source="country" validate={[required()]} />
            <SelectInput label="Type" source="type" validate={[required()]} choices={[
                { id: 'Administrator', name: 'Administrator' },
                { id: 'Customer', name: 'Customer' },
                { id: 'Site Owner', name: 'Site Owner' },
            ]}/>
            <BooleanInput source="active" defaultValue={true} disabled/>
        </SimpleForm>
    </Create>
);