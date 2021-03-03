import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
  Filter,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

const PostList = (props) => {
  return (
    <List filters={<PostFilter />} {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="title" />
        <DateField source="publishedAt" />
        <EditButton basePath="/posts" />
        <DeleteButton basePath="/posts" />
      </Datagrid>
    </List>
  );
};

export default PostList;

const PostFilter = (props) => (
  <Filter {...props}>
    {console.log("props :", props)}
    <TextInput label="Search" source="q" alwaysOn />
    <ReferenceInput label="Title" source="postsId" reference="posts" allowEmpty>
      <SelectInput optionText="title" />
    </ReferenceInput>
    <ReferenceInput label="Body" source="postsId" reference="posts" allowEmpty>
      <SelectInput optionText="body" />
    </ReferenceInput>
  </Filter>
);
