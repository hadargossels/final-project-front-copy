import * as React from "react";
import {ArrayInput, ReferenceInput, SimpleFormIterator, SelectInput, ChipField, List, Datagrid, TextField, NumberField, BooleanField, DeleteWithConfirmButton, SimpleForm, Edit, TextInput, EditButton, BooleanInput, NumberInput, Create} from 'react-admin';
import {MyFilter, ActionsButtons, BulkActionButtons, CustomToolbar} from '../addOns'


export const ProductList = props => (
    <List {...props} sort={{ field: 'name', order: 'ASC' }} filters={<MyFilter/>} actions={<ActionsButtons/>} bulkActionButtons={<BulkActionButtons/>}>
        <Datagrid rowClick="edit">
            <TextField label="Product Name" source="name" />
            <NumberField source="price" />
            <TextField source="discount" />
            <ChipField label="Platform" source="platform" />
            <NumberField source="rating" />
            <BooleanField source="new" />
            <EditButton/>
            <DeleteWithConfirmButton/>
        </Datagrid>
    </List>
);

export const ProductEdit = props =>{
return(
    <Edit {...props} undoable={false}>
        <SimpleForm toolbar={<CustomToolbar />}>
            <TextInput source="id" disabled/>
            <TextInput label="Product Name" source="name"/>
            <ReferenceInput source="platform" reference="platforms">
                <SelectInput optionText="platformName" />
            </ReferenceInput>
            <BooleanInput label="Best-seller" source="bestseller"/>
            <BooleanInput source="new"/>
            <NumberInput source="price"/>
            <NumberInput source="discount"/>
            <NumberInput source="rating"/>
            <BooleanInput source="stock"/>
            <SelectInput source="img" choices={imgChoices} />
            <SelectInput source="imgNarrow" choices={imgNarrowChoices} />
            <SelectInput source="imgSmall" choices={imgSmallChoices} />
            <ArrayInput source="shortDescription">
                <SimpleFormIterator>
                    <TextInput/>
                </SimpleFormIterator>
            </ArrayInput>
            <TextInput multiline source="about"/>
        </SimpleForm>
    </Edit>
)}

export const ProductCreate = props =>(
    <Create {...props}>
        <SimpleForm {...props}>
            <TextInput label="Product Name" source="name"/>
            <ReferenceInput source="platform" reference="platforms">
                <SelectInput optionText="platformName"/>
            </ReferenceInput>
            <BooleanInput label="Best-seller" source="bestseller"/>
            <BooleanInput source="new"/>
            <NumberInput source="price"/>
            <NumberInput source="discount"/>
            <NumberInput source="rating"/>
            <BooleanInput source="stock"/>
            <SelectInput source="img" choices={imgChoices} />
            <SelectInput source="imgNarrow" choices={imgNarrowChoices} />
            <SelectInput source="imgSmall" choices={imgSmallChoices} />
            <ArrayInput source="shortDescription">
                <SimpleFormIterator>
                    <TextInput/>
                </SimpleFormIterator>
            </ArrayInput>
            <TextInput multiline source="about"/>
            
        </SimpleForm>
    </Create>
)

let imgChoices = [
    {  id: '/img/catalog/catalog1.jpg' ,name: '/img/catalog/catalog1.jpg'},
    {  id: '/img/catalog/catalog2.jpg' ,name: '/img/catalog/catalog2.jpg'},
    {  id: '/img/catalog/catalog3.jpg' , name: '/img/catalog/catalog3.jpg'},
    {  id: '/img/catalog/catalog4.jpg' , name: '/img/catalog/catalog4.jpg'},
    {  id: '/img/catalog/catalog5.jpg' , name: '/img/catalog/catalog5.jpg'},
    {  id: '/img/catalog/catalog6.jpg' , name: '/img/catalog/catalog6.jpg'},
    {  id: '/img/catalog/catalog7.jpg' , name: '/img/catalog/catalog7.jpg'},
    {  id: '/img/catalog/catalog8.jpg' , name: '/img/catalog/catalog8.jpg'},
]

let imgNarrowChoices = [
    {  id: '/img/product/narrow1.jpg' ,name: '/img/product/narrow1.jpg'},
    {  id: '/img/product/narrow2.jpg' ,name: '/img/product/narrow2.jpg'},
    {  id: '/img/product/narrow3.jpg' ,name: '/img/product/narrow3.jpg'},
    {  id: '/img/product/narrow4.jpg' ,name: '/img/product/narrow4.jpg'},
    {  id: '/img/product/narrow5.jpg' ,name: '/img/product/narrow5.jpg'},
    {  id: '/img/product/narrow6.jpg' ,name: '/img/product/narrow6.jpg'},
    {  id: '/img/product/narrow7.jpg' ,name: '/img/product/narrow7.jpg'},
    {  id: '/img/product/narrow8.jpg' ,name: '/img/product/narrow8.jpg'}
]

let imgSmallChoices = [
    {  id: '/img/product/small1.jpg' ,name: '/img/product/small1.jpg'},
    {  id: '/img/product/small2.jpg' ,name: '/img/product/small2.jpg'},
    {  id: '/img/product/small3.jpg' ,name: '/img/product/small3.jpg'},
    {  id: '/img/product/small4.jpg' ,name: '/img/product/small4.jpg'},
    {  id: '/img/product/small5.jpg' ,name: '/img/product/small5.jpg'},
    {  id: '/img/product/small6.jpg' ,name: '/img/product/small6.jpg'},
    {  id: '/img/product/small7.jpg' ,name: '/img/product/small7.jpg'},
    {  id: '/img/product/small8.jpg' ,name: '/img/product/small8.jpg'}
]