import React from 'react';
import './Service.css';

const Service = ({service}) => {
    const {name, price, description, img} = service;
    return (
        <div className='service'>
            <img className='img-fluid' src={img} alt="" />
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <p>{description}</p>
            <button className='btn btn-primary'>Book {name}</button>
        </div>
    );
};

export default Service;