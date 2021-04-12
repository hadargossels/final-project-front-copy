import * as React from "react";
import { Create, required,regex, Datagrid, Edit, EditButton, List,  SimpleForm, TextField, TextInput,  DeleteWithConfirmButton} from "react-admin";
import {MyFilter, ActionsButtons, BulkActionButtons, CustomToolbar} from './OptionsBar'
const validateCoupon = [required(),regex(/^[1-9][0-9]?$|^50$/, 
    'Must be a number between 0-50%')];
export const CouponsList = (props) => (
    <List {...props} filters={<MyFilter/>} actions={<ActionsButtons/>} bulkActionButtons={<BulkActionButtons/>}>
        <Datagrid >
            <TextField source="id" />
            <TextField source="couponSize" />
            <EditButton />
            <DeleteWithConfirmButton/>
        </Datagrid>
    </List>
);

export const CouponEdit = props => (
    <Edit {...props} undoable={false} >
        <SimpleForm toolbar={<CustomToolbar />}>
            <TextInput validate={validateCoupon} source="couponSize" />
        </SimpleForm>
    </Edit>
);

export const CouponCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput validate={validateCoupon} source="couponSize" />
        </SimpleForm>
    </Create>
);