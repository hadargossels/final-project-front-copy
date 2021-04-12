import axios from 'axios'
import React, {useState, useEffect, useRef} from 'react'
import { Link, useHistory } from 'react-router-dom'
import {Form, Button, Card, Alert} from 'react-bootstrap'


export default function Profile() {
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
    const currentUser = JSON.parse(localStorage.getItem("currentUser"))
    const history = useHistory()
    const [users, setUsers] = useState([])
    const [user, setUser] = useState({})

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
    
    async function handleSubmit(e) {
        e.preventDefault()
        setError('')
        let id = user.id
        let firstName =  firstNameRef.current.value 
        let lastName = lastNameRef.current.value  
        let email = emailRef.current.value 
        let password = passwordRef.current.value.length != 0 ? passwordRef.current.value : user.password
        let country = countryRef.current.value 
        let city = cityRef.current.value 
        let address = addressRef.current.value
        let zip = zipRef.current.value
        let phone = phoneRef.current.value

        try {
            const response = await axios.put(`${process.env.REACT_APP_URL}/user/${id}`, 
            {
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
            }
            )
            .then((response) => {console.log(response)}, (error) => {console.log('axios error ' + error)})  
        } 
        catch (error) {
            setError(error)
        }
    }



    return (
        
<>
{user ? 
    <>
  <Card style={{maxWidth: '400px', margin: '15px auto'}} className='d-flex justify-content-center'>
            <Card.Body>
                <h2 className='text-center mb-4 '>Update Profile</h2>
                {error && <Alert variant='danger'>{error}</Alert>}
                <Form onSubmit={(e)=>{handleSubmit(e)}}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required defaultValue={user.email}/>
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
                        <Form.Control type="text" ref={firstNameRef} defaultValue={user.firstName}/>
                    </Form.Group>
                    <Form.Group id="lastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" ref={lastNameRef} defaultValue={user.lastName}/>
                    </Form.Group>
                    <Form.Group id="photo">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control type="text" ref={photoRef} defaultValue={user.photoURL}/>
                    </Form.Group>
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
                    </Form.Group><br/>
                    <Button className='w-100' type='submit'>Update</Button><br/><br/>
                    <Link to="/"><Button className='w-100 btn btn-secondary'>Cancel</Button></Link>
                </Form>
            </Card.Body>
        </Card>
        </> : <div>Loading...</div>}
        </>
    )
}
