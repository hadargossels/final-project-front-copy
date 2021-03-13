import * as React from "react";
import DeleteWithCustomConfirmButton from 'ra-delete-with-custom-confirm-button';
import Delete from '@material-ui/icons/Delete';
import ErrorOutline from '@material-ui/icons/ErrorOutline';
import { GridShowLayout, RaGrid, BoxedShowLayout, RaBox, TabbedShowLayout, Tab } from "ra-compact-ui";
import {
    List,
    Datagrid,
    TextField,
    NumberField,
    EditButton,
    SelectInput,
    TextInput,
    Filter,
    SimpleShowLayout,
    DateField,
    DateInput,
    Show,
    ChipField,
    ArrayField,
    EmailField,
    Edit,
    SimpleForm,
    ReferenceField
} from 'react-admin';


const DeleteConfirmTitle = 'Are you sure you want to delete this order?';

const statusOptions = [
    { id: 'ordered', name: 'ordered' },
    { id: 'in_proccess', name: 'in proccess' },
    { id: 'confirmed', name: 'confirmed' },
    { id: 'sent', name: 'sent' },
    { id: 'received', name: 'received' },
    { id: 'returned', name: 'returned' }
]

const DeleteConfirmContent = (props) => {
    return (
      <SimpleShowLayout {...props} >
        <TextField source="id" />
        <TextField source="order_details.status" label="Status" />
        <DateField source="order_details.date" label="Date" />
        <NumberField source="order_details.total_amount.value" label="Amount" />
        <TextField source="customer_details.user_id" label="Customer Id" />
      </SimpleShowLayout>
    );
};

const OrderFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <SelectInput source="order_details.status" label="Status" choices={statusOptions} />
        <DateInput source="order_details.date" label="Date" />
        <TextInput source="customer_details.user_id" label="Customer Id" />
    </Filter>
);

export const OrderList = props => (
    <List filters={<OrderFilter />} {...props}>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="order_details.status" label="Status" />
            <DateField source="order_details.date" label="Date" />
            <NumberField source="order_details.total_amount.value" label="Amount" />
            <ReferenceField label="Customer Id" source="customer_details.user_id" reference="users">
                <TextField source="id" />
            </ReferenceField>
            
            <EditButton />
            <DeleteWithCustomConfirmButton
                title={DeleteConfirmTitle}      // your custom title of delete confirm dialog
                content={DeleteConfirmContent}  // your custom contents of delete confirm dialog
                confirmColor='warning'          // color of delete button ('warning' or 'primary', default: 'warning')
                ConfirmIcon={Delete}            // icon of delete button (default: 'Delete')
                cancel='Cancel'                 // label of cancel button (default: 'Cancel')
                CancelIcon={ErrorOutline}       // icon of cancel button (default: 'ErrorOutline')
                undoable={true}                 // undoable (default: true)
            />
        </Datagrid>
    </List>
);

export const OrderShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <GridShowLayout className="gridShowLayout">
                <RaGrid container direction="row">
                    <RaGrid item xs>
                        <h6>Order</h6>
                        <TextField source="id" label="Order Id"/>
                        <DateField source="order_details.date" label="Date" />                            
                        <ChipField source="order_details.status" label="Status" />
                    </RaGrid>
                    <RaGrid item xs>
                        <h6>Costumer</h6>
                        <TextField source="customer_details.user_id" label="Customer Id"/>
                        <EmailField source="customer_details.email" label="Email"/>
                    </RaGrid>
                    <RaGrid item xs>
                        <h6>Recipient</h6>
                        <TextField source="recipient_details.city" label="City"/>
                        <TextField source="recipient_details.street" label="Street"/>
                        <TextField source="recipient_details.home_number" label="Home Number"/>
                        <TextField source="recipient_details.apartment_number" label="Apartment Number"/>
                    </RaGrid>
                </RaGrid>
            </GridShowLayout>

            <h6 style={{marginTop: "40px"}}>Items</h6>
            <BoxedShowLayout>
                <RaBox flex="0 0 100%" display="flex" mt="20px">
                    <ArrayField source="order_details.products" style={{width: "100%"}}>
                        <Datagrid>
                            <TextField source="id" />
                            <TextField source="name" />
                            <NumberField source="price" />
                            <NumberField source="discount" />
                            <NumberField source="actual_price" label="Actual Price" />
                            <NumberField source="quantity" />
                            <NumberField source="total" />
                        </Datagrid>
                    </ArrayField>
                </RaBox>
            </BoxedShowLayout>
            
            <h6 style={{marginTop: "50px"}}>Totals</h6>
            <GridShowLayout className="gridShowLayout">
                <RaGrid container direction="row">
                    <RaGrid item xs>
                        <NumberField source="order_details.subtotal_amount" label="Subtotal" />
                    </RaGrid>
                    <RaGrid item xs>
                        <NumberField source="order_details.taxes_amount" label="Taxes" />
                    </RaGrid>
                    <RaGrid item xs>
                        <NumberField source="order_details.coupon_discount_amount" label="Cupon Discount" />
                    </RaGrid>
                    <RaGrid item xs>
                        <NumberField source="order_details.delivery_amount" label="Delivery" />
                    </RaGrid>
                    <RaGrid item xs>
                        <TextField source="order_details.total_amount.value" label="Total" />
                    </RaGrid>
                </RaGrid>
            </GridShowLayout>
        </SimpleShowLayout>
    </Show>
);

export const OrderEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <SelectInput source="order_details.status" label="Status" choices={statusOptions} />
        </SimpleForm>
    </Edit>
);

