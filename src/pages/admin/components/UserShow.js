import {
  EmailField,
  SelectField,
  SelectInput,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";
import React from "react";

export const UserShow = (props) => (
  <Show {...props} title={<UserTitle />}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="displayName" />
      {/* <ReferenceField label="Comment" source="title" reference="comments">
        <TextField source="title" />
      </ReferenceField> */}
      <EmailField source="email" />
      <TextField source="phone" />
      {/* <RichTextField source="body" /> */}

      <TextField source="active" />
      <SelectField
        label="Type"
        source="type"
        choices={[
          { id: "Administrator", name: "Administrator" },
          { id: "Customer", name: "Customer" },
          { id: "Site Owner", name: "Site Owner" },
        ]}
      />
    </SimpleShowLayout>
  </Show>
);

const UserTitle = ({ record }) => {
  return <span>{record ? `User: ${record.displayName}` : ""}</span>;
};

export default UserShow;
