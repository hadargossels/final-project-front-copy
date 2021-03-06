

import * as React from "react";
import { List, Datagrid, TextField, EmailField,EditButton,Edit,Create,SimpleForm,
    ReferenceInput,SelectInput,TextInput,Filter,BooleanInput,RefreshButton,
    ExportButton,CreateButton,ImageField,DateInput,DateField,ArrayInput,SimpleFormIterator } from 'react-admin';
import MyActiveField from './MyActiveField';


const UserActionsButtons = props => (
    <div>
        <RefreshButton />
        <ExportButton />
        <CreateButton />
    </div>
);

export const RecipeList = props => (
    <List {...props} filters={<UserFilter/>} >
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <ImageField source="img"/>
            <DateField source="date" />
            <TextField source="description" />
            <MyActiveField source="active" />
            <EditButton />
            {/* <ActivationButton source="active"/> */}
        </Datagrid>
    </List>
);

export const RecipeEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="title" />
            <TextInput source="img" />
            <TextInput source="alt" />
            <DateInput source="date" />
            <TextInput source="description" />
            <ArrayInput source="ingredients">
                <SimpleFormIterator>
                    <TextInput/>
                </SimpleFormIterator>
            </ArrayInput>
            <TextInput source="preparation"/>
            <BooleanInput label="active" source="active" />
            
            {/* <ReferenceInput label="role" source="role" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput> */}
                
        </SimpleForm>
    </Edit>
);

export const UserActivation = props => (
    // <Edit {...props}>
        console.log(props)
    // </Edit>
);

export const RecipeCreate = props => (
        <Create {...props}>
            <SimpleForm>
                <TextInput disabled source="id" />
                <TextInput source="title" />
                <TextInput source="img" />
                <TextInput source="alt" />
                <DateInput source="date" />
                <TextInput source="description" />
                <ArrayInput source="ingredients">
                    <SimpleFormIterator>
                        <TextInput/>
                    </SimpleFormIterator>
                </ArrayInput>
                <TextInput source="preparation"/>
                <BooleanInput label="active" source="active" />
                
                {/* <ReferenceInput label="role" source="role" reference="users">
                    <SelectInput optionText="name" />
                </ReferenceInput> */}
                
            </SimpleForm>
        </Create>
    );

    const UserFilter = (props) => (
        <Filter {...props}>
            <TextInput label="Search" source="q" alwaysOn />
            <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
                <SelectInput optionText="name" />
            </ReferenceInput>
        </Filter>
    );