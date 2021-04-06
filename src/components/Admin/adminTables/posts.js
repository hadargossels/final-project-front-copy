import * as React from "react";
import { Toolbar, SaveButton, ArrayInput,required, SimpleFormIterator, BooleanInput, ImageInput, ImageField, DateInput, Create, Datagrid, Edit, EditButton, List, SimpleForm, TextField, TextInput, DateField} from "react-admin";
import {MyFilter, ActionsButtons, BulkActionButtons, CustomDeleteButton, useStyles} from '../addOns'

export const PostList = (props) => (
    <List  {...props} sort={{ field: 'date', order: 'DESC' }} filters={<MyFilter/>} actions={<ActionsButtons/>} bulkActionButtons={<BulkActionButtons/>} >
        <Datagrid >
            <DateField source="date"/>
            <TextField source="title" />
            <EditButton />
            <CustomDeleteButton basePath="/posts" undoable={false} type="Post" field="title"/>
        </Datagrid>
    </List>
);

export const PostEdit = props => (
    <Edit {...props} undoable={false}>
        <SimpleForm toolbar={<PostToolbar />}>
            <TextInput source="id" disabled />
            <DateInput source="date"/>
            <TextInput source="title" />
            <ArrayInput source="images" validate={[required()]}>
                <SimpleFormIterator disableAdd disableRemove>
                    <TextInput label="Title" source="title" disabled/>
                    <BooleanInput label="Active" source="active"/>
                </SimpleFormIterator>
            </ArrayInput>
            <TextInput multiline source="blogtext" />
            <ImageInput multiple source="pictures" label="Drop some pictures to upload, or click to select one (up to 10MB)." accept="image/*">
                <ImageField source="src" title="title" />
            </ImageInput>
        </SimpleForm>
    </Edit>
);

export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <DateInput source="date"/>
            <TextInput source="title" />
            <TextInput multiline source="blogtext" />
            <ImageInput multiple source="pictures" label="Drop some pictures to upload, or click to select one (up to 10MB)." accept="image/*">
                <ImageField source="src" title="title" />
            </ImageInput>
        </SimpleForm>
    </Create>
);

const PostToolbar = props => (
    <Toolbar {...props} classes={useStyles()}>
        <SaveButton />
        <CustomDeleteButton basePath="/posts" undoable={false} type="Post" field="title"/>
    </Toolbar>
);