import * as React from "react";
import { Create, Datagrid, Edit, EditButton, List, SimpleForm, TextField, TextInput, DeleteWithConfirmButton} from "react-admin";
import {MyFilter, ActionsButtons, BulkActionButtons, CustomToolbar} from '../addOns'

export const StatusList = (props) => (
    <List {...props} sort={{ field: 'statusName', order: 'ASC' }} filters={<MyFilter/>} actions={<ActionsButtons/>} bulkActionButtons={<BulkActionButtons/>}>
        <Datagrid >
            <TextField source="statusName" />
            <EditButton />
            <DeleteWithConfirmButton/>
        </Datagrid>
    </List>
);

export const StatusEdit = props => (
    <Edit {...props} undoable={false}>
        <SimpleForm toolbar={<CustomToolbar />}>
            <TextInput source="id" disabled/>
            <TextInput label="Status" source="statusName" />
        </SimpleForm>
    </Edit>
);

export const StatusCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput label="Status" source="statusName" />
        </SimpleForm>
    </Create>
);