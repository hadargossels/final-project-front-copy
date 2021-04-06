import * as React from "react";
import { Toolbar, SaveButton, Create, Datagrid, Edit, EditButton, List, SimpleForm, TextField, TextInput} from "react-admin";
import {MyFilter, ActionsButtons, BulkActionButtons, useStyles, CustomDeleteButton} from '../addOns'

export const RolesList = (props) => (
    <List {...props} sort={{ field: 'roleName', order: 'ASC' }} filters={<MyFilter/>} actions={<ActionsButtons/>} bulkActionButtons={<BulkActionButtons/>}>
        <Datagrid >
            <TextField source="roleName" />
            <EditButton />
            <CustomDeleteButton basePath="/roles" undoable={false} type="Role" field="roleName" />
        </Datagrid>
    </List>
);

export const RoleEdit = props => (
    <Edit {...props} undoable={false} >
        <SimpleForm toolbar={<RoleCustomToolbar />}>
            <TextInput source="id" disabled/>
            <TextInput label="Role" source="roleName" />
        </SimpleForm>
    </Edit>
);

export const RoleCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput label="Role" source="roleName" />
        </SimpleForm>
    </Create>
);

const RoleCustomToolbar = props => (
    <Toolbar {...props} classes={useStyles()}>
        <SaveButton />
        <CustomDeleteButton basePath="/roles" undoable={false} type="Role" field="roleName"/>
    </Toolbar>
);