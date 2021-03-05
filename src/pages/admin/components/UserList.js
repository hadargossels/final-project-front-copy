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
  ShowButton,
  RefreshButton,
  CreateButton,
  ExportButton,
  SelectField,
} from "react-admin";
import { Fragment } from "react";

import "./style.css";

const UserBulkActionButtons = (props) => (
  <Fragment>
    <BulkDeleteWithConfirmButton {...props} />
  </Fragment>
);

const MyActiveField = ({ record = {}, source }) => {
  return (
    <>
      {record[source] ? (
        <span style={{ color: "green" }}>Yes</span>
      ) : (
        <span style={{ color: "red" }}>No</span>
      )}
    </>
  );
};

const UserActionsButtons = (props) => (
  <div>
    <RefreshButton {...props} />
    <CreateButton {...props} />
    <ExportButton {...props} />
  </div>
);

const UserList = (props) => {
  return (
    <List
      {...props}
      filters={<UserFilter />}
      actions={<UserActionsButtons />}
      bulkActionButtons={<UserBulkActionButtons />}
      // style={{ width: "50%" }}
    >
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="displayName" />
        <EmailField source="email" />
        <TextField source="phone" />
        {/* <MyUrlField source="website" /> */}
        {/* <TextField source="company.name" /> */}
        {/* <TextField source="admin" /> */}

        <SelectField
          label="Type"
          source="type"
          choices={[
            { id: "Administrator", name: "Administrator" },
            { id: "Customer", name: "Customer" },
            { id: "Site Owner", name: "Site Owner" },
          ]}
        />
        <MyActiveField source="active" />
        <ShowButton label="" />

        <EditButton />
        <DeleteWithConfirmButton />
        {/* 
        <EditButton basePath="/users" />
        <DeleteWithConfirmButton basePath="/users" /> */}
      </Datagrid>
    </List>
  );
};

export default UserList;

const UserFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
  </Filter>
);
// <ReferenceInput
//   label="display Name"
//   source="displayName"
//   reference="users"
//   allowEmpty
// >
//   <SelectInput optionText="name" />
// </ReferenceInput>
// <ReferenceInput label="Email" source="email" reference="users" allowEmpty>
//   <SelectInput optionText="email" />
// </ReferenceInput>
