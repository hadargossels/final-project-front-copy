import  React from "react";
import { List, Datagrid, TextField, EmailField, DeleteButton,EditButton,
        useRefresh,useRedirect, 
        useNotify,
        Filter,
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
        regex,
        email,
        BooleanField,BooleanInput
    } from 'react-admin';
    import { auth, db } from "../../firebase"
    import "firebase/auth"

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
//const currentEmail=""
//const currentPassword ="";
// auth.onAuthStateChanged((user) => {
//     let arr = [];
//         if (user){
//              currentEmail = user.email
//             db.ref('users').on('value', (snapshot)=>{
                
//                 for (let obj in snapshot.val()) {
//                     arr.push(snapshot.val()[obj])
//                 }
//             })
//              currentPassword = arr.password
//         }
// })
const editHandleSubmit = (props ,data) => (
    
    auth.currentUser.updateEmail(data.email).then(function() {
        // Update successful.
      }).then(function() {
        auth.currentUser.updatePassword(data.password)
      })
    .then( () => {
       
         db.ref('users').on('value',async (snapshot)=>{
                 let myData = [];
                for (let obj in snapshot.val()) {
                    myData.push(snapshot.val()[obj])
                }
          });
     })
    .then(async() => {
        auth.onAuthStateChanged(user=>{
            db.ref().child('users').child(user.uid).set({
              active:true,
              address:data.address,
              city:data.city,
              country:data.country,
              email:data.email,
              firstName:data.firstName,
              id:user.uid,
              lastName:data.lastName,
              password:data.password,
              phoneNumber:data.phoneNumber,
              postalCode:data.postalCode,
              role:data.roles,
            })
            props.history.push("/users");

        })    
   
    })
    .catch(() => {
        console.log("edit error")
    })
);



const createHandleSubmit = (props ,data) => (
    auth.createUserWithEmailAndPassword(data.email, data.password)
    // .then(async () => {
    //      db.ref('users').on('value',async (snapshot)=>{
    //              let myData = [];
    //             for (let obj in snapshot.val()) {
    //                 myData.push(snapshot.val()[obj])
    //             }
    //       });
    // })
    .then(() => {   
        auth.onAuthStateChanged(user=>{
            console.log(user.uid)
            if(user.uid){
                db.ref().child('users').child(user.uid).set({
                active:true,
                address:data.address,
                city:data.city,
                country:data.country,
                email:data.email,
                firstName:data.firstName,
                id:user.uid,
                lastName:data.lastName,
                password:data.password,
                phoneNumber:data.phoneNumber,
                postalCode:data.postalCode,
                role:data.roles,
                })
            auth.signOut(); 
        }
             // auth.signInWithEmailAndPassword(currentEmail, currentPassword);
           // props.history.push("/users");

        })     
    })
    .catch(() => {
        console.log("create error")
    })
);
const UserFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="id" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);
const OrderPanel = ({ id, record, resource }) => (
    <div dangerouslySetInnerHTML={{ __html: record.body }} />
);
export const UserList = props => {
    
   return( <List filters={<UserFilter />} {...props} expand={<OrderPanel />}>
            
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
                    <TextField source="role" />
                    <BooleanField source="active"/>
                    <EditButton basePath="/users"/>
                    <DeleteButton basePath="/users"/>
                </Datagrid>
            
    </List>
)};

export const UserEdit = props => {
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onSuccess = () => {
        notify(`Changes saved`)
        redirect('/users');
        refresh();
    };
   return( <Edit  onSuccess={onSuccess} title="Edit User" {...props}>
        <SimpleForm  save={(data) => editHandleSubmit(props ,data)} >
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
           <SelectInput defaultValue="customer" source="roles" choices={[
                { id: 'Admin', name: 'Admin' },
                { id: 'Customer', name: 'Customer' },
                { id: 'Site Owner', name: 'Site Owner' },
                ]} />
            <BooleanInput source="active"/>
           
        </SimpleForm>
    </Edit>)
};
export const UserCreate = props => {
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onSuccess = () => {
        notify(`Created user`)
        redirect('/users');
        refresh();
    };
   return( <Create  onSuccess={onSuccess} title="Create a User" {...props}>
        <SimpleForm  save={(data) => createHandleSubmit(props ,data)}>
            <TextInput validate={validateFirstName}  source="firstName"/>
            <TextInput validate={validateFirstName}  source="lastName"/>
            <TextInput name="email"  label="Email" validate={validateEmail} source="email"/>
            <NumberInput  validate={validatePhoneNumber}  source="phoneNumber" />
            <PasswordInput  validate={validatePassword} source="password" initiallyVisible />
            <TextInput  validate={validateAddress} source="address" />
            <TextInput  validate={validateCity} source="city" />
            <TextInput  validate={validateCountry} source="country" />
            <NumberInput label="Zip Code" validate={validateZipCode}  source="postalCode" />
            <SelectInput defaultValue="customer" source="roles" choices={[
                { id: 'Admin', name: 'Admin' },
                { id: 'Customer', name: 'Customer' },
                { id: 'Site Owner', name: 'Site Owner' },
                ]} />
            <BooleanInput source="active"/>    
       </SimpleForm>
    </Create>)
};

