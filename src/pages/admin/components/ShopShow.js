import {
  ArrayField,
  Datagrid,
  EmailField,
  ImageField,
  NumberField,
  SelectField,
  SelectInput,
  Show,
  ShowButton,
  SimpleShowLayout,
  TextField,
} from "react-admin";
import React from "react";

export const ShopShow = (props) => (
  <Show {...props} title={<ShopTitle />}>
    <SimpleShowLayout>
      <NumberField source="id" />
      <TextField source="title" />
      <ArrayField source="items">
        <Datagrid rowClick="edit">
          {" "}
          <TextField source="id" />
          <TextField source="name" />
          <TextField source="description" />
          <ImageField source="imageUrl" />{" "}
          <NumberField label="in Stock" source="amount" />
          <NumberField source="price" />
          <ShowButton label="" />
          {/* <EditButton /> */}
        </Datagrid>
      </ArrayField>
    </SimpleShowLayout>
  </Show>
);

const ShopTitle = ({ record }) => {
  return <span>{record ? `Shop: ${record.name}` : ""}</span>;
};

export default ShopShow;
