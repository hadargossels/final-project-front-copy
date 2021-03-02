import React, { Component } from 'react';
import './AdminMain.css';
import { Admin, Resource } from 'react-admin';
import { PostList, PostEdit, PostCreate } from './posts';
import { UserList, UserCreate, UserEdit } from './users';
import jsonServerProvider from 'ra-data-json-server';
import { RoleCreate, RoleEdit, RoleList } from "./roles";
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import LabelIcon from '@material-ui/icons/Label';
import Dashboard from './Dashboard';
import authProvider from './authProvider';

class AdminMain extends Component {
    render () {
        const dataProvider = jsonServerProvider('http://localhost:3001');
        return(    
            <Admin dashboard={Dashboard} dataProvider={dataProvider} authProvider={authProvider}>
                <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
                <Resource name="users" list={UserList} create={UserCreate} edit={UserEdit} icon={UserIcon}/>
                <Resource name="roles" list={RoleList} edit={RoleEdit} create={RoleCreate} icon={LabelIcon}/>
            </Admin>
        )
    }
}

export default AdminMain;