

import * as React from "react";
import { List, Datagrid, TextField,EditButton,Edit,Create,SimpleForm,
    ReferenceInput,SelectInput,TextInput,Filter,BooleanInput} from 'react-admin';
import MyActiveField from './MyActiveField';



export const CouponList = props => (
    <List {...props} filters={<UserFilter/>} >
        <Datagrid>
            <TextField source="id" />
            <TextField source="serialNumber" />
            <TextField source="discountPercentage" />
            <MyActiveField source="active" />
            <EditButton />
        </Datagrid>
    </List>
);

export const CouponEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="serialNumber" />
            <TextInput source="discountPercentage" />
            <BooleanInput label="active" source="active" />
        </SimpleForm>
    </Edit>
);

export const CouponCreate = props => (
        <Create {...props}>
            <SimpleForm>
                <TextInput disabled source="id" />
                <TextInput source="serialNumber" />
                <TextInput source="discountPercentage" />
                <BooleanInput label="active" source="active" defaultValue={true}/>
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