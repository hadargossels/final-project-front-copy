import * as React from "react";
import {
    Filter,
    List,
    Datagrid,
    TextField,
    EmailField,
    EditButton,
    Edit,
    Create,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
    BulkDeleteWithConfirmButton,
    Toolbar,
    SaveButton,
    DeleteWithConfirmButton,
    required,
    ReferenceField,
    BooleanInput
} from 'react-admin';
import MyUrlField from './MyUrlField';
// import { Fragment } from 'react';
import firebase from 'firebase/app'

// const UserBulkActionButtons = props => (
//     <Fragment>
//         <BulkDeleteWithConfirmButton {...props} />
//     </Fragment>
// );

const ProductEditToolbar = props => (
    <Toolbar {...props} >
        <SaveButton />
        <DeleteWithConfirmButton/>
    </Toolbar>
);

const ProductName = ({ record }) => {
    return <span>User {record ? `"${record.name}"` : ''}</span>;
};

// const ProductFilter = (props) => (
//     <Filter {...props}>
//         <TextInput label="Search" source="q" alwaysOn />
//         <ReferenceInput label="Product" source="id" reference="product" allowEmpty>
//             <SelectInput optionText="title" />
//         </ReferenceInput>
//     </Filter>
// );

export const ProductList = props => (
    // <List filters={<UserFilter />} bulkActionButtons={<UserBulkActionButtons />} {...props}>
        <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="ISBN10" />
            <TextField source="format" />
            <TextField source="price" />
            <TextField source="originalPrice" />
            <TextField source="publisher" />
            <EditButton />
            <DeleteWithConfirmButton/>
        </Datagrid>
    </List>
);

let fakeStars = Math.floor(Math.random() * 5) + 1

export const ProductEdit = props => (
    <Edit title={<ProductName />} {...props}>
        <SimpleForm toolbar={<ProductEditToolbar />} save={() => {console.log(firebase.auth().currentUser)}}>
            <SelectInput disabled source="id" />
            <TextInput source="title" validate={[required()]}/>
            <TextInput source="ISBN10" validate={[required()]}/>
            <TextInput source="ISBN13" validate={[required()]}/>
            <TextInput source="format" validate={[required()]}/>
            <TextInput source="pages" />
            <TextInput source="dimensions" />
            <TextInput source="weight" />
            <TextInput source="publisher" validate={[required()]}/>
            <TextInput source="publicationPlace" />
            <TextInput source="language" validate={[required()]}/>
            <TextInput source="originalPrice" validate={[required()]}/>
            <TextInput source="price" />
            <TextInput source="publicationDate" validate={[required()]}/>
            <TextInput source="image" disabled/>
            <TextInput source="author" validate={[required()]}/>
            <TextInput source="artist" validate={[required()]}/>
            <TextInput source="stars"/>
            <TextInput source="quantity" disabled/>
            <TextInput source="description" validate={[required()]}/>
        </SimpleForm>
    </Edit>
);

export const ProductCreate = props => (
    <Create {...props}>
         <SimpleForm>
            <TextInput source="title" validate={[required()]}/>
            <TextInput source="ISBN10" validate={[required()]}/>
            <TextInput source="ISBN13" validate={[required()]}/>
            <TextInput source="format" validate={[required()]}/>
            <TextInput source="pages" />
            <TextInput source="dimensions" />
            <TextInput source="weight" />
            <TextInput source="publisher" validate={[required()]}/>
            <TextInput source="publicationPlace" />
            <TextInput source="language" validate={[required()]}/>
            <TextInput source="originalPrice" validate={[required()]}/>
            <TextInput source="price" />
            <TextInput source="publicationDate" validate={[required()]}/>
            <TextInput source="author" validate={[required()]}/>
            <TextInput source="artist" validate={[required()]}/>
            <TextInput source="stars"/>
            <TextInput source="description" validate={[required()]}/>
         </SimpleForm>
     </Create>
 );