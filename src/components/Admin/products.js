import * as React from "react";
import {BulkDeleteWithConfirmButton,ArrayInput, SimpleFormIterator, SelectInput, ChipField, List, Datagrid, TextField, NumberField, BooleanField, DeleteWithConfirmButton, SimpleForm, Edit, Toolbar, SaveButton, TextInput, EditButton, BooleanInput, NumberInput, Create, RefreshButton, ExportButton, CreateButton} from 'react-admin';

import { makeStyles, Chip } from '@material-ui/core';

export const ProductList = props => (
    <List {...props} actions={<ProductActionsButtons/>} bulkActionButtons={<ProductBulkActionButtons/>}>
        <Datagrid rowClick="edit">
            <TextField label="Product Name" source="name" />
            <NumberField source="price" />
            <TextField source="discount" />
            <ChipField source="platforms" />
            <NumberField source="rating" />
            <BooleanField source="bestseller" />
            <BooleanField source="new" />
            <EditButton/>
            <DeleteWithConfirmButton/>
        </Datagrid>
    </List>
);

const ProductBulkActionButtons = props => (
    <BulkDeleteWithConfirmButton {...props} />
)

const ProductActionsButtons = props => (
    <div>
        <RefreshButton {...props}/>
        <ExportButton {...props}/>
        <CreateButton {...props}/>
    </div>
)


export const ProductEdit = props =>(
    <Edit {...props} undoable={false}>
        <SimpleForm toolbar={<CustomToolbar />}>
            <TextInput source="id" disabled/>
            <TextInput label="Product Name" source="name"/>
            <SelectInput source="platforms" choices={[
                {  id: 'PlayStation4' ,name: 'PlayStation4'},
                {  id: 'Nintendo Switch' ,name: 'Nintendo Switch'},
                {  id: 'Computer' , name: 'Computer'},
            ]} />
            <BooleanInput label="Best-seller" source="bestseller"/>
            <BooleanInput source="new"/>
            <NumberInput source="price"/>
            <NumberInput source="discount"/>
            <NumberInput source="rating"/>
            <BooleanInput source="stock"/>
            <SelectInput source="img" choices={[
                {  id: '/img/catalog/catalog1.jpg' ,name: '/img/catalog/catalog1.jpg'},
                {  id: '/img/catalog/catalog2.jpg' ,name: '/img/catalog/catalog2.jpg'},
                {  id: '/img/catalog/catalog3.jpg' , name: '/img/catalog/catalog3.jpg'},
                {  id: '/img/catalog/catalog4.jpg' , name: '/img/catalog/catalog4.jpg'},
                {  id: '/img/catalog/catalog5.jpg' , name: '/img/catalog/catalog5.jpg'},
                {  id: '/img/catalog/catalog6.jpg' , name: '/img/catalog/catalog6.jpg'},
                {  id: '/img/catalog/catalog7.jpg' , name: '/img/catalog/catalog7.jpg'},
                {  id: '/img/catalog/catalog8.jpg' , name: '/img/catalog/catalog8.jpg'},
            ]} />
            <SelectInput source="imgNarrow" choices={[
                {  id: '/img/product/narrow1.jpg' ,name: '/img/product/narrow1.jpg'},
                {  id: '/img/product/narrow2.jpg' ,name: '/img/product/narrow2.jpg'},
                {  id: '/img/product/narrow3.jpg' ,name: '/img/product/narrow3.jpg'},
                {  id: '/img/product/narrow4.jpg' ,name: '/img/product/narrow4.jpg'},
                {  id: '/img/product/narrow5.jpg' ,name: '/img/product/narrow5.jpg'},
                {  id: '/img/product/narrow6.jpg' ,name: '/img/product/narrow6.jpg'},
                {  id: '/img/product/narrow7.jpg' ,name: '/img/product/narrow7.jpg'},
                {  id: '/img/product/narrow8.jpg' ,name: '/img/product/narrow8.jpg'}
            ]} />
            <SelectInput source="imgSmall" choices={[
                {  id: '/img/product/small1.jpg' ,name: '/img/product/small1.jpg'},
                {  id: '/img/product/small2.jpg' ,name: '/img/product/small2.jpg'},
                {  id: '/img/product/small3.jpg' ,name: '/img/product/small3.jpg'},
                {  id: '/img/product/small4.jpg' ,name: '/img/product/small4.jpg'},
                {  id: '/img/product/small5.jpg' ,name: '/img/product/small5.jpg'},
                {  id: '/img/product/small6.jpg' ,name: '/img/product/small6.jpg'},
                {  id: '/img/product/small7.jpg' ,name: '/img/product/small7.jpg'},
                {  id: '/img/product/small8.jpg' ,name: '/img/product/small8.jpg'}
            ]} />
            <ArrayInput source="shortDescription">
                <SimpleFormIterator>
                    <TextInput/>
                </SimpleFormIterator>
            </ArrayInput>
            <TextInput multiline source="about"/>
            
        </SimpleForm>
    </Edit>
)

