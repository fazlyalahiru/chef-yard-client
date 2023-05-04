import React from 'react';
import { FaBirthdayCake, FaHeart, FaRegChartBar, FaRegThumbsUp } from 'react-icons/fa';
import { useLoaderData, useParams } from 'react-router-dom';
import ChefDetailsCard from '../components/ChefDetailsCard';
import LazyLoad from 'react-lazy-load';

const ChefDetails = () => {
    const { id } = useParams();
    const ChefDetails = useLoaderData();
    const { chef_name, img, likes, recipes, experience, description } = ChefDetails;
    return (
        <>
            <div className='my-container md:flex items-center py-10 border shadow md:my-4 px-4 rounded'>

                <img src={img} alt="" className='md:w-1/4 px-2 rounded' />


                <div className=' px-2 md:px-10'>
                    <h2 className="text-2xl font-semibold">{chef_name}</h2>
                    <p className=' py-2'>{description}</p>

                    <div className='flex items-center gap-2'>
                        <FaRegChartBar></FaRegChartBar>
                        <p> Years of experience: {experience}</p>
                    </div>
                    <div className='flex items-center gap-2 py-1'>
                        <FaBirthdayCake></FaBirthdayCake>
                        <p> No of Recipes: {recipes.length}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaRegThumbsUp></FaRegThumbsUp>
                        <p>Total likes: {likes}</p>
                    </div>

                </div>
            </div>
            <div className='my-container grid md:grid-cols-3 gap-4 my-container py-3'>
                {
                    recipes.map(recipe => <div className='mx-4 md:mx-0'>
                        <ChefDetailsCard recipe={recipe} key={recipe.index}></ChefDetailsCard>
                    </div>)
                }

            </div>
        </>
    );
};

export default ChefDetails;