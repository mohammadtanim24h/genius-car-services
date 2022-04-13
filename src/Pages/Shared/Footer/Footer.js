import React from 'react';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer className='text-center my-3'>
            <p>&copy;Copyright {year} All Rights Reserved by <span className='text-primary'>The Car Doctor</span></p>
        </footer>
    );
};

export default Footer;