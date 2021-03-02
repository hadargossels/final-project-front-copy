import { NavLink, Redirect } from 'react-router-dom';
import { Admin, Resource } from 'react-admin';
import { UserList, UserEdit, UserCreate } from '../AccountAdminUsers/AccountAdminUsers';
import UserIcon from '@material-ui/icons/Group';
import jsonServerProvider from 'ra-data-json-server';

import { createHashHistory } from 'history';
import { Provider } from 'react-redux';
import createAdminStore from '../../store/createAdminStore';

const history = createHashHistory();
const dataProvider = jsonServerProvider('http://localhost:3001');

export default function AccountAdmin(props) {

    if (props.user.email === "a@a.com") {
        return (
            <Provider store={createAdminStore({dataProvider, history})}>
                <div className="lead" style={{width: "95%", margin: "0 auto"}}>

                    <br/><br/><br/><br/>

                    <div>
                        <ol className="breadcrumb">
                            <li><NavLink to="/account" style={{textDecoration: "none"}}>Account&nbsp;</NavLink></li>
                                / <NavLink to={"/account/admin/"} style={{textDecoration: "none"}}><li className="active">&nbsp;Admin</li></NavLink>
                        </ol>
                    </div>
                    
                    <Admin history={history} dataProvider={dataProvider}>
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
