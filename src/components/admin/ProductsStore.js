import * as React from "react";

import {MyFilter, ActionsButtons, BulkActionButtons, CustomToolbar} from './OptionsBar'

import { List, Datagrid, TextField,EditButton, Edit, Create,SimpleForm,SelectInput,TextInput, NumberField,NumberInput,required, minLength,
        maxLength,regex,DeleteWithConfirmButton,BooleanField,BooleanInput,ImageInput,ImageField } from 'react-admin';
const validatePrice = [required(),regex(/^\d{0,8}(\.\d{1,4})?$/, 
'Must be a valid price number (contain only number).')];
const validateRating = [required(),regex(/[0-5]/, 'Must be a valid rating integer number between 0-5'),minLength(0), maxLength(5)];
const validateCompany =[required()]
const validateTitle =[required()]
const validateType =[required()]
const validateImg=[required()]
const validateInfo=[required()]



export const ProductsList = props => (
    
    <List filters={<MyFilter/>} actions={<ActionsButtons/>} bulkActionButtons={<BulkActionButtons/>} {...props}>
                <Datagrid>
                    <TextField source="id" />
                    <TextField source="title"/>
                    <ImageField source="img"/>
                    <NumberField source="price" />
                    <TextField source="company" />
                    <TextField source="type"/>
                    <TextField source="info"/>
                    <NumberField source="rating"/>
                    <BooleanField source="sale"/>
                    <TextField source="userId"/>
                    <EditButton />
                    <DeleteWithConfirmButton/>    
                </Datagrid>
    </List>
);
export const ProductsEdit = props => {
    // const notify = useNotify();
    // const refresh = useRefresh();
    // const redirect = useRedirect();

    // const onSuccess = () => {
    //     notify(`Changes saved`)
    //     redirect('/storeProducts');
    //     refresh();
    // };
    var userId = localStorage.getItem("usernameID");

   return( <Edit  title="Edit Product" {...props} undoable={false} toolbar={<CustomToolbar />}>
        <SimpleForm >
           <TextInput  disabled source="id" />
           <TextInput validate={validateCompany}  source="company" />
           <SelectInput validate={validateType}  source="type" choices={[
                { id: 'helmet', name: 'helmet' },
                { id: 'bike', name: 'Bike' },
                { id: 'scooter', name: 'scooter' },
                ]} />
            {/* <ImageInput validate={validateImg} required source="img" >
                <ImageField source="src" title="title" />
            </ImageInput>            */}
            <TextInput validate={validateInfo} required source="info" />
           <NumberInput validate={validatePrice} source="price" />
           <NumberInput validate={validateRating} source="rating" />
           <TextInput validate={validateTitle}  required source="title" />
           <BooleanInput defaultValue={false} source="sale"/>
           <TextInput disabled  source="userId" />

        </SimpleForm>
    </Edit>)
};
export const ProductsCreate = props => {
    var userID = localStorage.getItem("usernameID");
    userID=JSON.parse(userID)
   return( <Create  title="Create a Product" {...props}>
        <SimpleForm >
        <TextInput validate={validateCompany}  source="company" />
        <TextInput validate={validateTitle}  source="title" />
        <SelectInput validate={validateType} source="type" choices={[
                { id: 'helmet', name: 'helmet' },
                { id: 'bike', name: 'Bike' },
                { id: 'scooter', name: 'scooter' },
                ]} />
        {/* <ImageInput validate={validateImg} required source="img" >
            <ImageField source="src" title="title" />
        </ImageInput> */}
        <TextInput validate={validateInfo} source="info" />
        <NumberInput  validate={validatePrice} source="price" />
        <NumberInput validate={validateRating} source="rating" />
        <BooleanInput defaultValue={false} source="sale"/>
        <TextInput   source= {userID} />
       </SimpleForm>
    </Create>)
};

