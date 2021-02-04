import {Link} from 'react-router-dom';

export default function Store() {
    return(
       <div className="lead" style={{textAlign: "center"}}>
           <br/><br/><br/><br/><br/><br/>
           <img src="/images/logos/logo.png" alt="logo"/><br/><br/>
           <h1>Store <h4>(Under Construction)</h4></h1><br/>
           <Link to="/store/products"><h2>View all products</h2></Link>
       </div>
    );
}