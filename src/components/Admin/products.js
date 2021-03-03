import * as React from "react";
import {List, Datagrid, TextField, NumberField, BooleanField} from 'react-admin';


export const ProductList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="name" />
            <NumberField source="price" />
            <TextField source="discount" />
            <TextField source="platforms" />
            <NumberField source="rating" />
            <BooleanField source="bestseller" />
            <BooleanField source="new" />
        </Datagrid>
    </List>
);