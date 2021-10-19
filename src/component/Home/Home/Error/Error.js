import React from 'react';
import "./Error.css"

const Error = () => {
    return (
        <div className="err">
            <h1 className='text-center text-danger'>404</h1>
            <h5 className='text-center text-danger'>Page Not Found</h5>
            <h5 className='text-center text-dark'>This page may have been moved or deleted. Be sure to check your spelling.</h5>
            <img className='error-img' src="https://cdn.dribbble.com/users/1169343/screenshots/7044451/media/040703a1d4d3c2da683361bd9ba42e0a.png" width='700vh' alt="" />

            <button className='primary-btn'><a href="/home">Back to Home</a></button>
        </div>
    );
};

export default Error;