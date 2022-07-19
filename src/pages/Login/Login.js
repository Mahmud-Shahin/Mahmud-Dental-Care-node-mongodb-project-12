import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin/SocialLogin';
import PageTitle from '../Shared/PageTitle/PageTitle'
import axios from 'axios';

const Login = () => {

    const navigate = useNavigate();

    const location = useLocation()

    let from = location.state?.from?.pathname || "/";
    let errorElement ;

  
          
       
       
      

    

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
      );



    if (user) {
        navigate(from, { replace: true });

    }

    if (error) {
        errorElement =  <p className='text-danger'>Error: {error?.message} </p>
    } 



    const emailRef = useRef('');
    const passwordRef = useRef('');

    const handleSubmit = async event => {
        event.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
       await signInWithEmailAndPassword(email, password);
       const {data} = await axios.post('https://secret-reef-44211.herokuapp.com/login', {email});
       localStorage.setItem('accessToken', data.accessToken);
       navigate(from, { replace: true });

    }

    const navigateRegister = () => {

        navigate('/register')

    }

    const resetPassword = async() => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        alert('Sent email');

    }




    return (
        <div className='container w-50 mx-auto mt-5'>
             <PageTitle title="login"></PageTitle>
            <h2 className='text-primary text-center'>please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                    Login
                </Button>
            </Form>
            {errorElement}
            <p>new to dental care? <Link to='/register' onClick={navigateRegister} className='text-primary pe-auto text-decoration-none' >please register</Link></p>

            <p>forget Password? <Link to='/register' onClick={resetPassword} className='text-primary pe-auto text-decoration-none' >reset password</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;