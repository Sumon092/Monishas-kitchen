import React from 'react';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (

        <div>
            <p><small>All Rights Reserved &copy; Monsha's Kitchen {year} </small></p>
        </div>
    );
};

export default Footer;