
import React, { Component } from 'react';import './Header.css';
import { Link,NavLink } from 'react-router-dom';
import {auth} from '../firebase'
import Auth from './auth'
import firebase from 'firebase/app'
import 'firebase/auth'


class Header extends Component{

   constructor(props){
      super(props)
      this.state={
         urlValue:"",
         name:Auth.getName(),
         well:"",
      }
      this.callRef= React.createRef()
      this.LogInRef= React.createRef()
      this.SignUpRef= React.createRef()
      this.errorMessageRef= React.createRef()
      this.welcomeRef=React.createRef()
      this.modalRef=React.createRef()

      this.setUrl=this.setUrl.bind(this)
      this.resetUrl=this.resetUrl.bind(this)
      this.logIn=this.logIn.bind(this)
      this.signOut=this.signOut.bind(this)
      this.logInGoogle=this.logInGoogle.bind(this)
      this.logInFaceBook=this.logInFaceBook.bind(this)

      
   }

   componentDidMount(){

      this.SignUpRef.current.style.display="none"
      this.welcomeRef.current.style.display="none"
   }

   setUrl(){
      this.setState({urlValue: this.callRef.current.value})
   }
   resetUrl(){
      this.setState({urlValue:""})
   }

   switcherWin(){

      const login =this.LogInRef.current
      const Signup= this.SignUpRef.current

      if(Signup.style.display==="none"){
         Signup.style.display="block"
         login.style.display="none"
      }else{
         Signup.style.display="none"
         login.style.display="block"
      }
   }


