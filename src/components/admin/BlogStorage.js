
import * as React from "react";
import { List, Datagrid, TextField, EmailField,SimpleForm,
    ReferenceInput,SelectInput,TextInput,Filter,BooleanInput,RefreshButton,
    ExportButton,CreateButton,ImageField,DateField,ArrayInput,SimpleFormIterator } from 'react-admin';
import MyActiveField from './MyActiveField';


const UserActionsButtons = props => (
    <div>
        <RefreshButton />
        <ExportButton />
        <CreateButton />
    </div>
);

export const BlogStorageList = props => (
    <List {...props} filters={<UserFilter/>} >
        <Datagrid>
            <TextField source="id" />
            <TextField source="titleBlog" />
            <TextField source="fname" />
            <TextField source="lname" />
            <TextField source="textMassege" />
            <EmailField source="mail" />
            <TextField source="date" />
            <TextField source="time" />
            {/* <ActivationButton source="active"/> */}
        </Datagrid>
    </List>
);

export const UserActivation = props => (
    // <Edit {...props}>
        console.log(props)
    // </Edit>
);

    const UserFilter = (props) => (
        <Filter {...props}>
            <TextInput label="Search" source="q" alwaysOn />
            <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
                <SelectInput optionText="name" />
            </ReferenceInput>
        </Filter>
    );