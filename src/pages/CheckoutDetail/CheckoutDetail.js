import React from 'react';
import { Form } from 'react-bootstrap';

const CheckoutDetail = () => {
    const handleCheckoutDetail = event => {
        event.preventDefault();
    }
    return (
        <div style={{ height: '85vh' }} className="mt-5 w-25 container mx-auto">
            <h1 className='fw-bold'>Check Out <br /> your service</h1>
            <Form className='' onSubmit={handleCheckoutDetail}>

                <Form.Group className="mb-1" controlId="formBasicName">
                    <Form.Label className='ms-0'>Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="" />
                </Form.Group>
                <Form.Group className="mb-1" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" placeholder="" required />
                </Form.Group>

                <Form.Group className="mb-1 border-radius-" controlId="formBasicPassword">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" name="Address" placeholder="" required />
                </Form.Group>
                <Form.Group className="mb-1 border-radius-" controlId="formBasicPassword">
                    <Form.Label>Phone No</Form.Label>
                    <Form.Control type="text" name="phoneNo" placeholder="" required />
                </Form.Group>

                <button
                    className='w-100 mx-auto d-block mt-3 btn btn btn-outline-primary rounded-pill fs-16 ' variant="primary" type="submit">
                    Submit
                </button>
            </Form>
        </div>
    );
};

export default CheckoutDetail;