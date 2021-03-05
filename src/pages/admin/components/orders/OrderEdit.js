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
} from "react-admin";

const OrderEdit = (props) => {
  return (
    <Edit title="Edit Order" title={<OrderTitle />} {...props} undoable={false}>
      <SimpleForm>
        <TextInput disabled source="date" />
        <TextInput disabled source="orderId" />
        <TextInput source="firstName" />
        <TextInput source="lastName" />
        <TextInput source="phone" />
        <TextInput source="address" />
        <TextInput source="country" />
        <TextInput source="zip" />
        <TextInput source="shipping" />
        <ArrayInput source="items">
          <SimpleFormIterator>
            <TextInput source="name" />
            <TextInput source="description" />
            <ImageInput source="imageUrl" />
            <TextInput source="price" />
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Edit>
  );
};

const OrderTitle = ({ record }) => {
  return <span>{record ? `User "${record.name}"` : ""}</span>;
};
export default OrderEdit;
