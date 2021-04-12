

import * as React from "react";
import { List, Datagrid, TextField, EmailField,EditButton,Edit,ReferenceInput,
    SelectInput,TabbedForm,FormTab,ArrayField,ImageField} from 'react-admin';

import {MyFilter, ActionsButtons, BulkActionButtons, CustomToolbar} from './OptionsBar'


export const OrderList = props => (
    <List {...props} filters={<MyFilter/>} actions={<ActionsButtons/>} bulkActionButtons={<BulkActionButtons/>}>
        <Datagrid >
            <TextField source="id" label="order id"/>
            <TextField source="userOrder.firstName" label="first name"/>
            <TextField source="userOrder.lastName" label="last name"/>
            <EmailField source="userOrder.email" label="email"/>
            <TextField source="userOrder.phone" label="phone"/>
            <TextField source="orderStatus"/>
            <TextField source="date" label="date"/>
            <TextField source="time" label="time"/>
            <TextField source="payment" label="payment"/> 
            <TextField source="specialReq" label="specialReq"/>
            <EditButton />
        </Datagrid>
    </List>
);

export const OrderEdit = props => {
    return(
        <Edit {...props} toolbar={<CustomToolbar />}>
            <TabbedForm>

                <FormTab label="cart">
                    <ArrayField source="cart">
                        <Datagrid >
                            <TextField source="_id" label="productID"/>
                            <TextField source="title" label="title"/>
                            <ImageField source="img" label="image"/>
                            <TextField source="count" label="count"/>
                            <TextField source="price" label="price"/>
                        </Datagrid>
                    </ArrayField>
                </FormTab>

                <FormTab label="user order">

                    <TextField source="userOrder.firstName" label="first name"/>
                    <TextField source="userOrder.lastName" label="last name"/>
                    <EmailField source="userOrder.email" label="email"/>
                    <TextField source="userOrder.phone" label="phone"/>
                    <TextField source="userOrder.city" label="city"/>
                    <TextField source="userOrder.street" label="street"/>
                    <TextField source="userOrder.zip" label="zip"/>
                    
                </FormTab>
                <FormTab label="order details">

                    <TextField source="date" label="date"/>
                    <TextField source="time" label="time"/>
                    <TextField source="payment" />
                    <SelectInput  source="orderStatus" choices={[
                        { id: 'Processing', name: 'Processing' },
                        { id: 'Ready', name: 'Ready' },
                        { id: 'Delivered', name: 'Delivered' },
                        ]} />  
                    
                </FormTab>

            </TabbedForm>
        </Edit>
    );
} 



