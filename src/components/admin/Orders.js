
import * as React from "react";
import { List, Datagrid, TextField, EmailField,EditButton,Edit,Create,SimpleForm,
    ReferenceInput,SelectInput,TextInput,Filter,BooleanInput,RefreshButton,
    ExportButton,CreateButton,TabbedForm,FormTab,ArrayField,ImageField} from 'react-admin';
import MyActiveField from './MyActiveField';
import { makeStyles } from '@material-ui/core';


const ProductActionsButtons = props => (
    <div>
        <RefreshButton />
        <ExportButton />
        <CreateButton />
    </div>
);


export const OrderList = props => (
    <List {...props} filters={<UserFilter/>}>
        <Datagrid >
            <TextField source="id" />
            <TextField source="userOrder.fname" label="first name"/>
            <TextField source="userOrder.lname" label="last name"/>
            <EmailField source="userOrder.email" label="email"/>
            <TextField source="userOrder.phone" label="phone"/>
            <TextField source="userOrder.city" label="city"/>
            <TextField source="date.date" label="date"/>
            <TextField source="date.time" label="time"/>
            <TextField source="payment" label="payment"/>
            <MyActiveField source="doneAndSend" />
            <EditButton />
            {/* <ActivationButton source="active"/> */}
        </Datagrid>
    </List>
);
const useStyles = makeStyles({
    row: {
        fontSize:"25px",
        fontWeight:"bold",
    },
});

export const OrderEdit = props => {
    const classes = useStyles();
    return(
        <Edit {...props}>
            <TabbedForm>

                <FormTab label="cart">
                    <ArrayField source="cart">
                        {/* <Datagrid classes={{ expandIconCell: classes.row ,headerCell:classes.row}}> */}
                        <Datagrid >
                            <TextField source="id" label="id product"/>
                            <TextField source="title" />
                            <ImageField source="img" label="image"/>
                            <TextField source="count" />
                            <TextField source="price" />
                            <TextField source="size" />
                        </Datagrid>
                    </ArrayField>
                </FormTab>

                <FormTab label="user order">

                    <TextField source="userOrder.fname" label="first name"/>
                    <TextField source="userOrder.lname" label="last name"/>
                    <EmailField source="userOrder.email" label="email"/>
                    <TextField source="userOrder.phone" label="phone"/>
                    <TextField source="userOrder.city" label="city"/>
                    <TextField source="userOrder.address" label="street"/>
                    <TextField source="userOrder.houseType" label="houseType"/>
                    <TextField source="userOrder.zip" label="zip"/>
                    
                </FormTab>
                <FormTab label="order details">

                    <TextField source="date.date" label="date"/>
                    <TextField source="date.time" label="time"/>
                    <TextField source="payment" />
                    <BooleanInput label="doneAndSend" source="doneAndSend" />

                </FormTab>

            </TabbedForm>
        </Edit>
    );
} 

export const UserActivation = props => (
    // <Edit {...props}>
        console.log(props)
    // </Edit>
);

export const OrderCreate = props => (
        <Create {...props}>
            <SimpleForm>
            <TextInput source="img" />
            <TextInput source="img2" />
            <TextInput source="img3" />
            <TextInput source="title" />
            <TextInput source="priceSmall" />
            <TextInput source="priceBig" />
            <TextInput source="alt" />
            <TextInput source="description" />
            <TextInput source="stars" />
            <BooleanInput label="milk" source="milk" />
            <BooleanInput label="parve" source="parve" />
            <BooleanInput label="fruit" source="fruit" />
            <BooleanInput label="shugerFree" source="shugerFree" />
            <BooleanInput label="glutenFree" source="glutenFree" />
            <BooleanInput label="new" source="new" />
            <BooleanInput label="active" source="active" />
                {/* <ReferenceInput label="role" source="role" reference="users">
                    <SelectInput optionText="name" />
                </ReferenceInput> */}
            </SimpleForm>
        </Create>
    );

    const UserFilter = (props) => (
        <Filter {...props}>
            <TextInput label="Search" source="q" alwaysOn />
            <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
                <SelectInput optionText="name" />
            </ReferenceInput>
        </Filter>
    );