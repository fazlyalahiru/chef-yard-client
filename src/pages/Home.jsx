import React from 'react';
import banner from '../assets/banner.jpg'
import './Home.css'
import { useLoaderData } from 'react-router-dom';
import ChefCard from '../components/ChefCard';

const Home = () => {
    const chefData = useLoaderData()
    return (
        <>
            <div className='banner-section text-center flex flex-col justify-center items-center md:py-1 py-12'>

                <h1 className='text-white text-3xl md:text-7xl uppercase font-bold'>Chef on the go</h1>
                <p className='text-white text-center md:text-xl py-4 '>Discover the world of French cuisine by exploring details about renowned French chefs</p>
                <button className='btn border-2 border-red-50 bg-transparent hover:bg-red-700 hover:border-red-700 '>Explor Now</button>

            </div>
            <div className='grid grid-cols-3 gap-4 my-container py-3'>
            {
                chefData.map(chef=>
                    <div >
                        <ChefCard chef={chef} key={chef.id}></ChefCard>
                    </div>
                )
            }
            </div>
        </>
    );
};

export default Home;