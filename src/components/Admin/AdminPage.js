import * as React from "react";

import jsonServerProvider from 'ra-data-json-server';
import { createHashHistory } from 'history';
import { Provider } from 'react-redux';
import createAdminStore from '../../createAdminStore';

import { Admin, Resource} from 'react-admin';
import UserIcon from '@material-ui/icons/Group';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import Dashboard from './Dashboard';
import {UserList, UserEdit, UserCreate} from './users'
import {  RolesList, RoleEdit } from "./roles";

const dataProvider = jsonServerProvider('http://localhost:3000');
const history = createHashHistory();

export default function AdminPage() { 

  return(
  <Provider
    store={createAdminStore({
    dataProvider,
    history
  })}
  >
      <Admin dashboard={Dashboard} dataProvider={dataProvider} history={history}>
        <Resource name="users" list={UserList} edit={UserEdit} icon={UserIcon} create={UserCreate}/>
        <Resource name="roles" list={RolesList} icon={AssignmentIndIcon} edit={RoleEdit}  />
      </Admin>
    </Provider>
  );
}

  