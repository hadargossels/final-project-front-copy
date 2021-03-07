import {
  ArrayField,
  Datagrid,
  DateField,
  EmailField,
  SelectField,
  SelectInput,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";
import React from "react";

export const OrderShow = (props) => (
  <Show {...props} title={<OrderTitle />}>
    <SimpleShowLayout>
      <TextField source="id" />
      <DateField source="date" />
      <TextField source="firstName" />
      <TextField source="lastName" />
      <TextField source="phone" />
      <TextField source="address" />
      <TextField source="country" />
      <TextField source="zip" />

      <ArrayField source="cartItems">
        <Datagrid>
          {" "}
          {/* <TextField source="id" /> */}
          <TextField source="name" />
          {/* <TextField source="description" />
            <ImageField source="imageUrl" /> */}
          <TextField source="price" />
          {/* <EditButton /> <DeleteWithConfirmButton /> */}
        </Datagrid>
      </ArrayField>

      {/* <SelectField
        label="Type"
        source="shipping"
        choices={[
          { id: "Administrator", name: "Administrator" },
          { id: "Customer", name: "Customer" },
          { id: "Site Owner", name: "Site Owner" },
        ]}
      /> */}
      <TextField source="shipping" />

      <TextField source="cartItemsCount" />
      <TextField source="cartTotal" />
      <TextField source="orderState" />
    </SimpleShowLayout>
  </Show>
);

const OrderTitle = ({ record }) => {
  return <span>{record ? `Order: ${record.id}` : ""}</span>;
};

export default OrderShow;
