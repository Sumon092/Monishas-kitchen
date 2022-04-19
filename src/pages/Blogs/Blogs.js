import React from 'react';

const Blogs = () => {
    return (
        <div className='container mt-5'>
            <h2>Q1: Difference between Authentication and authorization</h2>
            <p>To verifying someone who are they is<strong>Authentication</strong> him or her.Almost Every website we need to authenticate ourselves</p>
            <p>To permit somebody do something or using resource is <strong>Authorization</strong>. Authorization is the process of verifying what they have access to</p>

            <h2>Q2: Why I using firebase</h2>
            <p><strong>Ans:</strong>I am using Firebase for authentication and hosting website.We do authentication with firebase.Firebase also have hosting opportunity.

                <br /> we have so many option without firebase</p>

            <ul className='text-decoration-none'>
                <li>Back4App</li>
                <li>AWS Amplify</li>
                <li>Kuzzle</li>
                <li>Couchbase</li>
                <li>NativeScript</li>
                <li>RxDB</li>
                <li>Flutter</li>
            </ul>

            <h2>Q3: What other services does firebase provide other than authentication</h2>
            <p><strong>Ans:</strong>There are many services which Firebase provides, Most useful of them are:</p>

            <ul>
                <li>Cloud Firestore</li>
                <li>Cloud Functions.</li>
                <li>Hosting</li>
                <li>Cloud Storage</li>
                <li>Google Analytics</li>
                <li>Predictions</li>
                <li>Cloud Messaging</li>
            </ul>
        </div>
    );
};

export default Blogs;