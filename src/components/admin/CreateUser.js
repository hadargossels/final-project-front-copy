import { Fragment } from "react";
import { BulkDeleteWithConfirmButton } from "react-admin";
import { auth, db } from "../../firebase";
import firebase from "firebase/app";
import "firebase/auth";
import {
  List,
  Datagrid,
  TextField,
  NumberField,
  EmailField,
  EditButton,
  DeleteWithConfirmButton,
  Edit,
  SimpleForm,
  TextInput,
  Create,
  required,
  Toolbar,
  SaveButton,
  BooleanInput,
  SelectInput,
  NumberInput,
  RefreshButton,
  ExportButton,
  email,
  BooleanField,
  Filter,
  CreateButton,
} from "react-admin";
import MyUrlField from "./MyUrlField";

const UserBulkActionButtons = (props) => (
  <Fragment>{/* <BulkDeleteWithConfirmButton {...props} /> */}</Fragment>
);

const UserActionsButtons = (props) => (
  <div>
    <RefreshButton {...props} />
    <CreateButton {...props} />
    <ExportButton {...props} />
  </div>
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

const UserTitle = ({ record }) => {
  return <span>{record ? `User "${record.name}"` : ""}</span>;
};

const UserEditToolbar = (props) => (
  <Toolbar {...props}>
    <SaveButton />
    {/* <DeleteWithConfirmButton/> */}
  </Toolbar>
);

const UserFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
  </Filter>
);

const UserCreateAuth = (props, data, password) =>
  auth()
    .createUserWithEmailAndPassword(data.email, password)
    .then(async (userCredential) => {
      // Signed in
      let user = userCredential.user;
      //this.setState({redirect: true})

      let myData;

      await db.on(
        "value",
        async (snapshot) => {
          myData = await snapshot.val().users;

          if (!myData) myData = {};
        },
        function (errorObject) {
          window.alert("The read failed: " + errorObject.code);
        }
      );

      return [myData, user, data];
    })
    .then((arr) => {
      db.child("users")
        .child(arr[1].uid)
        .set({
          id: arr[1].uid,
          num: Object.keys(arr[0]).length + 1,
          active: true,
          address: arr[2].address,
          email: arr[2].email,
          fname: arr[2].fname,
          lname: arr[2].lname,
          url: arr[2].url,
          role: arr[2].role,
          phone: arr[2].phone,
          type: "Customer",
        });
    })
    .then(() => {
      auth().signOut();
      auth().signInWithEmailAndPassword(data.email, data.password);
      //props.history.push("/account/admin#/users");
    })

    .catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;
      //alert(errorCode.split("auth/")[1] + ": " + errorMessage)
      window.alert(errorMessage);
    });

export const UserList = (props) => (
  <List
    {...props}
    filters={<UserFilter />}
    actions={<UserActionsButtons />}
    bulkActionButtons={<UserBulkActionButtons />}
    style={{ width: "38%" }}
  >
    <Datagrid rowClick="edit">
      <TextField source="id" />
      {/* <NumberField source="num" /> */}
      <TextField label="First Name" source="fname" />
      <TextField label="Last Name" source="lname" />
      <EmailField source="email" />
      <TextField source="phone" />
      <TextField source="address" />
      <MyUrlField source="url" />
      <TextField source="role" />
      <MyActiveField source="active" />
      <EditButton />
    </Datagrid>
  </List>
);

export const UserEdit = (props) => (
  <Edit {...props} title={<UserTitle />} undoable={false}>
    <SimpleForm toolbar={<UserEditToolbar />}>
      <TextInput disabled source="id" />
      <NumberInput disabled source="num" />
      <TextInput label="First Name" source="fname" validate={[required()]} />
      <TextInput label="Last Name" source="lname" validate={[required()]} />
      <TextInput
        disabled
        type="email"
        source="email"
        validate={[required(), email()]}
      />
      <TextInput source="phone" validate={[required()]} />
      <TextInput source="address" validate={[required()]} />
      <SelectInput
        label="role"
        source="role"
        validate={[required()]}
        choices={[
          { id: "Administrator", name: "Administrator" },
          { id: "Customer", name: "Customer" },
          { id: "Site Owner", name: "Site Owner" },
        ]}
      />
      <BooleanInput label="Active" source="active" />
    </SimpleForm>
  </Edit>
);

export const UserCreate = (props) => (
  <Create {...props}>
    <SimpleForm save={(data) => UserCreateAuth(props, data)}>
      <TextInput label="First Name" source="fname" validate={[required()]} />
      <TextInput label="Last Name" source="lname" validate={[required()]} />
      <TextInput type="email" source="email" validate={[required(), email()]} />
      <TextInput source="phone" validate={[required()]} />
      <TextInput source="address" validate={[required()]} />
      <TextInput source="password" type="password" validate={[required()]} />
      <SelectInput
        label="role"
        source="role"
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
