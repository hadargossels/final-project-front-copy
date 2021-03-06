import React from "react";
import {
  ArrayInput,
  Create,
  SimpleForm,
  TextInput,
  ImageInput,
  SimpleFormIterator,
  DateInput,
  NumberInput,
  required,
  SelectInput,
} from "react-admin";

const OrderCreate = (props) => {
  return (
    <Create title="Create a Order" {...props} undoable={false}>
      <SimpleForm>
        <DateInput source="date" />
        {/* <TextInput source="orderId" /> */}
        <TextInput source="firstName" validate={[required()]} />
        <TextInput source="lastName" />
        <NumberInput source="phone" />
        <TextInput source="address" validate={[required()]} />
        <TextInput source="country" />
        <NumberInput source="zip" />

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
            <TextInput source="name" label="Name" />
            {/* <TextInput source="description" label="Description" />
            <ImageInput source="imageUrl" label="Image Url" /> */}
            <TextInput source="price" label="Price($)" />
          </SimpleFormIterator>
        </ArrayInput>

        <TextInput source="cartItemsCount" />
        <NumberInput min="0" step="1" source="cartTotal" />

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
    </Create>
  );
};

export default OrderCreate;
