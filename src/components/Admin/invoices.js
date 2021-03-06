import * as React from "react";
import {  Show, DateField, ArrayField, NumberField, EmailField, BooleanField, SimpleShowLayout, SelectInput, TextInput, List,Edit, Datagrid, TextField, SimpleForm, CreateButton, ExportButton, RefreshButton, ShowButton, DateInput, BooleanInput, EditButton, Title} from 'react-admin';

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
            <h4>Order</h4>
            <DateField source="date" />
            <TextField source="status" />

            <TextField label="Reference" source="id" />
            <BooleanField source="refunded" />

            <h4>Customer</h4>
            <TextField label="Customer" source="billName" />
            <EmailField source="email" />
            <TextField source="phone" />

            <h4>Shipping Address</h4>
            <TextField label="Shipping address" source="shipName" />
            <TextField source="address" />
            <TextField source="city" />
            
            <h4>Items</h4>
            <ArrayField label="Items" source="purchaseDetails">
                <Datagrid>
                    <TextField label="Product name" source="name" />
                    <NumberField label="Unit Price" source="unitPrice" />
                    <NumberField label="Quantity" source="count" />
                    <NumberField label="Total" source="finalPrice" />
                </Datagrid>
            </ArrayField>

            <h4>Totals</h4>
            <TextField source="sum" />
            <TextField label="With discount" source="sumWithDiscount" />
            <TextField label="Delivery" source="shipping" />
            <TextField label="Total" source="finalSum" />
            <TextField source="notes" />
        </SimpleShowLayout>
    </Show>
);