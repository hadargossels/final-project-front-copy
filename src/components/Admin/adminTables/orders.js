import * as React from "react";
import {  Toolbar, SaveButton, Show, DateField, ArrayField, NumberField, EmailField, BooleanField, SimpleShowLayout, SelectInput, TextInput, List,Edit, Datagrid, TextField, SimpleForm, ShowButton, DateInput, BooleanInput, EditButton, ReferenceInput, ReferenceField} from 'react-admin';
import {MyFilter, ActionsRefreshOnly, BulkActionButtons, useStyles, CustomDeleteButton} from '../addOns'

export const OrderList = (props) => (
    <List  {...props}  sort={{ field: 'orderDate', order: 'ASC' }} filters={<MyFilter/>}  actions={<ActionsRefreshOnly/>} bulkActionButtons={<BulkActionButtons/>}>
        <Datagrid >
            <DateField source="orderDate"/>
            <TextField source="reference" />
            <TextField label="User" source="userId"/>
            <TextField label="Customer" source="billName"/>
            <TextField source="status"/>
            <ShowButton/>
            <EditButton/>
        </Datagrid>
    </List>
);

export const OrderEdit = (props) => (
    <Edit {...props} undoable={false} >
        <SimpleForm toolbar={<OrderCustomToolbar />}>
            <DateInput source="orderDate" disabled/>
            <ReferenceInput source="status" reference="status">
                <SelectInput optionText="statusName" />
            </ReferenceInput>
            <TextInput source="reference" disabled/>
            <BooleanInput source="refunded"/>
        </SimpleForm>
    </Edit>
)

export const OrderShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            
            <SimpleShowLayout className="row py-0">
                <SimpleShowLayout className="col-7 row">
                    <h5>Order</h5>
                    <DateField className="col-6" source="orderDate"/>
                    <TextField className="col-6" source="reference" />
                    <ReferenceField source="status" reference="status">
                        <TextField className="col-6" source="statusName" />
                    </ReferenceField>
                    <BooleanField className="col-6" source="refunded" />
                </SimpleShowLayout>

                <SimpleShowLayout className=" col-5">
                    <h5>Customer</h5>
                    <TextField label="" source="billName" />
                    <EmailField label="" source="billEmail" />
                    <TextField label="" source="billPhone" />
                    <h5 className="pt-2">Shipping Address</h5>
                    <TextField label="" source="shipName" />
                    <TextField label="" source="shipAddress" />
                    <TextField label="" source="shipCity" />
                </SimpleShowLayout>
            </SimpleShowLayout>


            <SimpleShowLayout className="row pt-0">
                <h4>Items</h4>
                <ArrayField label="" source="purchaseDetails">
                    <Datagrid>
                        <TextField label="Product name" source="name" />
                        <NumberField label="Unit Price" source="unitPrice" />
                        <NumberField label="Quantity" source="count" />
                        <NumberField label="Total" source="finalPrice" />
                    </Datagrid>
                </ArrayField>
            </SimpleShowLayout>


            <SimpleShowLayout className="row">
                <h4 className="pb-2">Totals</h4>
                <SimpleShowLayout className="row">
                    <span className="col-7 pt-3">Sum</span>
                    <TextField className="ps-3 col-5" label="" source="sum" />
                </SimpleShowLayout>

                <SimpleShowLayout className="row">
                    <span className="col-7 pt-3">Discount</span>
                    <TextField className=" ps-3 col-5" label="" source="discount" />
                </SimpleShowLayout>

                <SimpleShowLayout className="row">
                    <span className="col-7 pt-3">Delivery</span>
                    <TextField className=" ps-3 col-5" label="" source="shipping" />

                </SimpleShowLayout>

                <SimpleShowLayout className="row">
                    <span className="col-7 pt-3">Total</span>
                    <TextField className="ps-3 col-5 fw-bold" label="" source="finalSum" />
                </SimpleShowLayout>
                <TextField source="notes" className="py-4" />

            </SimpleShowLayout>


        </SimpleShowLayout>
    </Show>
);

const OrderCustomToolbar = props => (
    <Toolbar {...props} classes={useStyles()}>
        <SaveButton />
        <CustomDeleteButton basePath="/orders" undoable={false} type="Order" field="reference"/>
    </Toolbar>
);