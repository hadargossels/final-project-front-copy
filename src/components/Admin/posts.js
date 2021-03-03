import * as React from "react";
import {  List, Datagrid, TextField} from 'react-admin';

//post filter later maybe by title, also all other options

export const PostList = (props) => (
    <List  {...props}>
        <Datagrid >
            <TextField source="date"/>
            <TextField source="title" />
        </Datagrid>
    </List>
);

// const PostTitle = ({ record }) => {
//     return <span>Post {record ? `"${record.title}"` : ''}</span>;
// }

// export const PostEdit = props => (
//     <Edit title={<PostTitle />} {...props}>
//         <SimpleForm>
//             <TextInput source="id" />
//             <ReferenceInput source="userId" reference="users">
//                 <SelectInput optionText="name" />
//             </ReferenceInput>
//             <TextInput source="title" />
//             <TextInput multiline source="body" />

//         </SimpleForm>
//     </Edit>
// );

// export const PostCreate = props => (
//     <Create {...props}>
//         <SimpleForm>
//             <ReferenceInput source="userId" reference="users">
//                 <SelectInput optionText="name" />
//             </ReferenceInput>
//             <TextInput source="title" />
//             <TextInput multiline source="body" />
//         </SimpleForm>
//     </Create>
// );