import * as React from "react";
import { useMutation, useTranslate, BooleanInput, required, Create, EditButton, Edit, SimpleForm, TextInput, Filter, SelectInput, List, Datagrid, TextField, EmailField, Toolbar, SaveButton,  BooleanField, NumberField, RefreshButton, ExportButton, CreateButton, useRedirect} from 'react-admin';
import { makeStyles, Chip } from '@material-ui/core';
import {auth, db} from '../../firebase'
import {useAuth} from '../../contexts/AuthContext'


export const UserList = props => (
    <List filters={<UserFilter/>}  actions={<UserActionsButtons/>} bulkActionButtons={false} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="name" label="First name" />
            <TextField source="lastname" label="Last name" />
            <EmailField source="email" />
            <NumberField source="phone"/>
            <TextField label="Address - Street" source="address.street" />
            <TextField label="Address 2" source="address.apt" />
            <TextField label="City" source="address.city" />
            <TextField source="roleId"  />
            <BooleanField source="active"/>
            <EditButton />
        </Datagrid>
    </List>
)

const UserActionsButtons = props => (
    <div>
        <RefreshButton {...props}/>
        <ExportButton {...props}/>
        <CreateButton {...props}/>
    </div>
)

export const UserEdit = props => (
    <Edit {...props} undoable={false} >
        <SimpleForm toolbar={<CustomToolbar />}  redirect="list">
            <TextInput source="id" disabled/>
            <TextInput source="email" type="email" disabled />
            <TextInput label="First name" source="name"/>
            <TextInput label="Last name" source="lastname" />
            <TextInput source="phone"/>
            <SelectInput source="roleId" choices={[
                { id: 'Admin', name: 'Admin' },
                { id: 'Customer', name: 'Customer' },
                { id: 'Site Owner', name: 'Site Owner' },
            ]} />
            <TextInput multiline label="Address - Street" source="address.street" />
            <TextInput multiline label="Address 2 (Apt., etc)" source="address.apt" />
            <TextInput label="City" source="address.city"/>
            <BooleanInput label="Active" source="active"/>
        </SimpleForm>
    </Edit>
)

export const UserCreate = props => {
    const {signup} = useAuth()
    const [mutate] = useMutation();
    const redirect = useRedirect()
    const save = React.useCallback(
        async (values) => {
            console.log(values.address)
            await signup(values.email, "123456")
            await db.child("users").child(auth.currentUser.uid).set(
                {
                    "id":auth.currentUser.uid,
                    "name":values.name,
                    "lastname":values.lastname,
                    "email":values.email,
                    "phone":values.phone||"",
                    "roleId":values.roleId,
                    "address": ! values.address ?
                        ""
                        : {"street":values.address.street||"", "apt":values.address.apt||"", "city":values.address.city||""},
                    "active": values.active
                }
            )
            redirect("/users")
        },
        [mutate],
    );
    
    return(
    <Create {...props} undoable={false}>
        <SimpleForm save={save}>
            <TextInput source="email" type="email"  validate={required()} />
            <TextInput label="First name" source="name" validate={required()}/>
            <TextInput label="Last name" source="lastname" validate={required()} />
            <TextInput source="phone"/>
            <SelectInput source="roleId" defaultValue="Customer" choices={[
                { id: 'Admin', name: 'Admin' },
                { id: 'Customer', name: 'Customer' },
                { id: 'Site Owner', name: 'Site Owner' },
            ]} />
            <TextInput multiline label="Address - Street" source="address.street"/>
            <TextInput multiline label="Address 2 (Apt., etc)" source="address.apt" />
            <TextInput label="City" source="address.city"/>
            <BooleanInput label="Active" source="active" defaultValue={true}/>
        </SimpleForm>
    </Create>
)};


//custom toolbar without an option to delete
const CustomToolbar = props => (
    <Toolbar {...props} classes={useStyles()}>
        <SaveButton />
    </Toolbar>
);

const useStyles = makeStyles({
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
    },
});

//a filter to see only active users
const UserFilter = (props) => (
    <Filter {...props} >
        <TextInput label="Search name" source="q" alwaysOn />
        <QuickFilter source="active" label="Active" defaultValue={true} />
    </Filter>
)

const QuickFilter = ({ label }) => {
    const translate = useTranslate();
    const classes = useQuickFilterStyles();
    return <Chip className={classes.chip} label={translate(label)} />;
};

const useQuickFilterStyles = makeStyles(theme => ({
    chip: {
        marginBottom: theme.spacing(1),
    },
}));
