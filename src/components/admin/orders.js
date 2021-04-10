import * as React from "react";
import {
  List,
  DateField,
  Datagrid,
  TextField,
  NumberField,
  EditButton,
  ShowButton,
  Edit,
  Show,
  SimpleForm,
  SimpleShowLayout,
  BooleanField,
  EmailField,
  ArrayField,
  AutocompleteInput,
  BooleanInput,
} from "react-admin";

export const OrderEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <AutocompleteInput
        source="status"
        choices={[
          { id: "ordered", name: "ordered" },
          { id: "delivered", name: "delivered" },
          { id: "cancelled", name: "cancelled" },
        ]}
      />
      <BooleanInput source="refunded" />
    </SimpleForm>
  </Edit>
);

export const OrderDisplay = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <SimpleShowLayout className="row w-80">
        <SimpleShowLayout className="col-9">
          <h5>Order</h5>
          <SimpleShowLayout className="row">
            <SimpleShowLayout className="col-6">
              <DateField className="p-2" source="date" />
              <TextField className="p-2" source="confirmNumber" />
            </SimpleShowLayout>
            <SimpleShowLayout className="col-6">
              <TextField className="p-2" source="status" />
              <BooleanField className="p-2" source="refunded" />
            </SimpleShowLayout>
          </SimpleShowLayout>
        </SimpleShowLayout>
        <SimpleShowLayout className="col-3">
          <h5>Customer</h5>
          <TextField label="customer" source="fname" />
          <EmailField label="" source="email" />
          <TextField label="phone" source="phoneNumber" />
          <h5 className="pt-3">Shipping Address</h5>
          <TextField label="" source="address" />
        </SimpleShowLayout>
      </SimpleShowLayout>
      <SimpleShowLayout>
        <h4>Items</h4>
        <ArrayField label="" source="theOrder">
          <Datagrid>
            <TextField label="Product" source="name" />
            <NumberField
              label="Unit Price"
              source="price"
              locales="fr-FR"
              options={{ style: "currency", currency: "USD" }}
            />
            <NumberField label="Quantity" source="quantity" />
            <NumberField
              label="Total"
              source="sum"
              locales="fr-FR"
              options={{ style: "currency", currency: "USD" }}
            />
          </Datagrid>
        </ArrayField>
      </SimpleShowLayout>
      <SimpleShowLayout>
        <h4>Totals</h4>
        <SimpleShowLayout className="row">
          <SimpleShowLayout>
            <span>Sum</span>
            <NumberField
              label=""
              source="total"
              locales="fr-FR"
              options={{ style: "currency", currency: "USD" }}
            />
          </SimpleShowLayout>
          <SimpleShowLayout>
            <span>Delivery</span>
            <NumberField
              label=""
              source="shippingMethod"
              locales="fr-FR"
              options={{ style: "currency", currency: "USD" }}
            />
          </SimpleShowLayout>
          <SimpleShowLayout>
            <span>Total</span>
            <NumberField
              label=""
              source="totalWithShipping"
              locales="fr-FR"
              options={{ style: "currency", currency: "USD" }}
            />
          </SimpleShowLayout>
        </SimpleShowLayout>
      </SimpleShowLayout>
    </SimpleShowLayout>
  </Show>
);

export const OrderList = (props) => (
  <List {...props}>
    <Datagrid rowClick="show">
      <DateField source="date" showTime />
      <TextField source="confirmNumber" />
      <TextField source="fname" />
      <TextField source="address" />
      <NumberField source="itemsNumber" />
      <NumberField
        source="totalWithShipping"
        locales="fr-FR"
        options={{ style: "currency", currency: "USD" }}
      />
      <TextField source="status" />
      <ShowButton />
      <EditButton />
    </Datagrid>
  </List>
);
