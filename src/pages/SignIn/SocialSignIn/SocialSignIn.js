import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './SocialSignIn.css';
import GoogleLogo from '../../../images/Logo/google.png'
import FacebookLogo from '../../../images/Logo/facebook.png'

const SocialSignIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    return (
        <div>
            <div className="google-logo">
                <button onClick={() => signInWithGoogle()} className='d-flex align-items-center justify-content-between google-button'>
                    <img style={{}} src={GoogleLogo} alt="" />

                    <span className='google-text fw-bold'>Sign In with google</span>
                </button>
            </div>
            <div className="facebook-logo text-center">
                <button onClick={() => signInWithGoogle()} className='facebook-button d-flex align-items-center justify-content-between'>
                    <img style={{}} src={FacebookLogo} alt="" />
                    <span className='fw-bold'>Sign In with facebook</span>
                </button>
            </div>

        </div>
    );
};

export default SocialSignIn;