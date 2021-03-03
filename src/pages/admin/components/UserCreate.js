import React from "react";
import {
  Create,
  SimpleForm,
  required,
  TextInput,
  BooleanInput,
} from "react-admin";

const UserCreate = (props) => {
  return (
    <Create title="Create a User" {...props}>
      <SimpleForm>
        <TextInput source="displayName" validate={[required()]} />
        <TextInput source="email" validate={[required()]} />
        <TextInput source="phone" />
        <BooleanInput source="admin" defaultValue={false} />
        <BooleanInput source="active" defaultValue={true} disabled />
      </SimpleForm>
    </Create>
  );
};

export default UserCreate;
