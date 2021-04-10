import * as React from "react";

import {
  List,
  Datagrid,
  TextField,
  EmailField,
  TextInput,
  Filter,
  required,
  ReferenceInput,
  BooleanInput,
  SelectInput,
  Edit,
  Create,
  SimpleForm,
  EditButton,
} from "react-admin";

const UserFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    <ReferenceInput label="User" source="id" reference="users" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput>
  </Filter>
);

export const usersList = (props) => (
  <List {...props} filters={<UserFilter />}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <EmailField source="email" />
      <TextField source="phone" />
      <TextField source="company" />
      <TextField source="role" />
      <TextField source="active" />
      <EditButton />
    </Datagrid>
  </List>
);

export const usersEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput disabled source="name" />
      <TextInput disabled source="email" />
      <TextInput source="phone" />
      <TextInput source="company" />
      <TextInput disabled source="role" />
      <TextInput disabled source="active" />
    </SimpleForm>
  </Edit>
);

export const usersCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" validate={[required()]} />
      <TextInput type="email" validate={[required()]} source="email" />
      <TextInput source="phone" validate={[required()]} />
      <TextInput source="company" validate={[required()]} />
      <SelectInput
        validate={[required()]}
        source="role"
        choices={[
          { id: "admin", name: "admin" },
          { id: "customer", name: "customer" },
          { id: "site owner", name: "site owner" },
        ]}
      />
      <TextInput type="password" source="password" />
      <BooleanInput
        validate={[required()]}
        source="active"
        defaultValue={true}
        disable
      />
    </SimpleForm>
  </Create>
);
