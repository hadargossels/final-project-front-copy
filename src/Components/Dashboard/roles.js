import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    EditButton,
    Edit,
    Create,
    SimpleForm,
    SelectInput,
    TextInput,
    BulkDeleteWithConfirmButton,
    Toolbar,
    SaveButton,
    DeleteWithConfirmButton,
    required,
} from 'react-admin';
import { Fragment } from 'react';

const RoleBulkActionButtons = props => (
    <Fragment>
        <BulkDeleteWithConfirmButton {...props} />
    </Fragment>
);

const RoleTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

const RoleEditToolbar = props => (
    <Toolbar {...props} >
        <SaveButton />
        <DeleteWithConfirmButton/>
    </Toolbar>
);

export const RoleList = props => (
    <List bulkActionButtons={<RoleBulkActionButtons />} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="title" />
            <EditButton />
        </Datagrid>
    </List>
);

export const RoleCreate = props => (
    <Create {...props}>
         <SimpleForm>
            <TextInput source="title" validate={[required()]}/>
         </SimpleForm>
     </Create>
 );

 export const RoleEdit = props => (
    <Edit title={<RoleTitle />} {...props}>
        <SimpleForm toaolbar={<RoleEditToolbar />}>
            <SelectInput disabled source="id" />
            <TextInput source="title" validate={[required()]}/>
        </SimpleForm>
    </Edit>
);