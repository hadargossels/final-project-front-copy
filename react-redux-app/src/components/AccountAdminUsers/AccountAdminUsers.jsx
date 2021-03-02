import { Fragment } from 'react';
import { BulkDeleteWithConfirmButton } from 'react-admin';
import { 
    List,
    Datagrid,
    TextField,
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
    RefreshButton
} from 'react-admin';

const UserBulkActionButtons = props => (
    <Fragment>
        <BulkDeleteWithConfirmButton {...props} />
    </Fragment>
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
        <DeleteWithConfirmButton/>
    </Toolbar>
);

export const UserList = props => (
    <List {...props} bulkActionButtons={<UserBulkActionButtons />} >
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField label="First Name" source="fname" />
            <TextField label="Last Name" source="lname" />
            <EmailField source="email" />
            <TextField source="mobile" />
            <TextField source="address" />
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
            <TextInput source="email" validate={[required()]} />
            <TextInput source="mobile" validate={[required()]} />
            <TextInput source="address" validate={[required()]} />
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
        <SimpleForm>
            <TextInput label="First Name" source="fname" validate={[required()]} />
            <TextInput label="Last Name" source="lname" validate={[required()]} />
            <TextInput source="email" validate={[required()]} />
            <TextInput source="mobile" validate={[required()]} />
            <TextInput source="address" validate={[required()]} />
            <SelectInput label="Type" source="type" validate={[required()]} choices={[
                { id: 'Administrator', name: 'Administrator' },
                { id: 'Customer', name: 'Customer' },
                { id: 'Site Owner', name: 'Site Owner' },
            ]}/>
            <BooleanInput source="active" defaultValue={true} disabled/>
        </SimpleForm>
    </Create>
);