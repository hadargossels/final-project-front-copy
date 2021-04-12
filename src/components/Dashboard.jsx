import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Card, Button, Alert } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'


export default function Dashboard() {
    const [error, setError] = useState('')
    const currentUser = JSON.parse(localStorage.getItem("currentUser"))
    const history = useHistory()
    const [user, setUser] = useState()

    useEffect(() => {
        getUser()
    },[])

    
    async function getUser() {
    try {
        await axios.get(`${process.env.REACT_APP_URL}/user/`)
        .then((response)=>{
            response.data.forEach(element => {
                if (element.email == currentUser.user) {
                    setUser({...element})
                }
            });

        })
    } catch (error) {
        console.error(error);
    }
    }
    
    async function handleLogout() {
        setError('')
        try {
            localStorage.setItem('token', "")
            localStorage.setItem('currentUser', "")
            history.push('/login')
        }
        catch {
            setError('Faild to log out')
        }
    }
    return user !== undefined ? (
        
<>
    <>
<Card style={{maxWidth: '400px', margin: '15px auto'}} className='d-flex justify-content-center'>
    <Card.Body>
    <h2 className='text-center mb-4 '>Profile</h2>
    {error && <Alert variant='danger'>{error}</Alert>}
    <strong>Email:</strong> {user.email}<br/>
    <strong>First Name:</strong> {user.firstName}<br/>
    <strong>Last Name:</strong> {user.lastName}<br/>
    <strong>Country:</strong> {user.country}<br/>
    <strong>City:</strong> {user.city}<br/>
    <strong>Address:</strong> {user.address}<br/>
    <strong>Zip:</strong> {user.zip}<br/>
    <strong>Photo:</strong><br/><img src={user.photoURL ? user.photoURL: '/img/anonymous.png'} alt='User Photo' width='200px'/>
    <Link to="/profile" className='btn btn-primary w-100 mt-3'>Update Profile</Link>
    {user.role === "admin" ? 
           <Link to="/admin" className='btn btn-danger w-100 mt-3'>Go to Admin Dashboard</Link>
         : null }
    </Card.Body>
</Card>
<div className="w-100 text-center mt-2">
           <Button variant="link" onClick={handleLogout}>Log Out</Button>

           
        </div>
        </> 

</>
    ): <div>Loading...</div>
}
