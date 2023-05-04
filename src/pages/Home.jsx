import React from 'react';
import featured from '../../public/featured.jpg'
import './Home.css'
import { useLoaderData } from 'react-router-dom';
import ChefCard from '../components/ChefCard';
import { toast } from 'react-hot-toast';
import LazyLoad from 'react-lazy-load';

const Home = () => {
    const chefData = useLoaderData()
    const handleBookTable = () => {
        return toast.success("Congrats! Your table has been confirmed.")
    }
    const handleOrder = () => {
        return toast.success("Your order has been confirmed")

    }
    return (
        <>
            {/* nav section */}
            <div className='banner-section text-center flex flex-col justify-center items-center md:py-1 py-12'>

                <h1 className='text-white text-3xl md:text-7xl uppercase font-bold'>Chef on the go</h1>
                <p className='text-white text-center md:text-xl py-4 '>Discover the world of French cuisine by exploring details about renowned French chefs</p>
                <button className='btn border-2 border-white bg-transparent hover:bg-red-700 hover:border-red-700 text-white'>Explor Now</button>

            </div>
            {/* Chef Card Section */}
            <div className='text-center  my-container py-6 md:py-12 '>
                <h4 className='text-2xl md:text-4xl font-bold py-6 uppercase'>Our Top <span className='text-red-700'>Chef</span></h4>
                <div className='grid md:grid-cols-3 gap-4 py-3 mx-4 md:mx-1'>
                    {
                        chefData.map(chef =>
                            <div >
                                <ChefCard chef={chef} key={chef.id}></ChefCard>
                            </div>
                        )
                    }
                </div>
            </div>
            {/* Extra two sections start here*/}
            <div className='py-6 md:py-12 grid md:grid-cols-3 bg-slate-100'>
                <div class="my-container ">
                    <LazyLoad effect="blur">
                        <img className='rounded' src={featured} alt="" />
                    </LazyLoad>
                </div>
                <div class="md:col-span-2 ps-4 pr-4 md:pr-10 text-center md:text-left py-6">
                    <h4 className='text-xl text-red-700'>Featured Dish</h4>
                    <hr className='w-2/4 md:w-1/6  my-2 border mx-auto md:mx-0' />
                    <h2 className='text-2xl md:text-4xl font-bold uppercase'>Lobster Tortellini</h2>
                    <p className='py-4 text-justify md:text-left text-lg'>Lobster tortellini is a type of pasta dish that features small, stuffed pasta pouches filled with a mixture of lobster meat, cheese, and herbs. The tortellini is usually served in a rich and creamy sauce, which may include ingredients such as butter, garlic, cream, and Parmesan cheese. Lobster tortellini is often considered a gourmet or upscale dish, and it is typically served in fine dining restaurants or on special occasions. </p>
                    <button className='btn border-2 mb-4 bg-transparent hover:bg-red-700 hover:border-red-700 text-black hover:text-white' onClick={handleOrder}>Order Now</button>
                </div>
            </div>

            <div className="bg-red-700 text-center py-12 md:py-24">
                <h4 className=' text-white text-2xl md:text-4xl font-bold uppercase'>We Make Delicious & Nutritious Food
                </h4>
                <button className='btn border-2 border-white bg-transparent hover:bg-red-700  text-white my-4 md:my-6' onClick={handleBookTable}>Book Your Table</button>
            </div>
        </>
    );
};

export default Home;