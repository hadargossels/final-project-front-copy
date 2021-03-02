import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  TextInput,
  ReferenceInput,
  SelectInput,
  Edit,
  Create,
  SimpleForm,
  EditButton,
} from "react-admin";
import MyUrlField from "./MyUrlField";

export const UserList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <EmailField source="email" />
      <TextField source="phone" />
      <MyUrlField source="url" />
      <TextField source="company" />
      <TextField source="active" />
      <EditButton />
    </Datagrid>
  </List>
);

const UserTitle = ({ record }) => {
  return <span>User {record ? `"${record.title}"` : ""}</span>;
};

export const UserEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      {/* <TextInput disabled source="id" /> */}
      {/* <ReferenceInput source="id" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput> */}
      <TextInput source="id" />
      <TextInput source="name" />
      <TextInput source="email" />
      <TextInput source="phone" />
      <TextInput source="url" />
      <TextInput source="company" />
      <TextInput source="active" />
    </SimpleForm>
  </Edit>
);

export const UserCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      {/* <ReferenceInput source="name" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput> */}
      <TextInput source="name" />
      <TextInput source="email" />
      <TextInput source="phone" />
      <TextInput source="url" />
      <TextInput source="company" />
      {/* <TextInput source="active" /> */}
      {/* <ReferenceInput source="active" reference="users">
        <SelectInput choices={("true", "false")} />
      </ReferenceInput> */}

      <SelectInput
        source="active"
        choices={[
          { id: "true", name: "true" },
          { id: "false", name: "false" },
        ]}
      />
    </SimpleForm>
  </Create>
);
