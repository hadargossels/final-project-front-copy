

import * as React from "react";
import { List, Datagrid, TextField,EditButton,Edit,Create,SimpleForm,
    ReferenceInput,SelectInput,TextInput,Filter,BooleanInput,
    SimpleFormIterator,ArrayInput,ImageField} from 'react-admin';
import MyActiveField from './MyActiveField';



export const ProductList = props => (
    <List {...props} filters={<UserFilter/>}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <ImageField source="img"/>
            <TextField source="priceSmall" />
            <TextField source="priceBig" />
            <TextField source="stars" />
            <TextField source="new" />
            <MyActiveField source="active" />
            <EditButton />
        </Datagrid>
    </List>
);

export const ProductEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="img" required/>
            <TextInput source="img2" />
            <ArrayInput source="img3">
                <SimpleFormIterator>
                    <TextInput/>
                </SimpleFormIterator>
            </ArrayInput>
            <TextInput source="title" required/>
            <TextInput source="priceSmall" />
            <TextInput source="priceBig" required/>
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
        </SimpleForm>
    </Edit>
);

export const ProductCreate = props => (
        <Create {...props}>
            <SimpleForm>
                <TextInput source="img" required/>
                <TextInput source="img2" />
                <ArrayInput source="img3">
                    <SimpleFormIterator>
                        <TextInput/>
                    </SimpleFormIterator>
                 </ArrayInput>
                <TextInput source="title" required/>
                <TextInput source="priceSmall" />
                <TextInput source="priceBig" required/>
                <TextInput source="alt" />
                <TextInput source="description" />
                <TextInput source="stars" />
                <BooleanInput label="milk" source="milk"  defaultValue={false}/>
                <BooleanInput label="parve" source="parve"  defaultValue={false}/>
                <BooleanInput label="fruit" source="fruit"  defaultValue={false}/>
                <BooleanInput label="shugerFree" source="shugerFree"  defaultValue={false}/>
                <BooleanInput label="glutenFree" source="glutenFree"  defaultValue={false}/>
                <BooleanInput label="new" source="new"  defaultValue={true}/>
                <BooleanInput label="active" source="active"  defaultValue={true}/>
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