import * as React from "react";
import {  Show, DateField, ArrayField, NumberField, EmailField, BooleanField, SimpleShowLayout, SelectInput, TextInput, List,Edit, Datagrid, TextField, SimpleForm, CreateButton, ExportButton, RefreshButton, ShowButton, DateInput, BooleanInput, EditButton, Title, inferTypeFromValues} from 'react-admin';

export const InvoiceList = (props) => (
    <List  {...props} actions={<InvoiceActionsButtons/>}>
        <Datagrid >
            <TextField label="Date" source="fulldate"/>
            <TextField label="Reference" source="id" />
            <TextField label="Customer" source="billName"/>
            <TextField label="Total" source="finalSum"/>
            <TextField source="status"/>
            <ShowButton/>
            <EditButton/>
        </Datagrid>
    </List>
);

const InvoiceActionsButtons = props => (
    <div>
        <RefreshButton {...props}/>
        <ExportButton {...props}/>
        <CreateButton {...props}/>
    </div>
)

export const InvoiceEdit = (props) => (
    <Edit {...props} undoable={false} >
        <SimpleForm redirect="list">
            <TextInput source="date" disabled/>
            <SelectInput source="status" choices={[
                { id: 'ordered', name: 'ordered' },
                { id: 'in process', name: 'in process' },
                { id: 'approved', name: 'approved' },
                { id: 'sent', name: 'sent' },
                { id: 'delivered', name: 'delivered' },
                { id: 'cancelled', name: 'cancelled' },
            ]} />
            <TextInput label="Reference" source="id" disabled/>
            <BooleanInput source="refunded"/>
        </SimpleForm>
    </Edit>
)

export const InvoiceShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            
            <SimpleShowLayout className="row py-0">
                <SimpleShowLayout className="col-7 row">
                    <h4>Order</h4>
                    <DateField className="col-6" source="date"  />
                    <TextField className="col-6" label="Reference" source="id" />
                    <TextField className="col-6" source="status" />
                    <BooleanField className="col-6" source="refunded" />
                </SimpleShowLayout>

                <SimpleShowLayout className=" col-5">
                    <h4>Customer</h4>
                    <TextField label="" source="billName" />
                    <EmailField label="" source="email" />
                    <TextField label="" source="phone" />
                    <h4 className="pt-2">Shipping Address</h4>
                    <TextField label="" source="shipName" />
                    <TextField label="" source="address" />
                    <TextField label="" source="city" />
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

                <SimpleShowLayout className="d-none">
                    <span className="col-7 pt-3">With discount</span>
                    <TextField className=" ps-3 col-5" label="" source="sumWithDiscount" />
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