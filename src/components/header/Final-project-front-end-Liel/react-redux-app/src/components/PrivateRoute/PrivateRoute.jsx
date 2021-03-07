import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { auth, db } from '../../js/firebase';
import Spinner from '../Spinner/Spinner';

export default class PrivateRoute extends Component {

    constructor(props) {

        super(props);

        this.state = {user: null, timeout: false}
    };

    componentDidMount() {

        auth().onAuthStateChanged(async (user) => {

            if (user) {

                let data;

                await db.on("value", async (snapshot) => {

                    data = await (snapshot.val().users);
                    data = await data[user.uid];

                    this.setState({user: data});
                })
            }
               
        })

        setTimeout(() => { this.setState({timeout: true}); }, 1000);
    }

    render() {

        if (this.state.user) {

            if (this.state.user.active) {

                return <Route {...this.props} component={(props) => <this.props.component {...props} user={this.state.user}/>}/>
            }

            else {

                window.alert("This user has been disabled due to inactivity.\nPlease contact with the store for reactivating.")
                return <Redirect to={{pathname: "/sign-in-up"}}/> 
            }
        }

        else if (!this.state.user && this.state.timeout) {

            return <Redirect to={{pathname: "/sign-in-up"}}/>
        }

        else {
            
            return <div><br/><Spinner/></div>
        }
    }
}
