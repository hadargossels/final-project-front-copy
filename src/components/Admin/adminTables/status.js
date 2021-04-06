import * as React from "react";
import { Toolbar, SaveButton, Create, Datagrid, Edit, EditButton, List, SimpleForm, TextField, TextInput} from "react-admin";
import {MyFilter, ActionsButtons, BulkActionButtons, useStyles, CustomDeleteButton} from '../addOns'

export const StatusList = (props) => (
    <List {...props} sort={{ field: 'statusName', order: 'ASC' }} filters={<MyFilter/>} actions={<ActionsButtons/>} bulkActionButtons={<BulkActionButtons/>}>
        <Datagrid >
            <TextField source="statusName" />
            <EditButton />
            <CustomDeleteButton basePath="/status" undoable={false} type="Status" field="statusName"/>
        </Datagrid>
    </List>
);

export const StatusEdit = props => (
    <Edit {...props} undoable={false}>
        <SimpleForm toolbar={<StatusToolbar />}>
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

const StatusToolbar = props => (
    <Toolbar {...props} classes={useStyles()}>
        <SaveButton />
        <CustomDeleteButton basePath="/status" undoable={false} type="Status" field="statusName"/>
    </Toolbar>
);