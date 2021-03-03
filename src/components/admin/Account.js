import * as React from "react";
// import { useMediaQuery } from '@material-ui/core';


import { List, Datagrid, TextField, EmailField, UrlField,DateField, DeleteButton,EditButton,
        useRefresh,useRedirect, 
        useNotify,
        SimpleList,
        Filter,
        ReferenceField,
        Edit,
        Create,
        SimpleForm,
        ReferenceInput,
        SelectInput,
        TextInput,
        NumberField,
        NumberInput,
        PasswordInput,
        required,
        minLength,
        maxLength,
        minValue,
        maxValue,
        number,
        regex,
        email,
        choices,
        BooleanField,BooleanInput
    } from 'react-admin';
// import MyUrlField from './MyUrlField';
// const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
const validateFirstName = [required(), minLength(2), maxLength(15)];
const validateEmail =[required(), email()];
const validateZipCode = [required(),regex(/^\d{5}$/, 'Must be a valid Zip Code')];
const validatePhoneNumber = [required(),regex(/^(([+]{0,1}\d{2})|\d?)[\s-]?[0-9]{2}[\s-]?[0-9]{3}[\s-]?[0-9]{4}$/, 
'Must be a valid phone number. Tested for:+94 77 531 2412, +94775312412, 077 531 2412, 0775312412 ')];
const validateAddress = [required(),regex(/^[a-zA-Z]+\s[a-zA-Z0-9]+/, 'Must be a valid address')];
const validateCity = [required(),regex(/^[a-zA-Z]*$/, 'Must be a valid city')];
const validateCountry = [required(),regex(/^[a-zA-Z]*$/, 'Must be a valid country')];
const validatePassword = [required(),regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/, 
'Must be a valid password:Min 1 uppercase letter. Min 1 lowercase letter. Min 1 special character.Min 1 number.Min 8 characters. Max 30 characters.')];

const checkIfEmailExist = props =>{
    console.log(props)
}
const UserFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="id" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

export const UserList = props => (
    <List filters={<UserFilter />} {...props}>
        {/* {isSmall ? (
                <SimpleList
                    primaryText={record => record.title}
                    secondaryText={record => `${record.views} views`}
                    tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
                />
            ) : ( */}
            
                <Datagrid>
                    <TextField source="id" />
                    <TextField source="firstName" />
                    <TextField source="lastName" />
                    <EmailField source="email"/>
                    <NumberField source="phoneNumber" />
                    <TextField source="password"/>
                    <TextField source="address" />
                    <TextField source="city" />
                    <TextField source="country" />
                    <NumberField source="postalCode" />
                    <ReferenceField source="roleId" reference="roles">
                        <TextField source="role" />
                    </ReferenceField>
                    <BooleanField source="active"/>
                    <EditButton basePath="/users"/>
                    <DeleteButton basePath="/users"/>
                    
                </Datagrid>
            

            {/* )} */}
    </List>
);

// const UserTitle = ({ record }) => {
//     return <span>Users {record ? `"${record.title}"` : ''}</span>;
//  };
export const UserEdit = props => {
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onSuccess = () => {
        notify(`Changes saved`)
        redirect('/users');
        refresh();
    };
   return( <Edit onSuccess={onSuccess} title="Edit User" {...props}>
        <SimpleForm  validate={checkIfEmailExist} warnWhenUnsavedChanges>
           <TextInput  disabled source="id" />
           <TextInput label="First Name" validate={validateFirstName}  source="firstName" />
           <TextInput label="Last Name" validate={validateFirstName}  source="lastName" />
           <TextInput name="email" label="Email" validate={validateEmail} source="email" />
           <NumberInput   validate={validatePhoneNumber} source="phoneNumber" />
           <PasswordInput validate={validatePassword}   source="password" initiallyVisible />
           <TextInput validate={validateAddress}   source="address" />
           <TextInput validate={validateCity}   source="city" />
            <TextInput validate={validateCountry}   source="country" />
            <NumberInput label="Zip Code" validate={validateZipCode}  source="postalCode" />
           <ReferenceInput  source="roleId" reference="roles">
                <SelectInput defaultValue="customer"  optionText="role" />
            </ReferenceInput>
            <BooleanInput source="active"/>
           
        </SimpleForm>
    </Edit>)
};
export const UserCreate = props => {
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onSuccess = () => {
        notify(`Changes saved`)
        redirect('/users');
        refresh();
    };
   return( <Create onSuccess={onSuccess} title="Create a User" {...props}>
        <SimpleForm  warnWhenUnsavedChanges>
            <TextInput validate={validateFirstName}  source="firstName"/>
            <TextInput validate={validateFirstName}  source="lastName"/>
            <TextInput name="email"  label="Email" validate={validateEmail} source="email" />
            <NumberInput  validate={validatePhoneNumber}  source="phoneNumber" />
            <PasswordInput  validate={validatePassword} source="password" initiallyVisible />
            <TextInput  validate={validateAddress} source="address" />
            <TextInput  validate={validateCity} source="city" />
            <TextInput  validate={validateCountry} source="country" />
            <NumberInput label="Zip Code" validate={validateZipCode}  source="postalCode" />
            <ReferenceInput source="roleId" reference="roles">
                    <SelectInput defaultValue="customer" optionText="role" />
                </ReferenceInput>
            <BooleanInput source="active"/>    
       </SimpleForm>
    </Create>)
};

