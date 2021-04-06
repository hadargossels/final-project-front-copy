import React, {useState, useEffect} from 'react'
import {Container, Card, Button} from 'react-bootstrap'
import {Link, useHistory} from 'react-router-dom'
import {logIn, logOut} from '../../actions'
import {connect} from 'react-redux';
import axios from 'axios';
import Spinner from '../../components/Spinner/Spinner'

function Account(props) {
    const history = useHistory()
    const [user, setUser ] = useState(null)

    useEffect(() => {
        if (props.match.params.token){
            localStorage.setItem("token",props.match.params.token)
            props.logIn()
            history.push("/account")
        }
        axios.post(`${process.env.REACT_APP_SERVER}/auth/userfromtoken`, {token:localStorage.getItem("token")}).then(response=>{
            setUser(response.data)
        })
    }, [props,history])

    function handleLogout(){
        localStorage.removeItem("token")
        props.logOut()
        history.push("/login")
    }
    return (
        <Container className="d-flex align-items-center justify-content-center py-5">
            <div className="w-100" style={{maxWidth:"400px"}}>
                <Card>
                    {user?
                        <Card.Body>
                            <h2 className="text-center mb-4">Account</h2>
                            <strong>Email: </strong>
                            {user?user.email:""}
                            <Link to="/account/profile">
                                <Button className="w-100 my-2" type="submit">Profile</Button>
                            </Link>
                            <Link to="/account/invoices">
                                <Button className="w-100 my-2" type="submit">Purchase History</Button>
                            </Link>
                        </Card.Body>
                    : <Spinner/>}
                </Card>
                <div className="w-100 text-center mt-2">
                    <Button variant="link" onClick={handleLogout}>Log out</Button>
                </div>
            </div>
        </Container>
    )
}

const mapStateToProps = state => ({
    loggedIn: state.user.loggedIn
 })
 
 export default connect(mapStateToProps, {logIn, logOut})(Account)