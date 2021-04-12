import  React from "react";
import { List, Datagrid, TextField, EmailField, DeleteWithConfirmButton,EditButton,Edit,Create,SimpleForm,SelectInput,TextInput,NumberField,NumberInput,PasswordInput,required,minLength,
    maxLength,regex,email,BooleanField,BooleanInput,SimpleShowLayout,Show,ArrayField,ImageField,ImageInput} from 'react-admin';
import {MyFilter, ActionsButtons, BulkActionButtons, CustomToolbar} from './OptionsBar'
import axios from 'axios'

const validateFirstName = [required(), minLength(2), maxLength(15)];
const validateEmail =[required(), email()];
const validateZipCode = [required(),regex(/^\d{6}$/, 'Must be a valid Zip Code - 6 numbers')];
const validatePhoneNumber = [required(),regex(/^(([+]{0,1}\d{2})|\d?)[\s-]?[0-9]{2}[\s-]?[0-9]{3}[\s-]?[0-9]{4}$/, 
'Must be a valid phone number. Tested for:+94 77 531 2412, +94775312412, 077 531 2412, 0775312412 ')];
const validateAddress = [required(),regex(/^[a-zA-Z]+\s[a-zA-Z0-9]+/, 'Must be a valid address')];
const validateCity = [required(),regex(/^[a-zA-Z]*$/, 'Must be a valid city')];
const validateCountry = [required(),regex(/^[a-zA-Z]*$/, 'Must be a valid country')];
const validatePassword = [required(),regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/, 
'Must be a valid password:Min 1 uppercase letter. Min 1 lowercase letter. Min 1 special character.Min 1 number.Min 8 characters. Max 30 characters.')];

const CartUserDetails = props => (
    <Show {...props} title=" cart lists" >
        <SimpleShowLayout>
        <TextField source="firstName" />
            <ArrayField source="cart.items">
                 <Datagrid>
                <TextField source="count" />
                </Datagrid>
            </ArrayField>
        </SimpleShowLayout>
    </Show>
);
export const UsersList = props => {
   return( 
   <List filters={<MyFilter />} {...props} actions={<ActionsButtons/>} bulkActionButtons={<BulkActionButtons/>}>

                <Datagrid
                      expand={<CartUserDetails />}>
                    <TextField source="id" />
                    <ImageField source="yourImage"/>
                     {/* src={`http://localhost:5000/uploads/${user.yourImage}`} */}
                    <TextField source="firstName" />
                    <TextField source="lastName" />
                    <EmailField source="email"/>
                    <NumberField source="phone" />
                    <TextField source="state" />
                    <TextField source="city" />
                    <TextField source="address" />
                    <NumberField source="zip" />
                    <TextField source="role" />
                    <BooleanField source="activity"/>
                    <EditButton />
                    <DeleteWithConfirmButton/>
                </Datagrid>
            
    </List>



)};

export const UsersEdit = props => {
   return( <Edit title="Edit User" {...props} undoable={false}   toolbar={<CustomToolbar />}>
        <SimpleForm >
           <TextInput  disabled source="id" />
           {/* <ImageInput   source="yourImage" onChange={(e)=>{ 
                   console.log("AGASFASFASFASFA")
                   const formData = new FormData();
                   let file = document.getElementById("yourImage").files[0]
                   console.log( document.getElementById("yourImage"))
                    //formData.append("title", this.state.title);
                    formData.append("file", file);
                    axios.post("/api/uploadfile", formData, {headers:{'Content-Type': 'multipart/form-data'}})
                //    .then(res => console.log(res.data))
                //    .catch(err => console.error(err));

            }}>
                <ImageField source="src" title="title" />
            </ImageInput>   */}
           <TextInput label="First Name" validate={validateFirstName}  source="firstName" />
           <TextInput label="Last Name" validate={validateFirstName}  source="lastName" />
           <TextInput name="email" validate={validateEmail} source="email" />
           <NumberInput   validate={validatePhoneNumber} source="phone" />
           <TextInput validate={validateCountry}   source="state" />
           <TextInput validate={validateCity}   source="city" />
           <TextInput validate={validateAddress}   source="address" />
            <NumberInput label="Zip Code" validate={validateZipCode}  source="zip" />
           <SelectInput defaultValue="customer" source="role" choices={[
                { id: 'Admin', name: 'Admin' },
                { id: 'Customer', name: 'Customer' },
                { id: 'Site Owner', name: 'Site Owner' },
                ]} />
            <BooleanInput source="active"/>
           
        </SimpleForm>
    </Edit>)
};

export const UsersCreate = props => {
   return( 
   <Create   title="Create a User" {...props}>
        <SimpleForm  >
            <TextInput validate={validateFirstName}  source="firstName"/>
            <TextInput validate={validateFirstName}  source="lastName"/>
            <TextInput name="email"  label="Email" validate={validateEmail} source="email"/>
            <NumberInput  validate={validatePhoneNumber}  source="phone" />
            <PasswordInput  validate={validatePassword} source="password" initiallyVisible />
            <TextInput  validate={validateCountry} source="state" />
            <TextInput  validate={validateCity} source="city" />
            <TextInput  validate={validateAddress} source="address" />
            <NumberInput label="Zip Code" validate={validateZipCode}  source="zip" />
            <SelectInput defaultValue="customer" source="role" choices={[
                { id: 'Admin', name: 'Admin' },
                { id: 'Customer', name: 'Customer' },
                { id: 'Site Owner', name: 'Site Owner' },
                ]} />
            <BooleanInput source="activity"/>   
            {/* <ImageInput  source="yourImage" >
                <ImageField source="src" title="title" />
           </ImageInput>  */}
       </SimpleForm>
    </Create>)
};
















