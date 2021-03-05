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
const validatePrice = [required(),regex(/^\d{0,8}(\.\d{1,4})?$/, 
'Must be a valid price number (contain only number).')];
const validateRating = [required(),regex(/[0-5]/, 'Must be a valid rating integer number between 0-5')];
const validateCompany =[required()]
const validateTitle =[required()]
const validateType =[required()]
const validateImg=[required()]
const validateInfo=[required()]
const OrdersFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="Products" source="id" reference="storeProducts" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

export const OrdersList = props => (
    <List filters={<OrdersFilter />} {...props}>
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
export const OrdersEdit = props => {
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
                { id: '1', name: 'helmet' },
                { id: '2', name: 'Bike' },
                { id: '3', name: 'scooter' },
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
export const OrdersCreate = props => {
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onSuccess = () => {
        notify(`Created  product`)
        redirect('/storeProducts');
        refresh();
    };
   return( <Create onSuccess={onSuccess} title="Create a Product" {...props}>
        <SimpleForm>
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

