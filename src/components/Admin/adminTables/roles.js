import * as React from "react";
import { Create, Datagrid, Edit, EditButton, List, SimpleForm, TextField, TextInput, DeleteWithConfirmButton} from "react-admin";
import {MyFilter, ActionsButtons, BulkActionButtons, CustomToolbar} from '../addOns'

export const RolesList = (props) => (
    <List {...props} sort={{ field: 'roleName', order: 'ASC' }} filters={<MyFilter/>} actions={<ActionsButtons/>} bulkActionButtons={<BulkActionButtons/>}>
        <Datagrid >
            <TextField source="roleName" />
            <EditButton />
            <DeleteWithConfirmButton/>
        </Datagrid>
    </List>
);

export const RoleEdit = props => (
    <Edit {...props} undoable={false}>
        <SimpleForm toolbar={<CustomToolbar />}>
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