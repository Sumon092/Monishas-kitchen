import React from 'react';
import './Whyme.css'


const WhyMe = () => {
    return (
        <div className='why-me-section container' id='whyme'>
            <div className='why-me-left'>
                <div className='d-flex whyme-left-top'>
                    <div >
                        <img src="https://i.ibb.co/cr9btmk/young-female-chef-uniform-yellow-background.jpg" alt="" />
                    </div>
                    <div className='ms-3 overflow-hidden'>
                        <h3 className='text-golden display-5 fw-bold'>100 <span className='text-muted'>+</span></h3>
                        <h4>Trusted Clients</h4>
                        <p style={{ width: '200px' }} className='text-muted client-text'>I am serving quality foods more than 100 clients over the years</p>
                    </div>
                </div>
                <div className='whyme-left-bottom'>
                    <div>
                        <img src="https://i.ibb.co/cJfKf4R/dan-gold-4-jh-DO54-BYg-unsplash.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div>
                <p className='text-golden'>Who I am</p>
                <h3 className='fw-bold display-6'>Clean food catering for your
                    <br />diet programs & best partner
                    <br />
                    for healthy life</h3>
                <p>To secure your healthy life I am providing so many healthy food package for you and your family.</p>
                <div>
                    <div><h3>Food Licence</h3></div>
                    <p className="text-muted">I have professional diet consultancy from FDA and I am serving hundreds of people over the years.My license is category and FDA approved</p>
                </div>
            </div>
        </div>
    );
};

export default WhyMe;