import { UserList, userCreate,userEdit } from './users';
import {productList, productCreate,productEdit} from './product'
import {blogCreate,blogEdit,blogList} from './blog'
import {commentCreate,commentEdit,commentList} from './comment'
import {faqCreate,faqEdit,faqList} from './faq'
import {shippingCreate,shippingEdit,shippingList} from './shipping'
import {storeInfoCreate,storeInfoEdit,storeInfoList} from './storeInfo'
import * as React from "react";
import { fetchUtils, Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import { Login, Layout } from "../../react-admin-demo-js/layout";
import  authProvider  from "../../react-admin-demo-js/authProvider";
import { Dashboard } from "../../react-admin-demo-js/dashboard";

const httpClient = (url, options = {}) => {
  options.user = {
      authenticated: true,
      token: `Bearer breakTheKeyboard`
  };
  return fetchUtils.fetchJson(url, options);
};

const dataProvider = simpleRestProvider('http://localhost:5000',httpClient);


const Administrator = () => (

    <Admin dataProvider={dataProvider}
    // title=""
    // customReducers={{ theme: themeReducer }}
    // customRoutes={customRoutes}
    authProvider={authProvider}
    dashboard={Dashboard}
    loginPage={Login}
    layout={Layout}
    >
      
           <Resource name="user" list={UserList} edit={userEdit} create={userCreate}/>
           <Resource name="product" list={productList} edit={productEdit} create={productCreate}/>
           <Resource name="blog" list={blogList} edit={blogEdit} create={blogCreate}/>
           <Resource name="comment" list={commentList} edit={commentEdit} create={commentCreate}/>
           <Resource name="faq" list={faqList} edit={faqEdit} create={faqCreate}/>
           <Resource name="shipping" list={shippingList} edit={shippingEdit} create={shippingCreate}/>
           <Resource name="storeInfo" list={storeInfoList} edit={storeInfoEdit} create={storeInfoCreate}/>
           <Resource name="dashboard"/>
           {/* <div class="RaUserMenu-user-19"><button class="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit" tabindex="0" type="button" aria-label="Profile" aria-haspopup="true" title="Profile"><span class="MuiIconButton-label"><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path></svg></span></button></div> */}
           
    </Admin>
    
);


export default Administrator;