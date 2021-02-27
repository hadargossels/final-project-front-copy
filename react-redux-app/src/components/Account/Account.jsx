import { auth } from '../../js/firebase';

export default function Account(props) {

    function signOut() {

        auth().signOut().then(() => {props.history.push("/")}).catch((error) => {alert(error)});
    }

    return(
       <div className="lead" style={{textAlign: "center"}}>
           <br/><br/><br/><br/><br/><br/>

           <img src="/images/logos/logo.png" alt="logo"/><br/><br/>
           <h1>Welcome {props.email}</h1><br/>
           <br/>
           <button onClick={signOut}>Sign Out</button>

           <br/><br/><br/><br/>
       </div>
    );
}