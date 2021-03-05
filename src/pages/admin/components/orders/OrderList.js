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
} from "react-admin";
import { Fragment } from "react";

const UserBulkActionButtons = (props) => (
  <Fragment>
    <BulkDeleteWithConfirmButton {...props} />
  </Fragment>
);

const OrderList = (props) => {
  return (
    <List
      filters={<OrderFilter />}
      {...props}
      bulkActionButtons={<UserBulkActionButtons />}
    >
      <Datagrid>
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
            <TextField source="name" />
            {/* <TextField source="description" />
            <ImageField source="imageUrl" /> */}
            <TextField source="price" />
            {/* <EditButton /> <DeleteWithConfirmButton /> */}
          </Datagrid>
        </ArrayField>
        <TextField source="cartItemsCount" />
        <TextField source="cartTotal" />
        <TextField source="orderState" />
        <EditButton />
        <DeleteWithConfirmButton />
      </Datagrid>
    </List>
  );
};

export default OrderList;

const OrderFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    {/* <ReferenceInput label="Title" source="userId" reference="users" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput> */}
  </Filter>
);
