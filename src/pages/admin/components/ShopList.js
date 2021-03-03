import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  EditButton,
  DeleteButton,
  Filter,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

const ShopList = (props) => {
  return (
    <List filters={<ShopFilter />} {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="description" />
        <TextField source="imageUrl" />
        <TextField source="price" />

        <EditButton basePath="/shop" />
        <DeleteButton basePath="/shop" />
      </Datagrid>
    </List>
  );
};

export default ShopList;

const ShopFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    {/* <ReferenceInput label="Title" source="userId" reference="users" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput> */}
  </Filter>
);
