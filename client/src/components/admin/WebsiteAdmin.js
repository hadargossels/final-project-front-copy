import * as React from "react";
import { Admin, Resource } from 'react-admin';
import { UserList, UserEdit, UserCreate } from './users';
import { PostList, PostEdit, PostCreate } from './posts';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import firebaseDataProvider from 'ra-data-firebase-client';
import firebase from 'firebase/app'
import "firebase/database";


const WebsiteAdmin = () => {
  let dataProvider = firebaseDataProvider(firebase, {})
  return (
    <Admin dataProvider={dataProvider}>
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
        <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} icon={UserIcon}/>
    </Admin>
  );

} 

export default WebsiteAdmin;