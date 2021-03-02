import * as React from "react";
import {
    Filter,
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
    BulkDeleteWithConfirmButton,
    Toolbar,
    SaveButton,
    DeleteWithConfirmButton,
    required,
    ReferenceField,
    BooleanInput
} from 'react-admin';
import MyUrlField from './MyUrlField';
import { Fragment } from 'react';

const UserBulkActionButtons = props => (
    <Fragment>
        <BulkDeleteWithConfirmButton {...props} />
    </Fragment>
);

const UserEditToolbar = props => (
    <Toolbar {...props} >
        <SaveButton />
        <DeleteWithConfirmButton/>
    </Toolbar>
);

const UserName = ({ record }) => {
    return <span>User {record ? `"${record.name}"` : ''}</span>;
};

const UserFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

export const UserList = props => (
    <List filters={<UserFilter />} bulkActionButtons={<UserBulkActionButtons />} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="phone" />
            <MyUrlField source="website" />
            <ReferenceField source="roleId" reference="roles">
                <TextField source="title" />
            </ReferenceField>
            <TextField source="active" />
            <EditButton />
        </Datagrid>
    </List>
);

export const UserEdit = props => (
    <Edit title={<UserName />} {...props}>
        <SimpleForm toolbar={<UserEditToolbar />}>
            <SelectInput disabled source="id" />
            <TextInput source="name" validate={[required()]}/>
            <TextInput source="email" validate={[required()]}/>
            <TextInput source="phone" validate={[required()]}/>
            <TextInput source="website" />
            <ReferenceInput source="roleId" reference="roles">
                <SelectInput optionText="title" defaultValue={"Customer"}/>
            </ReferenceInput>
            <BooleanInput label="Active" source="active"/>
        </SimpleForm>
    </Edit>
);

export const UserCreate = props => (
    <Create {...props}>
         <SimpleForm>
             <TextInput source="name" validate={[required()]}/>
            <TextInput source="email" validate={[required()]}/>
            <TextInput source="phone" validate={[required()]}/>
            <TextInput source="website" />
            <ReferenceInput source="roleId" reference="roles" validate={[required()]}>
                <SelectInput optionText="title" />
            </ReferenceInput>
            <BooleanInput label="Active" source="active" defaultValue={true}/>
         </SimpleForm>
     </Create>
 );