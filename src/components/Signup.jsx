import axios from 'axios'
import React, {useRef, useState, useEffect} from 'react'
import {Form, Button, Card, Alert} from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../AuthContext'

export default function Signup() {
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
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])
    let history = useHistory();

    useEffect(() => {
        getUser()
    },[])

      
    async function getUser() {
    try {
        const response = await axios.get(`${process.env.REACT_APP_URL}/user/`);
        let user = response.data
        setUsers(user)
    } catch (error) {
        console.error(error);
    }
    }

   async function handleSubmit(e) {
        e.preventDefault()
        let id = users.length+1
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }
        let firstName =  firstNameRef.current.value
        let lastName = lastNameRef.current.value
        let email = emailRef.current.value
        let password = passwordRef.current.value
        let country = countryRef.current.value
        let city = cityRef.current.value
        let address = addressRef.current.value
        let zip = zipRef.current.value
        let phone = phoneRef.current.value
        try { await axios.post(`${process.env.REACT_APP_URL}/auth/register`, {
            id:id,
            firstName: firstName,
            lastName: lastName,
            address: address,
            email: email,
            password: password,
            country: country,
            city: city,
            zip: zip,
            phone: phone,
            role: 'custumer',
            active: true
          })
          .then((response) => {
            console.log(response);
            handlelogin(email, password)
                    //    history.push('/Dashboard')
          }, (error) => {
            console.log('axios error ' + error);
          });
            // setError('')
            // setLoading(true)
        //    await signup(emailRef.current.value, passwordRef.current.value)
        //    history.push('/Dashboard')
        }
        catch {
            setError('Faild to create an account')
        }

        setLoading(false)   
    }

    async function handlelogin(email,password) {
        try {await axios.post(`${process.env.REACT_APP_URL}/auth/login`, {
            email: email,
            password: password,
          })
          .then((response) => {
            console.log(response);
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('currentUser', JSON.stringify({user: response.data.user.email, role: response.data.user.role}))
            history.push('/Dashboard')
          }, (error) => {
            console.log('axios error ' + error);
          });


        //     setError('')
        //     setLoading(true)
        //    await login(emailRef.current.value, passwordRef.current.value)
        //    history.push('/Dashboard')
        }
        catch {
            setError('Faild to sign in')
        }
        setLoading(false)
        
    }


    return (
        <>
        <Card style={{maxWidth: '400px', margin: '15px auto'}} className='d-flex justify-content-center'>
            <Card.Body>
                <h2 className='text-center mb-4 '>Sign Up</h2>
                {error && <Alert variant='danger'>{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email" className='w-100 p-0'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required/>
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} required placeholder="at least 6 characters"/>
                    </Form.Group>
                    <Form.Group id="password-confirm">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" ref={passwordConfirmRef} required placeholder="at least 6 characters"/>
                    </Form.Group>
                    <Form.Group id="firstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" ref={firstNameRef} required/>
                    </Form.Group>
                    <Form.Group id="lastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" ref={lastNameRef} required/>
                    </Form.Group>
                    <Form.Group id="photo">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control type="text" ref={photoRef}/>
                    </Form.Group>
                    <Form.Group id="country">
                        <Form.Label>country</Form.Label>
                        <Form.Control type="text" ref={countryRef} required/>
                    </Form.Group>
                    <Form.Group id="city">
                        <Form.Label>city</Form.Label>
                        <Form.Control type="text" ref={cityRef} required/>
                    </Form.Group>
                    <Form.Group id="address">
                        <Form.Label>address</Form.Label>
                        <Form.Control type="text" ref={addressRef} required/>
                    </Form.Group>
                    <Form.Group id="zip">
                        <Form.Label>zip</Form.Label>
                        <Form.Control type="text" ref={zipRef} required/>
                    </Form.Group>
                    <Form.Group id="phone">
                        <Form.Label>phone</Form.Label>
                        <Form.Control type="text" ref={phoneRef} required/>
                    </Form.Group>
                    <Button disabled={loading} className='w-100 mt-2' type='submit'>Sign Up</Button>
                </Form>
            </Card.Body>
        </Card>
        <div className="w-100 text-center m-2">
            Already have an account? <Link to="login" className='text-dark'>Log in</Link>
            
        </div>
        </>
    )
}
