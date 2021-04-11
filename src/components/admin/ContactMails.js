import * as React from "react";
import { List, Datagrid, TextField, EmailField,SimpleForm,Edit,EditButton,
    ReferenceInput,SelectInput,TextInput,Filter,BooleanInput} from 'react-admin';
import MyActiveField from './MyActiveField';


export const contactMailList = props => (
    <List {...props} filters={<UserFilter/>} >
        <Datagrid>
            <TextField source="id" />
            <TextField source="fname" label="First name"/>
            <TextField source="lname" label="last name"/>
            <EmailField source="from" />
            <TextField source="phone" />
            <TextField source="city" />
            <TextField source="address" label="street"/>
            <TextField source="text" label="textMessage"/>
            <MyActiveField source="answer" />
            <EditButton />
        </Datagrid>
    </List>
);
export const contactMailEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <BooleanInput label="answer" source="answer" />
        </SimpleForm>
    </Edit>
);

    const UserFilter = (props) => (
        <Filter {...props}>
            <TextInput label="Search" source="q" alwaysOn />
            <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
                <SelectInput optionText="name" />
            </ReferenceInput>
        </Filter>
    );