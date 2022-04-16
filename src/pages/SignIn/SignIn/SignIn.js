import { async } from '@firebase/util';
import { Button } from 'bootstrap';
import React, { useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import SocialSignIn from '../SocialSignIn/SocialSignIn';

const SignIn = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const location = useLocation();
    if (user) {
        navigate('/home')
    }

    const handleNavigateToSignUp = () => {
        navigate('/signUp')
    }

    const handleSubmitSignIn = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        await signInWithEmailAndPassword(email, password);
        console.log('user sing in')
    }
    return (
        <div className='w-50 mx-auto container text-center'>
            <h2 className='display-1 fw-bolder'>Sign In</h2>
            <p onClick={handleNavigateToSignUp} className='fs-4'>Don't have account ? <button className='btn btn-link text-decoration-none fs-4'>Sign up</button></p>
            <div>
                <div className="email-sign-in">
                    <Form onSubmit={handleSubmitSignIn}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label >Email</Form.Label>
                            <Form.Control type="email" name='email' placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Password" />
                        </Form.Group>
                        <p>Forgot Password ? <button className='text-decoration-none btn btn-link'  >Reset Password</button></p>
                        <button className='w-50 mx-auto d-block mb-3 btn btn btn-outline-primary rounded-pill fs-16' variant="primary" type="submit">
                            Sign In
                        </button>
                    </Form>

                    <ToastContainer />
                </div>
                <div className="social-sign-in">
                    <SocialSignIn></SocialSignIn>
                </div>
            </div>
        </div>
    );
};

export default SignIn;