import * as React from "react";
import { List, Datagrid, TextField, EmailField,
    ReferenceInput,SelectInput,TextInput,Filter} from 'react-admin';


export const FeedbackList = props => (
    <List {...props} filters={<UserFilter/>} >
        <Datagrid>
            <TextField source="id" />
            <TextField source="titleFeedback" />
            <TextField source="fname" />
            <TextField source="lname" />
            <TextField source="textMessage" />
            <EmailField source="email" />
            <TextField source="date" />
            <TextField source="time" />
        </Datagrid>
    </List>
);

    const UserFilter = (props) => (
        <Filter {...props}>
            <TextInput label="Search" source="q" alwaysOn />
            <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
                <SelectInput optionText="name" />
            </ReferenceInput>
        </Filter>
    );