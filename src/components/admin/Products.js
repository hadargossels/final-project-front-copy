

import * as React from "react";
import { List, Datagrid, TextField, EmailField,ReferenceField,EditButton,Edit,Create,SimpleForm,
    ReferenceInput,SelectInput,TextInput, DeleteButton,Filter,BooleanInput,AutocompleteInput,email,required,RefreshButton,
    ExportButton,CreateButton,ImageField} from 'react-admin';
import MyActiveField from './MyActiveField';
import ActivationButton from './ActivationButton';


const UserActionsButtons = props => (
    <div>
        <RefreshButton {...props}/>
        <ExportButton {...props}/>
        <CreateButton {...props}/>
    </div>
);

export const ProductList = props => (
    <List filters={<UserFilter />} actions={<UserActionsButtons/>} {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <ImageField source="img"/>
            <TextField source="priceSmall" />
            <EmailField source="priceBig" />
            <TextField source="stars" />
            <TextField source="new" />
            <MyActiveField source="active" />
            <EditButton />
            {/* <ActivationButton source="active"/> */}
        </Datagrid>
    </List>
);

export const ProductEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="img" />
            <TextInput source="img2" />
            <TextInput source="img3" />
            <TextInput source="title" />
            <TextInput source="priceSmall" />
            <TextInput source="priceBig" />
            <TextInput source="alt" />
            <TextInput source="description" />
            <TextInput source="stars" />
            <BooleanInput label="active" source="milk" />
            <BooleanInput label="active" source="parve" />
            <BooleanInput label="active" source="fruit" />
            <BooleanInput label="active" source="shugerFree" />
            <BooleanInput label="glutenFree" source="glutenFree" />
            <BooleanInput label="active" source="new" />
            <BooleanInput label="active" source="active" />
            
            {/* <ReferenceInput label="role" source="role" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput> */}
                
        </SimpleForm>
    </Edit>
);

export const UserActivation = props => (
    // <Edit {...props}>
        console.log(props)
    // </Edit>
);

export const ProductCreate = props => (
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