import {Redirect, Route} from 'react-router-dom'
import {useAuth} from '../../context/AuthContext'

export default function PrivateRoute({component: Component, ...rest}) {
    const { currentUser, currentUserDB } = useAuth()
    
    return (
        <Route
            {...rest}
            render={props => {
                return (currentUser && currentUserDB && currentUserDB.role == 'admin') ? 
                    <Component {...props} /> : <Redirect to="/login" />
            }}
        >
        </Route>
    )
}
