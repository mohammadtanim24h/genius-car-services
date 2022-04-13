import React from 'react';
import sleepy from '../../../images/sleepy-mechanic.jpg';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='d-flex justify-content-center align-items-center not-found'>
            <div>
                <h1 className='text-danger display-5'>404 Page Not Found!</h1>
            </div>
            <div>
                <img className='img-fluid' src={sleepy} alt="" />
            </div>
        </div>
    );
};

export default NotFound;