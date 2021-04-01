import * as React from "react";
import { DateInput, Create, Datagrid, Edit, EditButton, List, SimpleForm, TextField, TextInput, DeleteWithConfirmButton, SelectInput, DateField} from "react-admin";
import {MyFilter, ActionsButtons, BulkActionButtons, CustomToolbar} from '../addOns'

export const PostList = (props) => (
    <List  {...props} sort={{ field: 'date', order: 'DESC' }} filters={<MyFilter/>} actions={<ActionsButtons/>} bulkActionButtons={<BulkActionButtons/>} >
        <Datagrid >
            <DateField source="date"/>
            <TextField source="title" />
            <EditButton />
            <DeleteWithConfirmButton/>
        </Datagrid>
    </List>
);

export const PostEdit = props => (
    <Edit {...props} undoable={false}>
        <SimpleForm toolbar={<CustomToolbar />}>
            <TextInput source="id" disabled />
            <DateInput source="date"/>
            <TextInput source="title" />
            <TextInput multiline source="blogtext" />

            <SelectInput source="img" choices={[
                {  id: '/img/blog/post1.jpg' ,name: '/img/blog/post1.jpg'},
                {  id: '/img/blog/post2.jpg' ,name: '/img/blog/post2.jpg'},
                {  id: '/img/blog/post3.jpg' ,name: '/img/blog/post3.jpg'},
                {  id: '/img/blog/post4.jpg' ,name: '/img/blog/post4.jpg'},
                {  id: '/img/blog/post5.jpg' ,name: '/img/blog/post5.jpg'},
                {  id: '/img/blog/post6.jpg' ,name: '/img/blog/post6.jpg'},
                {  id: '/img/blog/post7.jpg' ,name: '/img/blog/post7.jpg'},
                {  id: '/img/blog/post8.jpg' ,name: '/img/blog/post8.jpg'}
            ]} />
            <SelectInput source="bottomType" choices={[
                {  id: 'picture' ,name: 'picture'}
            ]} />
            <SelectInput source="bottomContent" choices={[
                {  id: '/img/blog/bottom/bottom1.jpg' ,name: '/img/blog/bottom/bottom1.jpg'},
                {  id: '/img/blog/bottom/bottom2.jpg' ,name: '/img/blog/bottom/bottom2.jpg'},
                {  id: '/img/blog/bottom/bottom3.jpg' ,name: '/img/blog/bottom/bottom3.jpg'},
                {  id: '/img/blog/bottom/bottom4.jpg' ,name: '/img/blog/bottom/bottom4.jpg'}
            ]} />
        </SimpleForm>
    </Edit>
);

export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <DateInput source="date"/>
            <TextInput source="title" />
            <TextInput multiline source="blogtext" />
            <SelectInput source="img" choices={[
                {  id: '/img/blog/post1.jpg' ,name: '/img/blog/post1.jpg'},
                {  id: '/img/blog/post2.jpg' ,name: '/img/blog/post2.jpg'},
                {  id: '/img/blog/post3.jpg' ,name: '/img/blog/post3.jpg'},
                {  id: '/img/blog/post4.jpg' ,name: '/img/blog/post4.jpg'},
                {  id: '/img/blog/post5.jpg' ,name: '/img/blog/post5.jpg'},
                {  id: '/img/blog/post6.jpg' ,name: '/img/blog/post6.jpg'},
                {  id: '/img/blog/post7.jpg' ,name: '/img/blog/post7.jpg'},
                {  id: '/img/blog/post8.jpg' ,name: '/img/blog/post8.jpg'}
            ]} />
            <SelectInput source="bottomType" choices={[
                {  id: 'picture' ,name: 'picture'}
            ]} />
            <SelectInput source="bottomContent" choices={[
                {  id: '/img/blog/bottom/bottom1.jpg' ,name: '/img/blog/bottom/bottom1.jpg'},
                {  id: '/img/blog/bottom/bottom2.jpg' ,name: '/img/blog/bottom/bottom2.jpg'},
                {  id: '/img/blog/bottom/bottom3.jpg' ,name: '/img/blog/bottom/bottom3.jpg'},
                {  id: '/img/blog/bottom/bottom4.jpg' ,name: '/img/blog/bottom/bottom4.jpg'}
            ]} />
        </SimpleForm>
    </Create>
);