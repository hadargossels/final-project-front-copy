import * as React from "react";

import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  Edit,
  Create,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
  Filter,
  DateInput,
  DateField,
} from "react-admin";

const PostTitle = ({ record }) => {
  return <span>Post {record ? `"${record.title}"` : ""}</span>;
};
const CreatePostDatabase = (props, data) => {
  // db.child("blogs").child(data.uid)
  //   .set({
  //     id: data.users,
  //     name: data.name,
  //     src: data.src,
  //     title: data.title,
  //     text: data.text,
  //     date: data.date,
  //   })
};
export const PostList = (props) => (
  <List filters={<PostFilter />} {...props}>
    <Datagrid>
      <TextField source="id" />
      <ReferenceField source="users" reference="users">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="name" />
      <TextField source="title" />
      {/* <TextField source="text" /> */}
      <DateField source="date" />
      <EditButton />
    </Datagrid>
  </List>
);

export const PostEdit = (props) => (
  <Edit title={<PostTitle />} {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <ReferenceInput source="users" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="name" />
      <TextInput source="title" />
      <TextInput multiline source="text" />
      {/* <DateInput source="Date" /> */}
    </SimpleForm>
  </Edit>
);

export const PostCreate = (props) => (
  <Create title="Create a Blog" {...props}>
    <SimpleForm save={(data) => CreatePostDatabase(props, data)}>
      <ReferenceInput source="users" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="name" />
      <TextInput source="src" />
      <TextInput source="title" />
      <TextInput multiline source="text" />
      <DateInput source="date" />
    </SimpleForm>
  </Create>
);

const PostFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput>
  </Filter>
);
