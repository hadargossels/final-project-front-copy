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
  DateField,
} from "react-admin";
import { Fragment } from "react";

const OrderBulkActionButtons = (props) => (
  <Fragment>
    <BulkDeleteWithConfirmButton {...props} />
  </Fragment>
);

const OrderList = (props) => {
  return (
    <List
      {...props}
      filters={<OrderFilter />}
      actions={<OrderActionsButtons />}
      bulkActionButtons={<OrderBulkActionButtons />}
      // style={{ width: "80%" }}
    >
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="date" />
        <TextField source="firstName" />
        <TextField source="lastName" />
        <TextField source="phone" />
        <TextField source="address" />
        <TextField source="country" />
        <TextField source="zip" />
        <TextField source="shipping" />
        <ArrayField source="cartItems">
          <Datagrid>
            {" "}
            {/* <TextField source="id" /> */}
            <TextField label="Product" source="name" />
            {/* <TextField source="description" />
            <ImageField source="imageUrl" /> */}
            <TextField label="Price($)" source="price" />
            {/* <EditButton /> <DeleteWithConfirmButton /> */}
          </Datagrid>
        </ArrayField>
        <TextField source="cartItemsCount" />
        <TextField label="CartTotal($)" source="cartTotal" />
        <TextField source="orderState" />
        <ShowButton label="" />
        <EditButton />
        <DeleteWithConfirmButton />
      </Datagrid>
    </List>
  );
};

const OrderFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    {/* <ReferenceInput label="Title" source="userId" reference="users" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput> */}
  </Filter>
);

const OrderActionsButtons = (props) => (
  <div>
    <RefreshButton {...props} />
    <CreateButton {...props} />
    <ExportButton {...props} />
  </div>
);

export default OrderList;
