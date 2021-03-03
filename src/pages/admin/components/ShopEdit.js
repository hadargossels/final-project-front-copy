import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

const ShopEdit = (props) => {
  return (
    <Edit title="Edit User" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="displayName" />
        <TextInput source="email" />
      </SimpleForm>
    </Edit>
  );
};

export default ShopEdit;
