import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { auth } from '../../js/firebase';
import Spinner from '../Spinner/Spinner';

export default class PrivateRoute extends Component {

    constructor(props) {

        super(props);

        this.state = {user: null, timeout: false}
    };

    componentDidMount() {

        auth().onAuthStateChanged((user) => {

            if (user)
               this.setState({user});
        })

        setTimeout(() => { this.setState({timeout: true}); }, 1000);
    }

    render() {

        if (this.state.user) {
            return <Route {...this.props} component={(props) => <this.props.component {...props} user={this.state.user}/>}/>
        }

        else if (!this.state.email && this.state.timeout)
            return <Redirect to={{pathname: "/sign-in-up"}}/>

        else
            return <div><br/><Spinner/></div>
    }
}
