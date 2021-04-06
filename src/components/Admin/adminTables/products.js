import * as React from "react";
import {Toolbar, SaveButton, required, ImageInput, ImageField, ArrayInput, ReferenceInput, SimpleFormIterator, SelectInput, ChipField, List, Datagrid, TextField, NumberField, BooleanField, SimpleForm, Edit, TextInput, EditButton, BooleanInput, NumberInput, Create} from 'react-admin';
import {MyFilter, ActionsButtons, BulkActionButtons, CustomDeleteButton, useStyles} from '../addOns'


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
            <CustomDeleteButton basePath="/products" undoable={false} type="Product" field="name"/>
        </Datagrid>
    </List>
);

export const ProductEdit = props =>{
return(
    <Edit {...props} undoable={false}>
        <SimpleForm toolbar={<ProductToolbar />}>
            <TextInput source="id" disabled/>
            <TextInput label="Product Name" source="name"/>
            <ReferenceInput source="platform" reference="platforms">
                <SelectInput optionText="platformName" />
            </ReferenceInput>
            <ArrayInput source="images" validate={[required()]}>
                <SimpleFormIterator disableAdd disableRemove>
                    <TextInput label="Title" source="title" disabled/>
                    <BooleanInput label="Active" source="active"/>
                </SimpleFormIterator>
            </ArrayInput>
            <BooleanInput label="Best-seller" source="bestseller"/>
            <BooleanInput source="new"/>
            <NumberInput source="price"/>
            <NumberInput source="discount"/>
            <NumberInput source="rating"/>
            <BooleanInput source="stock"/>
            <ArrayInput source="shortDescription">
                <SimpleFormIterator>
                    <TextInput/>
                </SimpleFormIterator>
            </ArrayInput>
            <TextInput multiline source="about"/>
            <ImageInput multiple source="pictures" label="Drop some pictures to upload, or click to select one (up to 10MB)." accept="image/*">
                <ImageField source="src" title="title" />
            </ImageInput>
        </SimpleForm>
    </Edit>
)}

export const ProductCreate = props=>
{
    let newProps = {...props}
    delete newProps.hasList;
    delete newProps.hasCreate;
    delete newProps.hasEdit;
    delete newProps.hasShow;
return (
    <Create {...newProps}>
        <SimpleForm {...newProps}>
            <TextInput label="Product Name" source="name"/>
            <ReferenceInput label="Platform" source="platform" reference="platforms">
                <SelectInput optionText="platformName"/>
            </ReferenceInput>
            <BooleanInput label="Best-seller" source="bestseller"/>
            <BooleanInput source="new"/>
            <NumberInput source="price"/>
            <NumberInput source="discount"/>
            <NumberInput source="rating"/>
            <BooleanInput source="stock"/>
            <ArrayInput source="shortDescription">
                <SimpleFormIterator>
                    <TextInput/>
                </SimpleFormIterator>
            </ArrayInput>
            <TextInput multiline source="about"/>
            <ImageInput multiple source="pictures" accept="image/*" label="Drop some pictures to upload, or click to select one (up to 10MB)." validate={[required()]}>
                <ImageField source="src" title="title" />
            </ImageInput>
        </SimpleForm>
    </Create>
)}

const ProductToolbar = props => (
    <Toolbar {...props} classes={useStyles()}>
        <SaveButton />
        <CustomDeleteButton basePath="/products" undoable={false} type="Product" field="name"/>
    </Toolbar>
);