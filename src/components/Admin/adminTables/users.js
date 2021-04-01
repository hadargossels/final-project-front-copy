import * as React from "react";
import { 
    // useMutation, useTranslate,useRedirect
    BooleanInput, required, Create, EditButton, Edit, SimpleForm, TextInput, SelectInput, List, Datagrid, TextField, EmailField, Toolbar, SaveButton,  BooleanField, NumberField} from 'react-admin';
// import {auth, db} from '../../../firebase'
// import {useAuth} from '../../../contexts/AuthContext'
import {useStyles, MyFilter, ActionsButtons} from '../addOns'


export const UserList = props => (
    <List filters={<MyFilter/>} sort={{ field: 'name', order: 'ASC' }}  actions={<ActionsButtons/>} bulkActionButtons={false} {...props}>
        <Datagrid >
            <TextField source="name" label="First name" />
            <TextField source="lastname" label="Last name" />
            <EmailField source="email" />
            <NumberField source="phone"/>
            <TextField label="Street" source="address.street" />
            <TextField label="Apt" source="address.apt" />
            <TextField label="City" source="address.city" />
            <TextField label="Role" source="role.roleName"  />
            <BooleanField source="active"/>
            <EditButton />
        </Datagrid>
    </List>
)

export const UserEdit = props => (
    <Edit {...props} undoable={false} >
        <SimpleForm toolbar={<CustomToolbar />}>
            <TextInput source="id" disabled/>
            <TextInput source="email" type="email" />
            <TextInput label="First name" source="name"/>
            <TextInput label="Last name" source="lastname" />
            <TextInput source="phone"/>
            <SelectInput source="role" choices={rolesChoices} />
            <TextInput multiline label="Address - Street" source="address.street" />
            <TextInput multiline label="Address 2 (Apt., etc)" source="address.apt" />
            <TextInput label="City" source="address.city"/>
            <BooleanInput source="active"/>
        </SimpleForm>
    </Edit>
)

export const UserCreate = props => (
    <Create {...props} undoable={false}>
        <SimpleForm>
           <TextInput source="email" type="email" validate={required()} />
           <TextInput label="First name" source="name" validate={required()}/>
            <TextInput label="Last name" source="lastname" validate={required()} />
            <TextInput source="phone"/>
            <SelectInput source="role" defaultValue="Customer" choices={rolesChoices} />
            <TextInput multiline label="Address - Street" source="address.street"/>
            <TextInput multiline label="Address 2 (Apt., etc)" source="address.apt" />
            <TextInput label="City" source="address.city"/>
            <BooleanInput label="Active" source="active" defaultValue={true}/>
        </SimpleForm>
    </Create>
)


// export const UserCreate = props => {
//     const {signup} = useAuth()
//     const [mutate] = useMutation();
//     const redirect = useRedirect()
//     const save = React.useCallback(
//         async (values) => {
//             console.log(values.address)
//             await signup(values.email, "123456")
//             await db.child("users").child(auth.currentUser.uid).set(
//                 {
//                     "id":auth.currentUser.uid,
//                     "name":values.name,
//                     "lastname":values.lastname,
//                     "email":values.email,
//                     "phone":values.phone||"",
//                     "roleId":values.roleId,
//                     "address": ! values.address ?
//                         ""
//                         : {"street":values.address.street||"", "apt":values.address.apt||"", "city":values.address.city||""},
//                     "active": values.active
//                 }
//             )
//             redirect("/users")
//         },
//         [mutate],
//     );
    
//     return(
//     <Create {...props} undoable={false}>
//         <SimpleForm save={save}>
//             <TextInput source="email" type="email"  validate={required()} />
//             <TextInput label="First name" source="name" validate={required()}/>
//             <TextInput label="Last name" source="lastname" validate={required()} />
//             <TextInput source="phone"/>
//             <SelectInput source="roleId" defaultValue="Customer" choices={[
//                 { id: 'Admin', name: 'Admin' },
//                 { id: 'Customer', name: 'Customer' },
//                 { id: 'Site Owner', name: 'Site Owner' },
//             ]} />
//             <TextInput multiline label="Address - Street" source="address.street"/>
//             <TextInput multiline label="Address 2 (Apt., etc)" source="address.apt" />
//             <TextInput label="City" source="address.city"/>
//             <BooleanInput label="Active" source="active" defaultValue={true}/>
//         </SimpleForm>
//     </Create>
// )};



//custom toolbar without an option to delete
const CustomToolbar = props => (
    <Toolbar {...props} classes={useStyles()}>
        <SaveButton />
    </Toolbar>
);

let rolesChoices=[
    { id: '60636542545fd24c70ff8d97', name: 'Admin' },
    { id: '60636542545fd24c70ff8d96', name: 'Customer' },
    { id: '60636542545fd24c70ff8d98', name: 'Site Owner' },
]