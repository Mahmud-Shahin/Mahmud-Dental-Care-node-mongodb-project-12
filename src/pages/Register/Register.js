import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import SocialLogin from '../Login/SocialLogin/SocialLogin';



const Register = () => {
    const[agree, setAgree] = useState(false)

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);






    const navigate = useNavigate()
    const navigateLogin = () => {
        navigate('/login')
    }

    if (user) {
       console.log('user', user)
    }



    const handleRegister = async  (event) => {
        event.preventDefault();

        const name = event.target.name.value
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;

    
      await  createUserWithEmailAndPassword(name, email, password, confirmPassword);

      await updateProfile({ displayName : name });
          console.log('Updated profile');
          navigate('/home')
     
    }



    return (
        <div className='container w-50 mx-auto mt-5'>
            <h2>Please Register</h2>

            <Form onSubmit={handleRegister}>

            <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Your name" required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label> Confirm Password</Form.Label>
                    <Form.Control type="password" name="confirmPassword" placeholder="confirmPassword" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={()=> setAgree(!agree)}   type="checkbox" className={agree? ' ps-2 text-primary' : ' ps-2 text-danger'} label="accept terms and condition " />
                </Form.Group>
                <Button disabled={!agree} variant="primary" type="submit">
                    register
                </Button>
            </Form>

            <p>already have an account? <Link
                to='/login' onClick={navigateLogin} className='text-primary pe-auto text-decoration-none' >please Login </Link></p>

            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;