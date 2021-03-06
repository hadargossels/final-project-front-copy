

import React, { Component } from 'react'
import './Account.css';
import {auth} from '../firebase'
import Auth from './auth'
import "firebase/database";
import {db} from '../firebase'



export default class Account extends Component {

    constructor(props){
        super(props)
        this.state={
         user:"",
         userId:""

        }

        this.updateUserData=this.updateUserData.bind(this)
        this.getDataFromFirebase=this.getDataFromFirebase.bind(this)

        this.emailRef= React.createRef()
        this.formRef= React.createRef()
    }

    componentDidMount(){
       this.getDataFromFirebase()
      }

      updateUserData(e){

        auth.onAuthStateChanged(user=>{
  
           if(user){
            console.log(user.uid)
            let data={
              "id":user.uid,
              "firstName":e[0].value,
              "lastName":e[1].value,
              "email":e[3].value,
              "phone":e[2].value,
              "address":{
                 "street":e[4].value,
                 "city":e[5].value,
                 "type":e[6].value,
                 "zipcode":e[7].value
              },
            //   password:e[4].value,
              "role":"user",
              "active":true
            }
            db.child('users').child(user.uid).set(data)
           }
        })
      }

      async getDataFromFirebase(){

        const formData= this.formRef.current
        let userData
        let userUid

       await auth.onAuthStateChanged(user=>{
          if(user)
           this.setState({userId:user.uid})
       })

       userUid=this.state.userId
        db.on('value', (snapshot)=>{
          if(snapshot.val()!=null){
            userData=snapshot.val().users[userUid]
            this.setState({user: userData})
  
            formData[0].value=userData.firstName
            formData[1].value=userData.lastName
            formData[2].value=userData.phone
            formData[3].value=userData.email
            formData[4].value=userData.address.street
            formData[5].value=userData.address.city
            formData[6].value=userData.address.type
            formData[7].value=userData.address.zipcode

          } 
        })
      }

      deleteUser(){

           let bool= window.confirm("האם אתה בטוח שתרצה למחוק את המשתמש?");

           if(bool){
            auth.signOut().then(() => {
              // Sign-out successful.
              
                 Auth.setProtectPath(() => {this.props.history.push("/");},"account")
                 Auth.setName("אורח")
                 Auth.logout()             
            })
            //.then(db.child('users').child(this.state.userId).remove())
            
           }
      }



    render() {
        return (
            <div>
               <div className="myContainerAccount">
               <div className="container myForm">
                    <div className="row gutters">
                      <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 ">
                        <div className="card h-100">
                          <div className="card-body ">
                            <div className="account-settings">
                              <div className="user-profile">
                                <div className="user-avatar">
                                  <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="Maxwell Admin"/>
                                </div>
                                <h4 className="user-name">{this.state.user.firstName} {this.state.user.lastName}</h4>
                                <h5 className="user-email">{this.state.user.email}</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                        <div className="card h-100">
                          <form className="card-body" method="POST" onSubmit={(e)=>{e.preventDefault(); this.updateUserData(e.target)}} ref={this.formRef}>
                            <div className="row gutters">
                              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <h5 className="mb-3 text-primary">פרטי המשתמש</h5>
                              </div>
                              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="form-group">
                                  <label htmlFor="fullName">שם פרטי</label>
                                  <input type="text" className="form-control" id="fullName" placeholder="הכנס שם פרטי"/>
                                </div>
                              </div>
                              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="form-group">
                                  <label htmlFor="website">שם משפחה</label>
                                  <input type="text" className="form-control" id="website" placeholder="הכנס שם משפחה"/>
                                </div>
                              </div>
                              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="form-group">
                                  <label htmlFor="phone">פלאפון</label>
                                  <input type="text" className="form-control" id="phone" placeholder="הכנס מספר פלאפון"/>
                                </div>
                              </div>
                              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="form-group">
                                  <label htmlFor="eMail">דוא"ל</label>
                                  <input type="email" className="form-control" id="eMail" placeholder='הכנס דוא"ל' ref={this.emailRef}/>
                                </div>
                              </div>
                            </div>
                            <div className="row gutters">
                              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <h5 className="my-3 text-primary">כתובת</h5>
                              </div>
                              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="form-group">
                                  <label htmlFor="Street">רחוב ומספר בית</label>
                                  <input type="name" className="form-control" id="Street" placeholder="הכנס רחוב ומספר בית"/>
                                </div>
                              </div>
                              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="form-group">
                                  <label htmlFor="ciTy">עיר</label>
                                  <input type="name" className="form-control" id="ciTy" placeholder="הכנס עיר"/>
                                </div>
                              </div>
                              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="form-group">
                                  <label htmlFor="sTate">סוג מבנה</label>
                                  <input type="text" className="form-control" id="sTate" placeholder="בית פרטי/דירה/יח' דיור..."/>
                                </div>
                              </div>
                              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="form-group">
                                  <label htmlFor="zIp">מיקוד</label>
                                  <input type="text" className="form-control" id="zIp" placeholder="הכנס מיקוד"/>
                                </div>
                              </div>
                            </div>
                            <div className="row gutters">
                              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="text-right">
                                  <button type="button" name="submit" className="btn btn-secondary m-1 mt-4" onClick={()=>this.deleteUser()}>מחק</button>
                                  <button type="submit" id="submit" name="submit" className="btn btn-primary m-1 mt-4" >עדכן</button>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    </div>
              </div>
            </div>
        )
    }
}
