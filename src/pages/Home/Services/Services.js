import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setService] = useState([]);
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div className='container text-center mt-5'>
            <h4 className='text-golden m-0'>What I can do</h4>
            <h2 className='display-4 fw-bolder'>I do diet programs
                <br /> with healthy & clean food</h2>
            <div className="service-items d-flex row">
                {
                    services.map((service) => (<Service key={service.key} service={service}></Service>))
                }
            </div>
        </div>
    );
};

export default Services;