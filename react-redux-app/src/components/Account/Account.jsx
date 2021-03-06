import { NavLink } from "react-router-dom";
import AccountMenu from '../AccountMenu/AccountMenu';

export default function Account(props) {
    return(
        <div className="lead" style={{textAlign: "center", width: "95%", margin: "0 auto"}}>
            <br/><br/><br/><br/>

            <div className="main-body">
            
            <div>
                <ol className="breadcrumb">
                    <li><NavLink to="/account" style={{textDecoration: "none"}}>Account&nbsp;</NavLink></li>
                </ol>
            </div>

                <div className="row gutters-sm">

                    <AccountMenu {...props} />

                    <div className="col-md-10">
            
                        <div className="card mb-3">
                            <div className="card-body">
                                <div className="row">
                                    <div className="card-body">
                                        <div className="d-flex flex-column align-items-center text-center">
                                            <img src="/images/logos/avatar.png" alt="Avater" className="rounded-circle" width="150"/>
                                            <div className="mt-3">
                                                <h4>{props.user.fname}&nbsp;{props.user.lname}</h4>
                                                <p className="text-muted font-size-sm">{props.user.email}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        <br/><br/><br/><br/><br/><br/>
    </div>
    );
}