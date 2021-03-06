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
  BulkDeleteWithConfirmButton,
  DeleteWithConfirmButton,
  ArrayField,
  ImageField,
  ShowButton,
  RefreshButton,
  CreateButton,
  ExportButton,
  NumberField,
} from "react-admin";
import { Fragment } from "react";

const UserBulkActionButtons = (props) => (
  <Fragment>
    <BulkDeleteWithConfirmButton {...props} />
  </Fragment>
);

const ShopList = (props) => {
  return (
    <List
      {...props}
      filters={<ShopFilter />}
      actions={<ProductActionsButtons />}
      bulkActionButtons={<UserBulkActionButtons />}
      style={{ width: "80%" }}
    >
      <Datagrid rowClick="show">
        <NumberField source="id" />
        <TextField source="title" />
        <ArrayField source="items">
          <Datagrid rowClick="edit">
            {" "}
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="description" />
            <ImageField source="imageUrl" />{" "}
            <NumberField label="in Stock" source="amount" />
            <NumberField source="price" />
            <ShowButton label="" />
            <EditButton />
            <DeleteWithConfirmButton />
          </Datagrid>
        </ArrayField>
        <CreateButton />

        {/* <EditButton /> */}
      </Datagrid>
    </List>
  );
};

const ShopFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    {/* <ReferenceInput label="Title" source="userId" reference="users" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput> */}
  </Filter>
);

const ProductActionsButtons = (props) => (
  <div>
    <RefreshButton {...props} />
    <CreateButton {...props} />
    <ExportButton {...props} />
  </div>
);

export default ShopList;
