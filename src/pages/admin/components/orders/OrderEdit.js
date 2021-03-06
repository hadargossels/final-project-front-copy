import React from "react";
import {
  Edit,
  ImageField,
  SimpleForm,
  TextInput,
  Datagrid,
  ArrayField,
  TextField,
  ImageInput,
  SimpleFormIterator,
  ArrayInput,
  DateInput,
  NumberInput,
  Toolbar,
  SaveButton,
  BulkDeleteWithConfirmButton,
  ReferenceInput,
  required,
  DateField,
  SelectInput,
  DeleteWithConfirmButton,
} from "react-admin";

const OrderEdit = (props) => {
  return (
    <Edit {...props} title={<OrderTitle />} undoable={false}>
      <SimpleForm toolbar={<OrderEditToolbar />} redirect="list">
        <TextInput disabled source="id" disabled />
        <DateField disabled source="date" disabled />
        <TextInput source="firstName" validate={[required()]} />
        <TextInput source="lastName" validate={[required()]} />
        <NumberInput source="phone" />
        <TextInput source="address" validate={[required()]} />
        <TextInput source="country" />
        <TextInput source="zip" />

        <SelectInput
          source="shipping"
          choices={[
            {
              id: "Standard: 20-30 days, free",
              name: "Standard: 20-30 days, free",
            },
            { id: "Fast: 10-20 days, 5$", name: "Fast: 10-20 days, 5$" },
            { id: "Super: 1-3 days, 10$", name: "Super: 1-3 days, 10$" },
          ]}
        />
        <ArrayInput source="cartItems">
          <SimpleFormIterator>
            <TextInput label="name" source="name" />
            {/* <TextInput source="description" />
            <ImageInput source="imageUrl" /> */}

            <NumberInput label="quantity" source="quantity" />

            <NumberInput label="price" source="price" />
          </SimpleFormIterator>
        </ArrayInput>
        <NumberInput source="cartItemsCount" />
        <NumberInput source="cartTotal" disabled />
        <SelectInput
          source="orderState"
          validate={[required()]}
          choices={[
            { id: "sent", name: "sent" },
            { id: "Received", name: "Received" },
            { id: "In treatment", name: "In treatment" },
            { id: "Delivered", name: "Delivered" },

            { id: "Approved", name: "Approved" },
            {
              id: "Received by the customer",
              name: "Received by the customer",
            },
            { id: "Canceled", name: "Canceled" },
          ]}
        />
      </SimpleForm>
    </Edit>
  );
};

const OrderTitle = ({ record }) => {
  return <span>{record ? `Order "${record.firstName}"` : ""}</span>;
};

const OrderEditToolbar = (props) => (
  <Toolbar {...props}>
    <SaveButton />
    <DeleteWithConfirmButton />
  </Toolbar>
);

export default OrderEdit;
