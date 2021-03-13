import * as React from "react";
import {
    Filter,
    List,
    Datagrid,
    TextField,
    EmailField,
    EditButton,
    Edit,
    Create,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
    Toolbar,
    SaveButton,
    DeleteWithConfirmButton,
    required,
    ReferenceField,
    BooleanInput,
    DateInput,
    PasswordInput,
    email,
    minLength,
    ArrayField,
    ChipField,
    SimpleFormIterator,
    SingleFieldList,
    ShowButton, 
    SelectField,
    TabbedShowLayout,
    Tab,
    Show
} from 'react-admin';
import Chip from '@material-ui/core/Chip'

const OrderID = ({ record }) => {
    return <span>Order {record ? `"${record.id}"` : ''}</span>;
};

export const OrderList = props => (
        <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="payerName" />
            <TextField source="recieverName" />
            <EmailField source="email" />
            <TextField source="fullAd" />
            <TextField source="city" />
            <TextField source="payment" />
            <TextField source="phoneNum" />
            <ArrayField source="items">
                <SingleFieldList>
                    <ChipField source="id" />
                </SingleFieldList>
            </ArrayField>            
            <SelectField source="status" choices={[
                { id: 'Processing', name: 'Processing' },
                { id: 'Sent', name: 'Sent' },
                { id: 'Arrived', name: 'Arrived' },
                { id: 'Returned', name: 'Returned' },
                { id: 'Cancelled', name: 'Cancelled' },
                { id: 'Refunded', name: 'Refunded' },
            ]} />
            <ShowButton/>
            <EditButton />
            <DeleteWithConfirmButton/>
        </Datagrid>
    </List>
);

export const OrderEdit = props => (
    <Edit title={<OrderID />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="payerName" validate={[required()]}/>
            <TextInput source="payment" validate={[required()]}/>
            <TextInput source="price" validate={[required()]}/>
            <TextInput source="recieverName" validate={[required()]}/>
            <TextInput source="email" validate={[required()]}/>
            <TextInput source="fullAd" validate={[required()]}/>
            <TextInput source="city" validate={[required()]}/>
            <TextInput source="country" validate={[required()]}/>
            <TextInput source="zipCode" validate={[required()]}/>
            <TextInput source="phoneNum" validate={[required()]}/>
            <TextInput source="notes" validate={[required()]}/>
            <SelectInput source="status" validate={[required()]} choices={[
                { id: 'Processing', name: 'Processing' },
                { id: 'Sent', name: 'Sent' },
                { id: 'Arrived', name: 'Arrived' },
                { id: 'Returned', name: 'Returned' },
                { id: 'Cancelled', name: 'Cancelled' },
                { id: 'Refunded', name: 'Refunded' },
            ]} />
        </SimpleForm>
    </Edit>
);

export const OrderShow = (props) => (
    <Show {...props}>
        <TabbedShowLayout>
            <Tab label="Payer Information">
                <TextField source="id" label="Order ID"/>
                <TextField source="payerName"/>
                <TextField source="email"/>
                <TextField source="payment"/>
                <TextField source="price"/>
                <TextField source="status"/>
            </Tab>
            <Tab label="Items">
                <ArrayField source="items" fieldKey="id">
                    <Datagrid>
                        <TextField source="id"/>
                        <TextField source="title"/>
                        <TextField source="format"/>
                        <TextField source="language"/>
                        <TextField source="price" label="Price Per Unit"/>
                        <TextField source="publisher"/>
                    </Datagrid>
                </ArrayField>
            </Tab>
            <Tab label="Reciever Information">
                <TextField source="recieverName"/>
                <TextField source="phoneNum"/>
                <TextField source="fullAd"/>
                <TextField source="zipCode"/>
                <TextField source="city"/>
                <TextField source="country"/>
                <TextField source="notes"/>
            </Tab>
        </TabbedShowLayout>
    </Show>
);