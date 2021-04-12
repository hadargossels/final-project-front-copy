import axios from 'axios'
import React, {useRef, useState, useEffect} from 'react'
import {Form, Button, Card, Alert} from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../AuthContext'
import {db} from '../firebase'

let emailRef = ''
let firstNameRef = ''
let lastNameRef = ''
let countryRef = ''
let cityRef = ''
let addressRef = ''
let zipRef = ''
let phoneRef = ''
export default function UpdateProfile() {
    emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    firstNameRef = useRef()
    lastNameRef = useRef()
    countryRef = useRef()
    cityRef = useRef()
    addressRef = useRef()
    zipRef = useRef()
    phoneRef = useRef()
    const photoRef = useRef()
    const currentUser = JSON.parse(localStorage.getItem("currentUser"))
    const {updateEmail, updatePassword, userData} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])
    const history = useHistory()
    const [index, setIndex] = useState(-1)
    const [user, setUser] = useState({})
    
    useEffect(() => {
        getUser()
    },[])

    
    async function getUser() {
    try {
        let response = await axios.get(`${process.env.REACT_APP_URL}/user/`);
        let usersData = response.data
        console.log(usersData)
        setUsers(usersData)
        console.log(users)
        if (users) {
            
        users.forEach(element => {
            if (element.email == currentUser.user) {
                setUser({...element})
            }
        });
        // console.log(user)
        // console.log(users)
    }
       
    } catch (error) {
        console.error(error);
    }
    }

   function handleSubmit(e) {
        e.preventDefault()
        setLoading(true)
        setError('')

        if (history.location.pathname === '/update-profile' && passwordRef.current.value !== passwordConfirmRef.current.value) {
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
        {user.email ? <>
        <Card style={{maxWidth: '400px', margin: '15px auto'}} className='d-flex justify-content-center'>
            <Card.Body>
            {history.location.pathname === '/update-profile' ? 
                    <>
                <h2 className='text-center mb-4 '>Update Profile</h2>
                </>
                    : null}
                {error && <Alert variant='danger'>{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required defaultValue={user.email}/>
                    </Form.Group>
                    {history.location.pathname === '/update-profile' ? 
                    <>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} placeholder="Leave blank to keep the same"/>
                    </Form.Group>
                    <Form.Group id="password-confirm">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" ref={passwordConfirmRef} placeholder="Leave blank to keep the same"/>
                    </Form.Group></>
                    : null}
                    
                    <Form.Group id="firstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" ref={firstNameRef} defaultValue={user.firstName}/>
                    </Form.Group>
                    <Form.Group id="lastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" ref={lastNameRef} defaultValue={user.lastName}/>
                    </Form.Group>
                    {history.location.pathname === '/update-profile' ? 
                    <>
                    <Form.Group id="photo">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control type="text" ref={photoRef} defaultValue={user.photoURL}/>
                    </Form.Group>
                    </>
                    : null}
                    <Form.Group id="country">
                        <Form.Label>country</Form.Label>
                        <Form.Control type="text" ref={countryRef} defaultValue={user.country}/>
                    </Form.Group>
                    <Form.Group id="city">
                        <Form.Label>city</Form.Label>
                        <Form.Control type="text" ref={cityRef} defaultValue={user.city}/>
                    </Form.Group>
                    <Form.Group id="address">
                        <Form.Label>address</Form.Label>
                        <Form.Control type="text" ref={addressRef} defaultValue={user.address}/>
                    </Form.Group>
                    <Form.Group id="zip">
                        <Form.Label>zip</Form.Label>
                        <Form.Control type="text" ref={zipRef} defaultValue={user.zip}/>
                    </Form.Group>
                    <Form.Group id="phone">
                        <Form.Label>phone</Form.Label>
                        <Form.Control type="text" ref={phoneRef} defaultValue={user.phone}/>
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
export {emailRef, firstNameRef, lastNameRef, countryRef, cityRef, addressRef, zipRef, phoneRef}