   logIn(e){
      console.log("log")

      const modal=this.modalRef.current
      const login =this.LogInRef.current
      const welcome=this.welcomeRef.current
     
      auth.signInWithEmailAndPassword(e[1].value, e[2].value)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        //Auth.login(() => { this.props.history.push("/protect")})
        Auth.setName(e[1].value)
        this.setState({name:Auth.getName()})
         this.setState({well:"שלום"})

        login.style.display="none"
        welcome.style.display="block"
        e[2].value=""
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage)
      });
  
    }

    signIn(e){
      console.log("in")
      const welcome=this.welcomeRef.current
      const Signup= this.SignUpRef.current
      const msg=this.errorMessageRef.current
      const login =this.LogInRef.current

      if(e[3].value===e[4].value){

         auth.createUserWithEmailAndPassword(e[2].value, e[3].value)
         .then((userCredential) => {
           // Signed in 
           var user = userCredential.user;
           this.setState({well:"המשתמש הוסף בהצלחה"})

            Signup.style.display="none"
            welcome.style.display="block"

            setTimeout(() => {
               welcome.style.display="none"
               login.style.display="block"
            }, 3000);

           for(let i=1;i<5;i++){
              e[i].value=""
           }
           //Auth.login(() => { this.props.history.push("/protect")})
         })
         .catch((error) => {
           var errorCode = error.code;
           var errorMessage = error.message;

           msg.innerHTML= errorMessage
           setTimeout(() => {
            msg.innerHTML= ""
         }, 4000);
           
     
           // ..
         });
      }else{
         msg.innerHTML="הסיסמאות לא תואמות*"
         setTimeout(() => {
            msg.innerHTML=""
         }, 4000);
      }
    }

    signOut(e){

      const welcome=this.welcomeRef.current
      const login =this.LogInRef.current
      const Signup= this.SignUpRef.current


      auth.signOut().then(() => {
         // Sign-out successful.
         this.setState({well:"ביי"})
         setTimeout(() => {
            welcome.style.display="none"
            Signup.style.display="none"
            login.style.display="block"
            Auth.setName("אורח")
            this.setState({name:Auth.getName()})
         }, 2500);
        

       }).catch((error) => {
         // An error happened.
       });

    }

    logInGoogle(e){
      

            const welcome=this.welcomeRef.current
            const login =this.LogInRef.current

            var provider = new firebase.auth.GoogleAuthProvider();

            auth
            .signInWithPopup(provider)
            .then((result) => {
               /** @type {firebase.auth.OAuthCredential} */
               var credential = result.credential;

               // This gives you a Google Access Token. You can use it to access the Google API.
               var token = credential.accessToken;
               // The signed-in user info.
               var user = result.user;
               // ...
               Auth.setName(user.displayName)
            this.setState({name:Auth.getName()})
               this.setState({well:"שלום"})

            login.style.display="none"
            welcome.style.display="block"
            }).catch((error) => {
               // Handle Errors here.
               var errorCode = error.code;
               var errorMessage = error.message;
               // The email of the user's account used.
               var email = error.email;
               // The firebase.auth.AuthCredential type that was used.
               var credential = error.credential;
               // ...
               console.log(errorMessage)
            });
         }

   logInFaceBook(){

      const welcome=this.welcomeRef.current
      const login =this.LogInRef.current
      var provider = new firebase.auth.FacebookAuthProvider();

          
      auth
      .signInWithPopup(provider)
      .then((result) => {
         /** @type {firebase.auth.OAuthCredential} */
         var credential = result.credential;

         // The signed-in user info.
         var user = result.user;

         // This gives you a Facebook Access Token. You can use it to access the Facebook API.
         var accessToken = credential.accessToken;
         Auth.setName(user.displayName)
         this.setState({name:Auth.getName()})
            this.setState({well:"שלום"})

         login.style.display="none"
         welcome.style.display="block"
      })
      .catch((error) => {
         // Handle Errors here.
         var errorCode = error.code;
         var errorMessage = error.message;
         // The email of the user's account used.
         var email = error.email;
         // The firebase.auth.AuthCredential type that was used.
         var credential = error.credential;

         // ...
      });
      
   }
   
   render() {
      return(
         <div>
            
         <nav className="navbar navbar-expand-lg navbar-dark fs-5" style={{backgroundImage:"linear-gradient(to left, rgb(93,0,29) , black)"}}>
            <div className="container-fluid col-8">
            <div className="myLogo" style={{"backgroundImage":"url(/images/logo3.png)"}}></div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
               <ul className="navbar-nav">
               <li className="nav-item ms-3">
                  <NavLink to="/" className="nav-link active" aria-current="page" href="#" onClick={this.resetUrl}>ראשי</NavLink>
               </li>
               <li className="nav-item ms-3">
                  <NavLink to="/Catalog" className="nav-link" href="#" onClick={this.resetUrl,this.props.filterSearch}>המוצרים שלנו</NavLink>
               </li>
               <li className="nav-item ms-3">
                  <NavLink to="/Courses" className="nav-link" href="#" onClick={this.resetUrl}>סדנאות</NavLink>
               </li>
               <li className="nav-item ms-3">
                  <NavLink to="/Recipes" className="nav-link" href="#" onClick={this.resetUrl}>מתכונים</NavLink>
               </li>
               <li className="nav-item ms-3">
                  <NavLink to="/Contact" className="nav-link" href="#" onClick={this.resetUrl}>צור קשר</NavLink>
               </li>
               </ul>
            </div>
            
            <input id="serchInput" className="form-control mr-sm-2 ms-3 " type="search" placeholder="Search" ref={this.callRef} onChange={this.setUrl} value={this.state.urlValue}/>
            <Link to={"/Catalog?q="+this.state.urlValue}><button id="serchBtn" className="btn btn-outline-success my-2 my-sm-0 " type="submit" onClick={this.setUrl}>חפש</button></Link>
           
           
                            
                        
            <span className="navbar-text" id="userIconSpan"><i className="fas fa-user userIcon" data-bs-toggle="modal" data-bs-target= "#userIcon" data-bs-whatever="@mdo"></i><span id="hello">שלום, {Auth.getName()}</span></span>
            <NavLink to="/Cart"><span className="navbar-text" href="#" onClick={this.resetUrl}><i className="fas fa-shopping-cart"></i></span></NavLink>
            
         </div>
         </nav>


          {/* ////////////////   modal-quick-view   ////////////////////// */}


          <div className="modal fade" id="userIcon" ref={this.modalRef}  tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{textAlign: "right"}}>


            <div className="modal-dialog" ref={this.LogInRef}>
               <form className="modal-content"  method="POST" onSubmit={(e)=>{e.preventDefault(); this.logIn(e.target)}}>
                  <div className="modal-header">
                     <button type="button" className="btn" data-bs-dismiss="modal" aria-label="Close" style={{float: "left"}}>✖</button>
                     <h5 className="modal-title" id="exampleModalLabel">התחבר</h5>
                  </div>
                  <div className="modal-body fs-4">
                     <div style={{direction:"rtl"}}>
                        <div className="mb-3">
                           <label htmlFor="userName" className="col-form-label"> מייל:</label>
                           <input type="email" className="form-control" id="userName" style={{direction:"ltr"}}/>
                        </div>
                        <div className="mb-3">
                           <label htmlFor="passwordName" className="col-form-label">סיסמא:</label>
                           <input type="password" className="form-control" id="passwordName"/>
                        </div>
                     </div>
                  </div>
                  <div className="modal-footer">
                     <button type="button" className="btn btn-outline-success me-4"  onClick={()=>this.switcherWin()}>לחץ להרשמה</button>
                    <span style={{fontSize: "22px"}}> ?!?! עדיין לא נרשמת </span>
                    
                  </div>
                  <div className="modal-footer">
                     <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">סגור</button>
                     <button type="submit" className="btn btn-primary" id="signIn">שלח</button>
                  </div>
                  <button type="button" className="btn btn-primary" id="googleBtn" onClick={(e)=>this.logInGoogle(e)}>התחבר דרך חשבון גוגל</button>
                  <button type="button" className="btn btn-primary" id="faceBookBtn" onClick={(e)=>this.logInFaceBook(e)}>התחבר דרך חשבון פייסבוק</button>
               </form>
               
               

            </div>


            <div className="modal-dialog" ref={this.welcomeRef}>
               <div className="modal-content">
                  <div className="modal-header">
                     <button type="button" className="btn" data-bs-dismiss="modal" aria-label="Close" style={{float: "left"}}>✖</button>
                  </div>
                  <div className="modal-body fs-4">
                  {Auth.getName()} ,{this.state.well} 
                  </div>
                 
                  <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">סגור</button>
                     <button type="button" className="btn btn-primary" id="signOut" onClick={(e)=>this.signOut(e.id)}>התנתק</button>
                  </div>
               </div>
            </div>


            <div className="modal-dialog" ref={this.SignUpRef}>
               <form className="modal-content" method="POST" onSubmit={(e)=>{e.preventDefault(); this.signIn(e.target)}}>
                  <div className="modal-header">
                     <button type="button" className="btn" data-bs-dismiss="modal" aria-label="Close" style={{float: "left"}}>✖</button>
                     <h5 className="modal-title" id="exampleModalLabel">הרשם</h5>
                  </div>
                  <div className="modal-body fs-4">
                     <p id="citycheck" style={{color: "red"}} ref={this.errorMessageRef} className="vlidMassege"></p>
                     <div style={{direction:"rtl"}}>
                        <div className="mb-3">
                           <label htmlFor="user-name" className="col-form-label">שם משתמש:</label>
                           <input type="text" className="form-control" id="user-name"/>
                        </div>
                        <div className="mb-3">
                           <label htmlFor="user-name" className="col-form-label" >מייל:</label>
                           <input type="email" className="form-control" id="user-mail" style={{direction:"ltr"}}/>
                        </div>
                        <div className="mb-3">
                           <label htmlFor="password" className="col-form-label">סיסמא:</label>
                           <input type="password" className="form-control" id="password" />
                        </div>
                        <div className="mb-3">
                           <label htmlFor="passwordCheck" className="col-form-label">אימות סיסמא:</label>
                           <input type="password" className="form-control" id="passwordCheck"/>
                        </div>
                     </div>
                  </div>
                  <div className="modal-footer">
                     <button type="button" className="btn btn-outline-success me-4"  onClick={()=>this.switcherWin()}> חזרה לחלון התחברות</button>
                    
                  </div>

                  <div className="modal-footer">
                     <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">סגור</button>
                     <button type="submit" className="btn btn-primary">שלח</button>
                  </div>
               </form>
            </div>
            </div>
                {/* ////////////////   modal-quick-view end  ////////////////////// */}

         </div>
      );
   }
}

export default Header;