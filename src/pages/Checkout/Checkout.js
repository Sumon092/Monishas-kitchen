import React from 'react';
import { Link } from 'react-router-dom';

const Checkout = () => {
    return (
        <div className='container w-25 mx-auto' style={{ height: '85vh' }}>
            <h3>Check this service out</h3>
            <button className='tips-button'><Link className='text-decoration-none' to='/checkoutdetail'>Proceed to checkout</Link></button>
        </div>
    );
};

export default Checkout;