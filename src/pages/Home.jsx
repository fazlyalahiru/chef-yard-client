import React from 'react';
import banner from '../assets/banner.jpg'
import './Home.css'

const Home = () => {
    return (
        <>
            <div className='banner-section text-center flex flex-col justify-center items-center md:py-1 py-12'>

                <h1 className='text-white text-3xl md:text-7xl uppercase font-bold'>Chef on the go</h1>
                <p className='text-white text-center md:text-xl py-4 '>Discover the world of French cuisine by exploring details about renowned French chefs</p>
                <button className='btn btn-primary'>Explor Now</button>

            </div>
        </>
    );
};

export default Home;