import React from "react";
// import MyUrlField from "./MyUrlField";

import {
  List,
  Datagrid,
  TextField,
  EmailField,
  EditButton,
  DeleteWithConfirmButton,
  DeleteButton,
  SimpleForm,
  BulkDeleteWithConfirmButton,
  Filter,
  required,
  Toolbar,
  TextInput,
  ReferenceInput,
  SelectInput,
  SaveButton,
} from "react-admin";
import { Fragment } from "react";

import "./style.css";

const UserBulkActionButtons = (props) => (
  <Fragment>
    <BulkDeleteWithConfirmButton {...props} />
  </Fragment>
);

const UserList = (props) => {
  return (
    <List
      filters={<UserFilter />}
      {...props}
      bulkActionButtons={<UserBulkActionButtons />}
    >
      <Datagrid>
        <TextField source="id" />
        <TextField source="displayName" />
        <EmailField source="email" />
        <TextField source="phone" />
        {/* <MyUrlField source="website" /> */}
        {/* <TextField source="company.name" /> */}
        <TextField source="admin" />
        <TextField source="active" />
        <EditButton basePath="/users" />
        <DeleteWithConfirmButton basePath="/users" />
      </Datagrid>
    </List>
  );
};

export default UserList;

const UserFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    <ReferenceInput
      label="display Name"
      source="displayName"
      reference="users"
      allowEmpty
    >
      <SelectInput optionText="name" />
    </ReferenceInput>
    <ReferenceInput label="Email" source="email" reference="users" allowEmpty>
      <SelectInput optionText="email" />
    </ReferenceInput>
  </Filter>
);
