import React, {useState} from 'react'
import {Container, Card, Button, Alert} from 'react-bootstrap'
import {useAuth} from '../../contexts/AuthContext'
import {Link, useHistory} from 'react-router-dom'
import {logOut} from '../../actions'
import {connect} from 'react-redux';


function Account(props) {
    const [error,setError] = useState("")
    const {currentUser, logout} = useAuth()
    const history = useHistory()

    async function handleLogout(){
        setError('')
        try {
            await logout()
            localStorage.removeItem("login")
            props.logOut()
            history.push("/login")
        } catch (error) {
            setError("Log out failed")
        }
    }
    return (
        <Container className="d-flex align-items-center justify-content-center py-5">
            <div className="w-100" style={{maxWidth:"400px"}}>
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">Account</h2>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <strong>Email: </strong> {currentUser.email}
                        <Link to="/account/profile">
                            <Button className="w-100 my-2" type="submit">Profile</Button>
                        </Link>
                    </Card.Body>
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
 
 export default connect(mapStateToProps, {logOut})(Account)