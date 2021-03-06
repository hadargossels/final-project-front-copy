

import * as React from "react";
import { List, Datagrid, TextField, EmailField,EditButton,Edit,Create,SimpleForm,
    ReferenceInput,SelectInput,TextInput,Filter,BooleanInput,RefreshButton,
    ExportButton,CreateButton } from 'react-admin';
import MyActiveField from './MyActiveField';


const UserActionsButtons = props => (
    <div>
        <RefreshButton />
        <ExportButton />
        <CreateButton />
    </div>
);

export const CouponList = props => (
    <List {...props} filters={<UserFilter/>} >
        <Datagrid>
            <TextField source="id" />
            <TextField source="serialNumber" />
            <TextField source="discountPercentage" />
            <MyActiveField source="used" />
            <MyActiveField source="active" />
            <EditButton />
            {/* <ActivationButton source="active"/> */}
        </Datagrid>
    </List>
);

export const CouponEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="serialNumber" />
            <TextInput source="discountPercentage" />
            <BooleanInput label="used" source="used" />
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

export const CouponCreate = props => (
        <Create {...props}>
            <SimpleForm>
                <TextInput disabled source="id" />
                <TextInput source="serialNumber" />
                <TextInput source="discountPercentage" />
                <BooleanInput label="used" source="used" />
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