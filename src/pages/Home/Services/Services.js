import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setService] = useState([]);
    //fetching json data.
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div className='container text-center mt-5' id='services'>
            <h4 className='text-golden m-0'>What I can do</h4>
            <h2 className='display-4 fw-bolder'>I do diet programs
                <br /> with healthy & clean food</h2>
            <div className="service-items d-flex row">
                {
                    //data send to service component
                    services.map((service) => (<Service key={service.id} service={service}></Service>))
                }
            </div>
        </div>
    );
};

export default Services;