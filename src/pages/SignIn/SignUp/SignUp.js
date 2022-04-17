import { Button } from 'bootstrap';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialSignIn from '../SocialSignIn/SocialSignIn';

const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [agree, setAgree] = useState(false);
    const navigate = useNavigate();
    const navigateToSignIn = () => {
        navigate('/login');
    }
    if (user) {
        navigate('/home')
    }
    const handleSignUp = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password);
        navigate('/home')


    }
    return (
        <div className='container w-50 mx-auto h-100'>
            <h2 className='display-1 fw-bolder text-center'>Sign Up</h2>
            <p className='fs-4 text-center'>Already have an account ? <Link to='/signIn' className='text-decoration-none' onClick={navigateToSignIn} >Sing In</Link></p>
            <div className='d-flex justify-content-center align-items-center'>
                <div className='me-5 w-50'>
                    <Form onSubmit={handleSignUp}>

                        <Form.Group className="mb-1" controlId="formBasicName">
                            <Form.Label className='ms-0'>Name</Form.Label>
                            <Form.Control type="text" name="name" placeholder="" />
                        </Form.Group>
                        <Form.Group className="mb-1" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="email" placeholder="" required />
                        </Form.Group>

                        <Form.Group className="mb-1 border-radius-" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="" required />
                        </Form.Group>
                        <Form.Group className="mb-1 border-radius-" controlId="formBasicPassword">
                            <Form.Label>Confire Password</Form.Label>
                            <Form.Control type="password" name="Confirm-password" placeholder="" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" onClick={() => setAgree(!agree)} label="Accept terms and condition" className={`ps-2 ${agree ? '' : 'text-danger'}`} />
                        </Form.Group>
                        <button
                            disabled={!agree}
                            className='w-100 mx-auto d-block mb-3 btn btn btn-outline-primary rounded-pill fs-16 ' variant="primary" type="submit">
                            Sign Up
                        </button>
                    </Form>
                </div>
                <div style={{ width: '0.5px', height: '300px' }} className="bg-secondary me-5 "></div>

                <div className='w-50'>
                    <SocialSignIn></SocialSignIn>
                </div>
            </div>
        </div>
    );
};

export default SignUp;