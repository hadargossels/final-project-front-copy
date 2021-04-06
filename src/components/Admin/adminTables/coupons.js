import * as React from "react";
import { Toolbar, SaveButton, Create,  Datagrid, Edit, EditButton, List,  SimpleForm, TextField, TextInput} from "react-admin";
import {MyFilter, ActionsButtons, BulkActionButtons, useStyles, CustomDeleteButton} from '../addOns'

export const CouponsList = (props) => (
    <List {...props} sort={{ field: 'couponName', order: 'ASC' }} filters={<MyFilter/>} actions={<ActionsButtons/>} bulkActionButtons={<BulkActionButtons/>}>
        <Datagrid >
            <TextField source="couponName" />
            <TextField source="couponSize" />
            <EditButton />
            <CustomDeleteButton basePath="/coupons" undoable={false} type="Coupon" field="couponName" />
        </Datagrid>
    </List>
);

export const CouponEdit = props => (
    <Edit {...props} undoable={false}>
        <SimpleForm toolbar={<CouponCustomToolbar />}>
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

const CouponCustomToolbar = props => (
    <Toolbar {...props} classes={useStyles()}>
        <SaveButton />
        <CustomDeleteButton basePath="/coupons" undoable={false} type="Coupon" field="couponName"/>
    </Toolbar>
);