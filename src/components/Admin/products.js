import * as React from "react";

import { List,
     Datagrid,
      TextField, 
      Create,
       Edit,
        TextInput,
        SelectInput,
        NumberInput,
        EditButton,
    SimpleForm} from 'react-admin';

export const ProductList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="price" />
            <TextField source="rating" />
            <TextField source="title" />
            <TextField source="description" />
            <EditButton basepath="/products" />
        </Datagrid>
    </List>
);

export const ProductCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" />
            <NumberInput source="onsale" />
            <TextInput source="description" />
            <TextInput source="image" />
            <NumberInput source="price" />
            <NumberInput source="rating" />

            <SelectInput source="hardware" choices={[
                { id: 'true', name: 'True' },
                { id: 'false', name: 'False' },
            ]} /> 
        <SelectInput source="accessories" choices={[
                { id: 'true', name: 'True' },
                { id: 'false', name: 'False' },
            ]} /> 
        </SimpleForm>
    </Create>
);

const ProductTitle = ({ record }) => {
    return <span>Product: {record ? `"${record.title}"` : ''}</span>;
}
export const ProductEdit = props => (
    <Edit title={<ProductTitle />} {...props}> 
        <SimpleForm>
            <TextInput source="title" />
            <TextInput source="onsale" />
            <TextInput multiline source="description" />
            <TextInput source="image" />
            <TextInput source="price" />
            <TextInput source="rating" />

            <SelectInput source="hardware" choices={[
                { id: 'true', name: 'True' },
                { id: 'false', name: 'False' },
            ]} /> 
        <SelectInput source="accessories" choices={[
                { id: 'true', name: 'True' },
                { id: 'false', name: 'False' },
            ]} /> 
        </SimpleForm>
    </Edit>
);