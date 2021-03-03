import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

const ShopCreate = (props) => {
  return (
    <Create title="Create a Shop" {...props}>
      <SimpleForm>
        <TextInput source="id" />
        <TextInput source="name" />
        <TextInput source="description" />
        <TextInput source="imageUrl" />
        <TextInput source="price" />
      </SimpleForm>
    </Create>
  );
};

export default ShopCreate;
