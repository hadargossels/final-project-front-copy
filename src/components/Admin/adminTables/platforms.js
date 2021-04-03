import * as React from "react";
import { Create, Datagrid, Edit, EditButton, List, SimpleForm, TextField, TextInput, DeleteWithConfirmButton} from "react-admin";
import {MyFilter, ActionsButtons, BulkActionButtons, CustomToolbar} from '../addOns'

export const PlatformsList = (props) => (
    <List {...props} sort={{ field: 'platformName', order: 'ASC' }} filters={<MyFilter/>} actions={<ActionsButtons/>} bulkActionButtons={<BulkActionButtons/>}>
        <Datagrid >
            <TextField source="platformName" />
            <EditButton />
            <DeleteWithConfirmButton/>
        </Datagrid>
    </List>
);

export const PlatformEdit = props => (
    <Edit {...props} undoable={false}>
        <SimpleForm toolbar={<CustomToolbar />}>
            <TextInput source="id" disabled/>
            <TextInput label="Platform" source="platformName" />
        </SimpleForm>
    </Edit>
);

export const PlatformCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput label="Platform" source="platformName" />
        </SimpleForm>
    </Create>
);