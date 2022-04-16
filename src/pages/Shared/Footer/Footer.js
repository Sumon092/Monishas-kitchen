import React from 'react';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (

        <div className='bg-dark text-white text-center ' style={{ height: '60px' }} fixed="bottom">
            <p className='align-items-center'><small>All Rights Reserved &copy; Monsha's Kitchen {year} </small></p>
        </div>
    );
};

export default Footer;