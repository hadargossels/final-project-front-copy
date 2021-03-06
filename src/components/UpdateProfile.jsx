import React, {useRef, useState, useEffect} from 'react'
import {Form, Button, Card, Alert} from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../AuthContext'
import {db} from '../firebase'

export default function UpdateProfile() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const countryRef = useRef()
    const cityRef = useRef()
    const addressRef = useRef()
    const zipRef = useRef()
    const phoneRef = useRef()
    const photoRef = useRef()
    const {currentUser, updateEmail, updatePassword, userData} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])
    const [id, setId] = useState(0)
    const history = useHistory()
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

   function handleSubmit(e) {
        e.preventDefault()
        setLoading(true)
        setError('')
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }

        const promises = []
        const displayName = firstNameRef.current.value +" "+ lastNameRef.current.value

        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value))
        }
        if (passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value))
        }
        if (displayName !== currentUser.displayName) {
            if (photoRef.current.value !== currentUser.photoURL)
            promises.push(userData(displayName, photoRef.current.value))
        }

        let id = id
         
        db.ref('users/' + index).update({
            firstName: firstNameRef.current.value !== "" ? firstNameRef.current.value : users[index].firstName,
            lastName: lastNameRef.current.value !== "" ? lastNameRef.current.value : users[index].lastName,
            email: emailRef.current.value !== "" ? emailRef.current.value : users[index].email,
            country: countryRef.current.value !== "" ? countryRef.current.value : users[index].country,
            city: cityRef.current.value !== "" ? cityRef.current.value : users[index].city,
            zip: zipRef.current.value !== "" ? zipRef.current.value : users[index].zip,
            phone: phoneRef.current.value !== "" ? phoneRef.current.value : users[index].phone,
            role: 'custumer',
            active: true,
          });

        Promise.all(promises).then(() => {
            history.push('/')
        }).catch(()=>{
            setError('Faild to update profile')
        }).finally(()=>{
            setLoading(false)
        })
    }
    return (
        <>
        {index !== -1 ? <>
        <Card style={{maxWidth: '400px', margin: '15px auto'}} className='d-flex justify-content-center'>
            <Card.Body>
                <h2 className='text-center mb-4 '>Update Profile</h2>
                {error && <Alert variant='danger'>{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required defaultValue={currentUser.email}/>
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} placeholder="Leave blank to keep the same"/>
                    </Form.Group>
                    <Form.Group id="password-confirm">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" ref={passwordConfirmRef} placeholder="Leave blank to keep the same"/>
                    </Form.Group>
                    <Form.Group id="firstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" ref={firstNameRef} defaultValue={users[index].firstName}/>
                    </Form.Group>
                    <Form.Group id="lastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" ref={lastNameRef} defaultValue={users[index].lastName}/>
                    </Form.Group>
                    <Form.Group id="photo">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control type="text" ref={photoRef} defaultValue={currentUser.photoURL}/>
                    </Form.Group>
                    <Form.Group id="country">
                        <Form.Label>country</Form.Label>
                        <Form.Control type="text" ref={countryRef} defaultValue={users[index].country}/>
                    </Form.Group>
                    <Form.Group id="city">
                        <Form.Label>city</Form.Label>
                        <Form.Control type="text" ref={cityRef} defaultValue={users[index].city}/>
                    </Form.Group>
                    <Form.Group id="address">
                        <Form.Label>address</Form.Label>
                        <Form.Control type="text" ref={addressRef} defaultValue={users[index].address}/>
                    </Form.Group>
                    <Form.Group id="zip">
                        <Form.Label>zip</Form.Label>
                        <Form.Control type="text" ref={zipRef} defaultValue={users[index].zip}/>
                    </Form.Group>
                    <Form.Group id="phone">
                        <Form.Label>phone</Form.Label>
                        <Form.Control type="text" ref={phoneRef} defaultValue={users[index].phone}/>
                    </Form.Group>
                    <Button disabled={loading} className='w-100' type='submit'>Update</Button>
                </Form>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
            <Link to="/">Cancel</Link>
            
        </div>
        </> : <div>Loading...</div>}
        </>
    )
}
