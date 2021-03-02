import * as React from "react";
import { Datagrid, Edit, EditButton, List, SimpleForm, TextField, TextInput} from "react-admin";

export const RolesList = (props) => (
    <List {...props}>
        <Datagrid >
            <TextField source="id" />
            <TextField source="name" />
            <EditButton />
        </Datagrid>
    </List>
);

export const RoleEdit = props => (
    <Edit {...props}>
        <SimpleForm >
            <TextInput source="id" disabled/>
            <TextInput label="Role" source="name" />
        </SimpleForm>
    </Edit>
);

// export const RoleCreate = props => (
//     <Create {...props}>
//         <SimpleForm>
//             <TextInput label="Role" source="name" />
//         </SimpleForm>
//     </Create>
// );