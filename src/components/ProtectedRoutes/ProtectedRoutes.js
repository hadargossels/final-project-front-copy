import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import {auth} from "../../fireBase.config"
import {saveUser,removeUser} from '../../actions/userAction'
class ProtectedRoutes extends Component{
    constructor(props){
        super(props);
        this.state={
            // didGlobalUserUpdate:false
        }
    }
    // componentDidMount(){
    //       auth.onAuthStateChanged((user) => {
    //         if (user) {
    //           var uid = user.uid;
    //           this.props.saveUser(user)
         
    //         } else {
    //           this.props.saveUser(null)
    //         }
    //         this.setState({didGlobalUserUpdate:true})
    //       });
    //   }
    render(){
        let {component: Component,...rest}=this.props;
        // if(this.state.didGlobalUserUpdate)
        return(
            <Route {...rest}  render={(props) => {
                if (this.props.user) {
                    console.log("protected ",this.props.user)
                  return <Component {...props} />
                }
                 else {
                    console.log("protected ",this.props.user)
                    return (
                      <Redirect
                        to={{
                          pathname: "/login",
                          state: {
                            from: props.location,
                          },
                        }}/>)
                    }
                }}/>
          
        );
        // else return null
    }
}

const mapStateToProps = store => ({
    user: store.userReducer.user
});


export default connect(mapStateToProps,{saveUser,removeUser})(ProtectedRoutes);
