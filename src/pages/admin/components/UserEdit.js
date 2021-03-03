import React from "react";
import {
  Edit,
  required,
  SimpleForm,
  TextInput,
  BooleanInput,
} from "react-admin";

const UserEdit = (props) => {
  return (
    <Edit title="Edit User" title={<UserTitle />} {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="displayName" validate={[required()]} />
        <TextInput source="email" validate={[required()]} />
        <TextInput source="phone" validate={[required()]} />
        <BooleanInput label="Admin" source="admin" />
        <BooleanInput label="Active" source="active" />
      </SimpleForm>
    </Edit>
  );
};

const UserTitle = ({ record }) => {
  return <span>{record ? `User "${record.name}"` : ""}</span>;
};

export default UserEdit;
