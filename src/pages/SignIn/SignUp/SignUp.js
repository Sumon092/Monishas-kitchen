import { Button } from 'bootstrap';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [agree, setAgree] = useState(false);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

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
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home')


    }
    return (
        <div className='container w-50 mx-auto'>
            <h2 className='display-1 fw-bolder text-center'>Sign Up</h2>
            <p className='fs-4 text-center'>Already have an account ? <Link to='/signIn' className='text-decoration-none' onClick={navigateToSignIn} >Sing In</Link></p>
            <Form onSubmit={handleSignUp}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" onClick={() => setAgree(!agree)} label="Accept terms and condition" className={`ps-2 ${agree ? '' : 'text-danger'}`} />
                </Form.Group>
                <button
                    disabled={!agree}
                    className='w-50 mx-auto d-block mb-3 btn btn btn-outline-primary rounded-pill fs-16' variant="primary" type="submit">
                    Sign Up
                </button>
            </Form>


        </div>
    );
};

export default SignUp;