export const ProductCreate = props =>(
    <Create {...props} undoable={false}>
        <SimpleForm toolbar={<CustomToolbar />}>
            <TextInput label="Product Name" source="name"/>
            <SelectInput source="platforms" choices={[
                {  id: 'PlayStation4' ,name: 'PlayStation4'},
                {  id: 'Nintendo Switch' ,name: 'Nintendo Switch'},
                {  id: 'Computer' , name: 'Computer'},
            ]} />
            <BooleanInput label="Best-seller" source="bestseller"/>
            <BooleanInput source="new"/>
            <NumberInput source="price"/>
            <NumberInput source="discount"/>
            <NumberInput source="rating"/>
            <BooleanInput source="stock"/>
            <SelectInput source="img" choices={[
                {  id: '/img/catalog/catalog1.jpg' ,name: '/img/catalog/catalog1.jpg'},
                {  id: '/img/catalog/catalog2.jpg' ,name: '/img/catalog/catalog2.jpg'},
                {  id: '/img/catalog/catalog3.jpg' , name: '/img/catalog/catalog3.jpg'},
                {  id: '/img/catalog/catalog4.jpg' , name: '/img/catalog/catalog4.jpg'},
                {  id: '/img/catalog/catalog5.jpg' , name: '/img/catalog/catalog5.jpg'},
                {  id: '/img/catalog/catalog6.jpg' , name: '/img/catalog/catalog6.jpg'},
                {  id: '/img/catalog/catalog7.jpg' , name: '/img/catalog/catalog7.jpg'},
                {  id: '/img/catalog/catalog8.jpg' , name: '/img/catalog/catalog8.jpg'},
            ]} />
            <SelectInput source="imgNarrow" choices={[
                {  id: '/img/product/narrow1.jpg' ,name: '/img/product/narrow1.jpg'},
                {  id: '/img/product/narrow2.jpg' ,name: '/img/product/narrow2.jpg'},
                {  id: '/img/product/narrow3.jpg' ,name: '/img/product/narrow3.jpg'},
                {  id: '/img/product/narrow4.jpg' ,name: '/img/product/narrow4.jpg'},
                {  id: '/img/product/narrow5.jpg' ,name: '/img/product/narrow5.jpg'},
                {  id: '/img/product/narrow6.jpg' ,name: '/img/product/narrow6.jpg'},
                {  id: '/img/product/narrow7.jpg' ,name: '/img/product/narrow7.jpg'},
                {  id: '/img/product/narrow8.jpg' ,name: '/img/product/narrow8.jpg'}
            ]} />
            <SelectInput source="imgSmall" choices={[
                {  id: '/img/product/small1.jpg' ,name: '/img/product/small1.jpg'},
                {  id: '/img/product/small2.jpg' ,name: '/img/product/small2.jpg'},
                {  id: '/img/product/small3.jpg' ,name: '/img/product/small3.jpg'},
                {  id: '/img/product/small4.jpg' ,name: '/img/product/small4.jpg'},
                {  id: '/img/product/small5.jpg' ,name: '/img/product/small5.jpg'},
                {  id: '/img/product/small6.jpg' ,name: '/img/product/small6.jpg'},
                {  id: '/img/product/small7.jpg' ,name: '/img/product/small7.jpg'},
                {  id: '/img/product/small8.jpg' ,name: '/img/product/small8.jpg'}
            ]} />
            <ArrayInput source="shortDescription">
                <SimpleFormIterator>
                    <TextInput/>
                </SimpleFormIterator>
            </ArrayInput>
            <TextInput multiline source="about"/>
            
        </SimpleForm>
    </Create>
)

//confirm before deleting
const CustomToolbar = props => (
    <Toolbar {...props} classes={useStyles()}>
        <SaveButton />
        <DeleteWithConfirmButton/>
    </Toolbar>
);

//displaying array items
const useStyles = makeStyles({
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
    },
});

const TextArrayField = ({ record, source }) => {
    const array = record[source]
    if (typeof array === 'undefined' || array === null || array.length === 0) {
      return <div/>
    } else {
      return (
        <>
          {array.map(item => <Chip label={item} key={item}/>)}
        </>
      )    
    }
}
TextArrayField.defaultProps = { addLabel: true }
