import * as React from "react";
import { Create, CreateButton, Datagrid, Edit, EditButton, ExportButton, List, RefreshButton, SimpleForm, TextField, TextInput} from "react-admin";

export const RolesList = (props) => (
    <List {...props} actions={<RoleActionsButtons/>}>
        <Datagrid >
            {/* <TextField source="id" /> */}
            <TextField source="name" />
            <EditButton />
        </Datagrid>
    </List>
);

const RoleActionsButtons = props => (
    <div>
        <RefreshButton {...props}/>
        <ExportButton {...props}/>
        <CreateButton {...props}/>
    </div>
)


export const RoleEdit = props => (
    <Edit undoable={false} {...props}>
        <SimpleForm >
            <TextInput source="id" disabled/>
            <TextInput label="Role" source="name" />
        </SimpleForm>
    </Edit>
);

export const RoleCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput label="Role" source="name" />
        </SimpleForm>
    </Create>
);