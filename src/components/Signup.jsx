import React, {useRef, useState, useEffect} from 'react'
import {Form, Button, Card, Alert} from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../AuthContext'
import {db} from '../firebase'

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
    const {signup, userData} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [id, setId] = useState(0)
    const [users, setUsers] = useState([])
    const history = useHistory()


    useEffect(() => {
        const ref = db.ref('users');
        const listener = ref.on('value', snapshot => {
            const fetchedUsers = [];
            snapshot.forEach(childSnapshot => {
                // const key = childSnapshot.key;
                const data = childSnapshot.val();
                fetchedUsers.push({ ...data });
            });
            setUsers(fetchedUsers);
        });
        return () => ref.off('value', listener);
    }, [db]);

    // useEffect(() => {
    //  return db.ref('users').on('value', (snapshot)=>{if(snapshot.val()!=null)

    //         setUsers(snapshot.val())
    //       })
          
    // }, ()=>{console.log(users)})

   async function handleSubmit(e) {
       console.log(users)
        e.preventDefault()
        let id = users.length+2
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }
        let firstName =  firstNameRef.current.value
        let lastName = lastNameRef.current.value
        let email = emailRef.current.value
        let country = countryRef.current.value
        let city = cityRef.current.value
        let address = addressRef.current.value
        let zip = zipRef.current.value
        let phone = phoneRef.current.value
        db.ref('users/' + id).set({
            id:id,
            firstName: firstName,
            lastName: lastName,
            address: address,
            email: email,
            country: country,
            city: city,
            zip: zip,
            phone: phone,
            role: 'custumer',
            active: true,
          });

        try {
            setError('')
            setLoading(true)
           await signup(emailRef.current.value, passwordRef.current.value)
           history.push('/Dashboard')
        }
        catch {
            setError('Faild to create an account')
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
