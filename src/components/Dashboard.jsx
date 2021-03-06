import React, {useState, useEffect} from 'react'
import { Card, Button, Alert } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../AuthContext'
import {db} from '../firebase'

export default function Dashboard() {
    const [error, setError] = useState('')
    const {currentUser, logout} = useAuth()
    const history = useHistory()
    const [users, setUsers] = useState([])
    const [index, setIndex] = useState(-1)

    useEffect(() => {
        const ref = db.ref('users');
        const listener = ref.on('value', snapshot => {
            const fetchedUsers = [];
            snapshot.forEach(childSnapshot => {
                const data = childSnapshot.val();
                fetchedUsers.push({ ...data });
            });
            setUsers(fetchedUsers);
        });
        users.forEach(element => {
            if (element.email == currentUser.email) {
                let index = users.findIndex((e) => { return e === element})
                setIndex(index)
            }
        })
        return () => ref.off('value', listener);
    }, [db, users]);
    
    async function handleLogout() {
        setError('')
        try {
            await logout()
            history.push('/login')
        }
        catch {
            setError('Faild to log out')
        }
    }
    return (
        
<>
{index !== -1 ? <>
<Card style={{maxWidth: '400px', margin: '15px auto'}} className='d-flex justify-content-center'>
    <Card.Body>
    <h2 className='text-center mb-4 '>Profile</h2>
    {error && <Alert variant='danger'>{error}</Alert>}
    <strong>Email:</strong> {currentUser.email}<br/>
    <strong>First Name:</strong> {users[index].firstName}<br/>
    <strong>Last Name:</strong> {users[index].lastName}<br/>
    <strong>Country:</strong> {users[index].country}<br/>
    <strong>City:</strong> {users[index].city}<br/>
    <strong>Address:</strong> {users[index].address}<br/>
    <strong>Zip:</strong> {users[index].zip}<br/>
    <strong>Photo:</strong><br/><img src={currentUser.photoURL ? currentUser.photoURL: '/img/anonymous.png'} alt='User Photo' width='200px'/>
    <Link to="/update-profile" className='btn btn-primary w-100 mt-3'>Update Profile</Link>
    </Card.Body>
</Card>
<div className="w-100 text-center mt-2">
           <Button variant="link" onClick={handleLogout}>Log Out</Button>
        </div>
        </> : <div>Loading...</div>}

</>
    )
}
