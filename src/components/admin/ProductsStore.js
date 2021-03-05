import * as React from "react";


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
        BooleanField,BooleanInput,ImageInput,ImageField,SimpleFormIterator,ArrayInput
    } from 'react-admin';
    import { auth, db } from "../../firebase"
    import "firebase/auth"
const validatePrice = [required(),regex(/^\d{0,8}(\.\d{1,4})?$/, 
'Must be a valid price number (contain only number).')];
const validateRating = [required(),regex(/[0-5]/, 'Must be a valid rating integer number between 0-5')];
const validateCompany =[required()]
const validateTitle =[required()]
const validateType =[required()]
const validateImg=[required()]
const validateInfo=[required()]

const ProductFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="Products" source="id" reference="storeProducts" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);
// const editHandleSubmit = (props ,data) => (
    
//     // auth.currentUser.updateEmail(data.email).then(function() {
//     //     // Update successful.
//     //   }).then(function() {
//     //     auth.currentUser.updatePassword(data.password)
//     //   })
//     // .then(async () => {
       
//          db.ref('storeProducts').on('value',async (snapshot)=>{
//                  let myData = [];
//                 for (let obj in snapshot.val()) {
//                     myData.push(snapshot.val()[obj])
//                 }
//           })
//      //})
//     .then(async() => {
//         auth.onAuthStateChanged(product=>{
            
//             db.ref().child('storeProducts').child(product.uid).set({
//               active:true,
//               title:data.title,
//               id:product.uid,
//               img:data.img.src,
//               company:data.company,
//               type:data.type,
//               info:data.info,
//               price:data.price,
//               rating:data.rating,
//               sale:data.sale

//             })
//             //window.location.href = "/admin/users" ;
//             props.history.push("/storeProducts");

//         })    
   
//     })
//     .catch(() => {
//         console.log("edit error")
//     })
// );



// const createHandleSubmit = (props ,data) => (
//     console.log(data)

//     .then(async () => { db.ref('storeProducts').on('value',async (snapshot)=>{
//                  let myData = [];
//                 for (let obj in snapshot.val()) {
//                     myData.push(snapshot.val()[obj])
//                 }
//           })
//         })
//     .then(async() => {   
//         auth.onAuthStateChanged(product=>{
//             db.ref().child('storeProducts').child(product.uid).set({
//                 active:true,
//                 title:data.title,
//                 id:product.uid,
//                 img:data.img.src,
//                 company:data.company,
//                 type:data.type,
//                 info:data.info,
//                 price:data.price,
//                 rating:data.rating,
//                 sale:data.sale
  
//               })
//             auth.signOut(); 
//              // auth.signInWithEmailAndPassword(currentEmail, currentPassword);
//             props.history.push("/storeProducts");

//         })     
//     })
//     .catch(() => {
//         console.log("create error")
//     })
// );


export const ProductsList = props => (
    <List filters={<ProductFilter />} {...props}>
                <Datagrid>
                    <TextField source="id" />
                    <TextField source="title"/>
                    <ImageField source="img.src"/>
                    <TextField source="company" />
                    <TextField source="type"/>
                    <TextField source="info"/>
                    <NumberField source="price" />
                    <NumberField source="rating"/>
                    <BooleanField source="sale"/>
                    <EditButton />
                    <DeleteButton />      
                </Datagrid>
    </List>
);
export const ProductsEdit = props => {
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onSuccess = () => {
        notify(`Changes saved`)
        redirect('/storeProducts');
        refresh();
    };
   return( <Edit onSuccess={onSuccess} title="Edit Product" {...props} undoable={false}
   >
        <SimpleForm >
           <TextInput  disabled source="id" />
           <TextInput validate={validateCompany} required source="company" />
           <SelectInput validate={validateType} required source="type" choices={[
                { id: 'helmet', name: 'helmet' },
                { id: 'bike', name: 'Bike' },
                { id: 'scooter', name: 'scooter' },
                ]} />
            <ImageInput validate={validateImg} required source="img" >
                <ImageField source="src" title="title" />
            </ImageInput>           
            <TextInput validate={validateInfo} required source="info" />
           <NumberInput validate={validatePrice} source="price" />
           <NumberInput validate={validateRating} source="rating" />
           <TextInput validate={validateTitle}  required source="title" />
           <BooleanInput defaultValue={false} source="sale"/>
           {/* <ArrayInput source="shortDescription">
                <SimpleFormIterator>
                    <TextInput/>
                </SimpleFormIterator>
            </ArrayInput> */}

        </SimpleForm>
    </Edit>)
};
export const ProductsCreate = props => {
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onSuccess = () => {
        notify(`Created  product`)
        redirect('/storeProducts');
        refresh();
    };
   return( <Create onSuccess={onSuccess} title="Create a Product" {...props}>
        <SimpleForm >
        <TextInput   disabled source="id" />
        <TextInput  disabled  defaultValue={0} source="count" />
        <TextInput disabled defaultValue={false} source="inCart" />
        <TextInput disabled defaultValue={0} source="total" />
        <TextInput validate={validateCompany}  source="company" />
        <TextInput validate={validateTitle}  source="title" />
        <SelectInput validate={validateType} source="type" choices={[
                { id: 'helmet', name: 'helmet' },
                { id: 'bike', name: 'Bike' },
                { id: 'scooter', name: 'scooter' },
                ]} />
        <ImageInput validate={validateImg} required source="img" >
            <ImageField source="src" title="title" />
        </ImageInput>
        <TextInput validate={validateInfo} source="info" />
        <NumberInput  validate={validatePrice} source="price" />
        <NumberInput validate={validateRating} source="rating" />
        <BooleanInput defaultValue={false} source="sale"/>
       </SimpleForm>
    </Create>)
};

