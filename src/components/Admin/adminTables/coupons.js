import * as React from "react";
import { Create,  Datagrid, Edit, EditButton, List,  SimpleForm, TextField, TextInput,  DeleteWithConfirmButton} from "react-admin";
import {MyFilter, ActionsButtons, BulkActionButtons, CustomToolbar} from '../addOns'

export const CouponsList = (props) => (
    <List {...props} sort={{ field: 'couponName', order: 'ASC' }} filters={<MyFilter/>} actions={<ActionsButtons/>} bulkActionButtons={<BulkActionButtons/>}>
        <Datagrid >
            <TextField source="couponName" />
            <TextField source="couponSize" />
            <EditButton />
            <DeleteWithConfirmButton/>
        </Datagrid>
    </List>
);

export const CouponEdit = props => (
    <Edit {...props} undoable={false}>
        <SimpleForm toolbar={<CustomToolbar />}>
            <TextInput source="id" disabled/>
            <TextInput source="couponName" />
            <TextInput source="couponSize" />
        </SimpleForm>
    </Edit>
);

export const CouponCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="couponName" />
            <TextInput source="couponSize" />
        </SimpleForm>
    </Create>
);