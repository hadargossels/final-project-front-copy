import * as React from "react";
import { Toolbar, SaveButton, Create, Datagrid, Edit, EditButton, List, SimpleForm, TextField, TextInput} from "react-admin";
import {MyFilter, ActionsButtons, BulkActionButtons, CustomDeleteButton, useStyles} from '../addOns'

export const PlatformsList = (props) => (
    <List {...props} sort={{ field: 'platformName', order: 'ASC' }} filters={<MyFilter/>} actions={<ActionsButtons/>} bulkActionButtons={<BulkActionButtons/>}>
        <Datagrid >
            <TextField source="platformName" />
            <EditButton />
            <CustomDeleteButton basePath="/platforms" undoable={false} type="Platform" field="platformName"/>
        </Datagrid>
    </List>
);

export const PlatformEdit = props => (
    <Edit {...props} undoable={false}>
        <SimpleForm toolbar={<PlatformToolbar />}>
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


const PlatformToolbar = props => (
    <Toolbar {...props} classes={useStyles()}>
        <SaveButton />
        <CustomDeleteButton basePath="/platforms" undoable={false} type="Platform" field="platformName"/>
    </Toolbar>
);