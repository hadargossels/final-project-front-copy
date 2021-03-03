import * as React from "react";
import { useTranslate, BooleanInput, email, required, Create, EditButton, Edit, SimpleForm, TextInput, Filter, SelectInput, List, Datagrid, TextField, EmailField, Toolbar, SaveButton,  BooleanField, NumberField, DeleteWithConfirmButton, RefreshButton, ExportButton, CreateButton, FilterButton, FilterButtonMenuItem} from 'react-admin';
import { makeStyles, Chip } from '@material-ui/core';

const validateEmail = email();

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
            <TextField source="roleId" label="Role" />
            <BooleanField source="active"/>
            <EditButton />
        </Datagrid>
    </List>
)

const UserActionsButtons = props => (
    <div>
        <RefreshButton {...props}/>
        <ExportButton {...props}/>
    </div>
)

export const UserEdit = props => (
    <Edit {...props} undoable={false}>
        <SimpleForm validate={validateUserCreation} toolbar={<CustomToolbar />}>
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
            <TextInput multiline label="Address - Street" source="address.street" validate={required()}/>
            <TextInput multiline label="Address 2 (Apt., etc)" source="address.apt" validate={required()}/>
            <TextInput label="City" source="address.city"/>
            <BooleanInput label="Active" source="active"/>
        </SimpleForm>
    </Edit>
);

// export const UserCreate = props => (
//     <Create {...props} undoable={false}>
//         <SimpleForm >
//             <TextInput source="email" type="email" />
//             <TextInput label="First name" source="name"/>
//             <TextInput label="Last name" source="lastname" />
//             <TextInput source="phone"/>
//             <SelectInput source="roleId" choices={[
//                 { id: 'Admin', name: 'Admin' },
//                 { id: 'Customer', name: 'Customer' },
//                 { id: 'Site Owner', name: 'Site Owner' },
//             ]} />
//             <TextInput multiline label="Address - Street" source="address.street" validate={required()}/>
//             <TextInput multiline label="Address 2 (Apt., etc)" source="address.apt" validate={required()}/>
//             <TextInput label="City" source="address.city"/>
//             <BooleanInput label="Active" source="active" defaultValue={true}/>
//         </SimpleForm>
//     </Create>
// );



const validateUserCreation = (values) => {
    const errors = {};
    if (!values.name) {
        errors.name = ['filling name is required'];
    }
    if (!values.lastname) {
        errors.lastname = ['filling last name is required'];
    }
    if (!values.email) {
        errors.email = ['filling email is required'];
    }
    return errors
};

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
