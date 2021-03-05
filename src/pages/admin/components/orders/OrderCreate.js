import React from "react";
import {
  ArrayInput,
  Create,
  SimpleForm,
  TextInput,
  ImageInput,
  SimpleFormIterator,
} from "react-admin";

const OrderCreate = (props) => {
  return (
    <Create title="Create a Order" {...props}>
      <SimpleForm>
        <TextInput source="date" />
        <TextInput source="orderId" />
        <TextInput source="firstName" />
        <TextInput source="lastName" />
        <TextInput source="phone" />
        <TextInput source="address" />
        <TextInput source="country" />
        <TextInput source="zip" />
        <TextInput source="shipping" />
        <TextInput source="zip" />
        <TextInput source="shipping" />
        <ArrayInput source="items">
          <SimpleFormIterator>
            <TextInput source="name" label="Name" />
            <TextInput source="description" label="Description" />
            <ImageInput source="imageUrl" label="Image Url" />
            <TextInput source="price" label="Price($)" />
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Create>
  );
};

export default OrderCreate;
