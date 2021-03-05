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
  Toolbar,
  SaveButton,
  DeleteWithConfirmButton,
  NumberInput,
  required,
} from "react-admin";

const ShopEdit = (props) => {
  return (
    <Edit {...props} title={<ShopTitle />} undoable={false}>
      <SimpleForm toolbar={<ProductEditToolbar />}>
        <TextInput disabled source="id" />
        <TextInput label="Category" source="title" validate={[required()]} />
        <ArrayInput source="items">
          <SimpleFormIterator>
            <TextInput
              label="Product Name"
              source="name"
              validate={[required()]}
            />
            <TextInput
              label="Product Description"
              source="description"
              validate={[required()]}
            />
            <ImageInput label="Product Image Url" source="imageUrl" />
            {/* <TextInput label="Product Price" source="price" /> */}

            <NumberInput min="0" step="1" label="in Stock" source="amount" />

            <NumberInput
              label="Product Price"
              min="0.01"
              step="0.01"
              source="price"
              validate={[required()]}
            />
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Edit>
  );
};

const ShopTitle = ({ record }) => {
  return <span>{record ? `Product "${record.name}"` : ""}</span>;
};

const ProductEditToolbar = (props) => (
  <Toolbar {...props}>
    <SaveButton />
    <DeleteWithConfirmButton />
  </Toolbar>
);

export default ShopEdit;
