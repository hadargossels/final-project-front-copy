import { auth } from '../../js/firebase';
import { Link } from 'react-router-dom';

export default function Account(props) {

    function signOut() {

        auth().signOut().then(() => {props.history.push("/")}).catch((error) => {alert(error)});
    }

    return(
       <div className="lead" style={{textAlign: "center"}}>
           <br/><br/><br/><br/><br/><br/>

           <img src="/images/logos/logo.png" alt="logo"/><br/><br/>
           <h1>Welcome {props.user.email}</h1><br/>
           <br/>
           <Link to="/account/profile"><button>Profile</button></Link>
           <button onClick={signOut}>Sign Out</button>
            {props.user.email === "a@a.com" ? <Link to="/account/admin"><button>Admin</button></Link> : null}
           <br/><br/><br/><br/>
       </div>
    );
}