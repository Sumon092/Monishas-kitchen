import React from 'react';
import Banner1 from '../../../images/Banner/banner.jpg'
import './Banner.css';

const Banner = () => {

    return (
        <div >
            <div className="banner container">
                <div>
                    <p className='text-golden'>Diet and Clean food Catering</p>
                    <h2 className='display-2 fw-bolder'>Diet Is <span className='text-golden display-2 fw-bolder'>Now Easy</span></h2>
                    <h2 className='display-2 fw-bolder'>With My Catering</h2>
                    <p>I have made organic made for you and your family .you can order my catering service from online or physically</p>
                    <div className='banner-text-bottom'>
                        <p className='text-muted'>To improve your health condition  you can consult to me.I will give you consultancy for your health</p>
                    </div>
                    <div className='banner-button'>
                        <button>Take A Tour</button>
                    </div>
                    <div className='tips-section text-muted'>
                        <div className='d-flex justify-content-between me-5'>
                            <div><input type="number" placeholder='Weight(kg)' name="" id="" /></div>
                            <div><input type="number" placeholder='Height(cm)' name="" id="" /></div>
                            <div><input type="number" name="" placeholder='Your Age' id="" /></div>
                        </div>
                        <div className='d-flex justify-content-around'>
                            <div><input type="email" name="" placeholder='Your Email' id="" /></div>
                            <div><button className='tips-button'>Get Tips</button></div>
                        </div>
                    </div>
                </div>
                <div className='banner-image '>
                    <img className='img-fluid' src={Banner1} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Banner;