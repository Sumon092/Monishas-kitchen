import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {

    const { name, price, img, description } = service;
    return (
        <div className='service-detail col'>
            <div className='single-service'>
                <img src={img} alt="" />
                <h3>{name}</h3>
                <h4>Price:$ {price}</h4>
                <p><small className='text-muted'>{description}</small></p>
                <button className='w-100 tips-button'><Link className='text-decoratio' to={'/checkout'}>Book Now</Link></button>
            </div>

        </div>
    );
};

export default Service;