import React from 'react';
import './Footer.css'

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (

        <footer className='footer text-white text-center mt-2 footer-height' style={{ height: '60px' }}>
            <p className='align-items-center'><small>All Rights Reserved &copy; Monsha's Kitchen {year} </small></p>
        </footer>
    );
};

export default Footer;