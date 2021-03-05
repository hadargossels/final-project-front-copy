import React from "react";
import {
  ArrayField,
  Create,
  SimpleForm,
  TextInput,
  TextField,
  Datagrid,
  ImageField,
  ImageInput,
  ArrayInput,
  SimpleFormIterator,
  NumberInput,
} from "react-admin";

const ShopCreate = (props) => {
  return (
    <Create {...props} title="Create a Item">
      <SimpleForm redirect="list">
        {/* <TextInput source="id" /> */}
        <TextInput source="title" />
        <ArrayInput source="items">
          <SimpleFormIterator>
            <TextInput source="name" label="Name" />
            <TextInput source="description" label="Description" />
            <ImageInput source="imageUrl" label="Image Url" />
            <NumberInput min="0" step="1" label="in Stock" source="amount" />

            <TextInput source="price" label="Price($)" />
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Create>
  );
};

export default ShopCreate;
