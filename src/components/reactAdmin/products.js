import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    NumberField,
    Edit,
    Create,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
    Filter,
    AutocompleteInput,
    ChipField,
    ImageField,
    ImageInput,
    NumberInput,
    EditButton,
    DeleteButton
} from 'react-admin';
import MyNumberField from './MyNumberField'

export const ProductEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <ImageInput source="image" label="Related pictures" accept="image/*">
                <ImageField source="src" />
            </ImageInput>
            <TextInput source="product name" />
            <AutocompleteInput source="category" choices={[
                { id: 'Phone', name: 'Phone' },
                { id: 'Accessory', name: 'Accessory' }
            ]} />
            <NumberInput source="price" />
            <NumberInput source="stock" />
            <AutocompleteInput source="rating" choices={[
                { id: '1', name: '1' },
                { id: '2', name: '2' },
                { id: '3', name: '3' },
                { id: '4', name: '4' },
                { id: '5', name: '5' }
            ]} />
        </SimpleForm>
    </Edit>
);

export const ProductCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ImageInput source="image" label="Related pictures" accept="image/*">
                <ImageField source="src" />
            </ImageInput>
            <TextInput source="product name" />
            <AutocompleteInput source="category" choices={[
                { id: 'Phone', name: 'Phone' },
                { id: 'Accessory', name: 'Accessory' }
            ]} />
            <NumberInput source="price" />
            <NumberInput source="stock" />
            <AutocompleteInput source="rating" choices={[
                { id: '1', name: '1' },
                { id: '2', name: '2' },
                { id: '3', name: '3' },
                { id: '4', name: '4' },
                { id: '5', name: '5' }
            ]} />
        </SimpleForm>
    </Create>
);

const ProductFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="Product" source="id" reference="products" allowEmpty>
            <SelectInput optionText="product name" />
        </ReferenceInput>
    </Filter>
);

export const ProductList = props => (
    <List filters={<ProductFilter />} {...props}>
        <Datagrid rowClick="edit">
            <ImageField source="image" />
            <TextField source="product name" />
            <ChipField source="category" />
            <NumberField source="price" options={{ style: 'currency', currency: 'USD' }} />
            <MyNumberField source="stock" />
            <NumberField source="rating" />
            <DeleteButton mutationMode="pessimistic" />
            <EditButton />
        </Datagrid>
    </List>
);