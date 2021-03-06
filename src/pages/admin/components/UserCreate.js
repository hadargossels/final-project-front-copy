import React from "react";
import {
  Create,
  SimpleForm,
  required,
  TextInput,
  BooleanInput,
  email,
  SelectInput,
} from "react-admin";

const UserCreate = (props) => {
  return (
    <Create title="Create a User" {...props} undoable={false} redirect="list">
      <SimpleForm>
        <TextInput source="displayName" validate={[required()]} />
        <TextInput
          type="email"
          source="email"
          validate={[required(), email()]}
        />
        <TextInput source="phone" />
        {/* <BooleanInput source="admin" defaultValue={false} /> */}

        <SelectInput
          label="Type"
          source="type"
          validate={[required()]}
          choices={[
            { id: "Administrator", name: "Administrator" },
            { id: "Customer", name: "Customer" },
            { id: "Site Owner", name: "Site Owner" },
          ]}
        />

        <BooleanInput source="active" defaultValue={true} disabled />
      </SimpleForm>
    </Create>
  );
};

export default UserCreate;
