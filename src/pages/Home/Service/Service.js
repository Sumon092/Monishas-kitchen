import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const { name, price, img, description } = service;
    return (


        <div className='service col'>
            <div className=''>
                <img src={img} alt="" />
                <h3>{name}</h3>
                <h4>Price:$ {price}</h4>
                <p><small className='text-muted'>{description}</small></p>
            </div>
        </div>
    );
};

export default Service;