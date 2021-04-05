
import * as React from "react";
import { List, Datagrid, TextField, EmailField,EditButton,Edit,ReferenceInput,
    SelectInput,TextInput,Filter,BooleanInput,TabbedForm,FormTab,ArrayField,ImageField} from 'react-admin';
import MyActiveField from './MyActiveField';


export const OrderList = props => (
    <List {...props} filters={<UserFilter/>}>
        <Datagrid >
            <TextField source="id" />
            <TextField source="userOrder.fname" label="first name"/>
            <TextField source="userOrder.lname" label="last name"/>
            <EmailField source="userOrder.email" label="email"/>
            <TextField source="userOrder.phone" label="phone"/>
            <TextField source="userOrder.city" label="city"/>
            <TextField source="date" label="date"/>
            <TextField source="time" label="time"/>
            <TextField source="payment" label="payment"/>
            <MyActiveField source="doneAndSend" />
            <EditButton />
        </Datagrid>
    </List>
);

export const OrderEdit = props => {
    return(
        <Edit {...props}>
            <TabbedForm>

                <FormTab label="cart">
                    <ArrayField source="cart">
                        <Datagrid >
                            <TextField source="productID" label="productID"/>
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
                    <TextField source="userOrder.street" label="street"/>
                    <TextField source="userOrder.houseType" label="houseType"/>
                    <TextField source="userOrder.zipcode" label="zip"/>
                    
                </FormTab>
                <FormTab label="order details">

                    <TextField source="date" label="date"/>
                    <TextField source="time" label="time"/>
                    <TextField source="payment" />
                    <BooleanInput label="doneAndSend" source="doneAndSend" />

                </FormTab>

            </TabbedForm>
        </Edit>
    );
} 

    const UserFilter = (props) => (
        <Filter {...props}>
            <TextInput label="Search" source="q" alwaysOn />
            <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
                <SelectInput optionText="name" />
            </ReferenceInput>
        </Filter>
    );