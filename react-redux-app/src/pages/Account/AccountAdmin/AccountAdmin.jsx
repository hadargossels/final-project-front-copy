import { NavLink, Redirect } from 'react-router-dom';
import { Admin, Resource } from 'react-admin';
import AccountAdminDashboard from '../../../components/Account/AccountAdminDashboard/AccountAdminDashboard';
import { UserList, UserEdit, UserCreate } from '../../../components/Account/AccountAdminUsers/AccountAdminUsers';
import { ProductList, ProductEdit, ProductCreate } from '../../../components/Account/AccountAdminProducts/AccountAdminProducts';
import { OrderList, OrderEdit } from '../../../components/Account/AccountAdminOrders/AccountAdminOrders';
import { CouponList, CouponEdit, CouponCreate } from '../../../components/Account/AccountAdminCoupons/AccountAdminCoupons';
import ComputerIcon from '@material-ui/icons/Computer';
import UserIcon from '@material-ui/icons/Group';
import ReceiptIcon from '@material-ui/icons/Receipt';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import CommentIcon from '@material-ui/icons/Comment';

import { createHashHistory } from 'history';
import { Provider } from 'react-redux';
import createAdminStore from '../../../store/createAdminStore';

import firebaseDataProvider from 'ra-data-firebase-client'
import firebase from '../../../functions/firebase';

const history = createHashHistory();

export default function AccountAdmin(props) {

    if (props.user.role === "Administrator") {
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
                        <Resource name="coupons" list={CouponList} edit={CouponEdit} create={CouponCreate} icon={LoyaltyIcon}/>
                        <Resource name="orders" list={OrderList} edit={OrderEdit} icon={ReceiptIcon}/>
                        <Resource name="post" icon={CommentIcon}/>
                        <Resource name="products" list={ProductList} edit={ProductEdit} create={ProductCreate} icon={ComputerIcon}/>
                        <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} icon={UserIcon}/>
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
