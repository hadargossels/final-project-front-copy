import React from "react";
import {
  Edit,
  required,
  SimpleForm,
  TextInput,
  BooleanInput,
  Toolbar,
  SaveButton,
  SelectInput,
  email,
} from "react-admin";

const UserEditToolbar = (props) => (
  <Toolbar {...props}>
    <SaveButton />
    {/* <DeleteWithConfirmButton/> */}
  </Toolbar>
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

const UserEdit = (props) => {
  return (
    <Edit {...props} title={<UserTitle />} undoable={false}>
      <SimpleForm toolbar={<UserEditToolbar />}>
        <TextInput disabled source="id" />
        <TextInput source="displayName" validate={[required()]} />
        <TextInput source="email" validate={[required(), email()]} />
        <TextInput source="phone" />
        <BooleanInput label="Active" source="active" />
        {/* <BooleanInput label="Admin" source="admin" /> */}
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
      </SimpleForm>
    </Edit>
  );
};

const UserTitle = ({ record }) => {
  return <span>{record ? ` Edit The User ${record.displayName}` : ""}</span>;
};

export default UserEdit;
