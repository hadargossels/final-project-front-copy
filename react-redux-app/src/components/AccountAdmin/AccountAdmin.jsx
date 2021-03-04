import { NavLink, Redirect } from 'react-router-dom';
import { Admin, Resource } from 'react-admin';
import AccountAdminDashboard from '../AccountAdminDashboard/AccountAdminDashboard';
import { UserList, UserEdit, UserCreate } from '../AccountAdminUsers/AccountAdminUsers';
import { ProductList, ProductEdit, ProductCreate } from '../AccountAdminProducts/AccountAdminProducts';
import ComputerIcon from '@material-ui/icons/Computer';
import UserIcon from '@material-ui/icons/Group';

import { createHashHistory } from 'history';
import { Provider } from 'react-redux';
import createAdminStore from '../../store/createAdminStore';

import firebaseDataProvider from 'ra-data-firebase-client'
import firebase from '../../js/firebase';

const history = createHashHistory();

export default function AccountAdmin(props) {

    if (props.user.email === "a@a.com") {
        return (
            <Provider store={createAdminStore({history})}>
                <div className="lead" style={{width: "95%", margin: "0 auto"}}>

                    <br/><br/><br/><br/>

                    <div>
                        <ol className="breadcrumb">
                            <li><NavLink to="/account" style={{textDecoration: "none"}}>Account&nbsp;</NavLink></li>
                                / <NavLink to={"/account/admin/"} style={{textDecoration: "none"}}><li className="active">&nbsp;Admin</li></NavLink>
                        </ol>
                    </div>
                    
                    <Admin history={history} dashboard={AccountAdminDashboard} dataProvider={firebaseDataProvider(firebase, {})}>
                        <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} icon={UserIcon}/>
                        {/* <Resource name="users" icon={UserIcon} list={UserList} edit={UserEdit}/> */}
                        <Resource name="products" icon={ComputerIcon} list={ProductList} edit={ProductEdit} create={ProductCreate}/>
                    </Admin>

                    <br/><br/><br/><br/>

                </div>
            </Provider>
        )
    }
    else {
        return <Redirect to={{pathname: "/"}}/>
    }
}
