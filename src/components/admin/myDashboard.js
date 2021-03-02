

import React, { Component } from 'react'
import { Admin, Resource } from 'react-admin';
import { UserList, UserEdit, UserCreate } from './Users';
import UserIcon from '@material-ui/icons/Group';
import jsonServerProvider from 'ra-data-json-server';
import Dashboard from './Dashboard';

const dataProvider = jsonServerProvider(' http://localhost:3000');

export default class myDashboard extends Component {
    render() {
        return (
            <div>
                 <Admin dashboard={Dashboard} dataProvider={dataProvider}>
                        {/* <Resource name="posts" list={PostList} /> */}
                        <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} icon={UserIcon}/>
                    </Admin>
            </div>
        )
    }
}
