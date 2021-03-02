import * as React from "react";
import { List, Datagrid, TextField, EmailField } from "react-admin";
import MyUrlField from "./MyUrlField";

export const Roll = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      {/* <EmailField source="email" /> */}
      <TextField source="phone" />
      {/* <MyUrlField source="website" /> */}
      <TextField source="company" />
      <TextField source="role" />
      <TextField />
    </Datagrid>
  </List>
);
