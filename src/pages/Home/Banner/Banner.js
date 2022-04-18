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
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur distinctio earum sequi fugit veniam excepturi nobis sunt, impedit assumenda. Veritatis!</p>
                    <div className='banner-text-bottom'>
                        <p className='text-muted'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur architecto, quam vero aperiam blanditiis itaque nemo nulla, recusandae sapiente accusamus unde quo deserunt totam veniam mollitia enim libero. Aliquam, iure.</p>
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
                    <h3 className='image-text'>Dahi Bora</h3>
                    <img className='img-fluid' src={Banner1} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Banner;