import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {

    const { name, price, img, description } = service;
    return (
        <div className='service-detail col'>
            <div className='single-service'>
                <img className='ms-1' src={img} alt="" />
                <div className="single-service-detail p-3">
                    <h3 className='mt-0'>{name}</h3>
                    <h4>Price:$ {price}</h4>
                    <p><small className='text-muted'>{description}</small></p>
                </div>
                <button className='w-100 tips-button'><Link className='text-decoration-none text-white' to={'/checkout'}>Book Now</Link></button>
            </div>

        </div>
    );
};

export default Service;