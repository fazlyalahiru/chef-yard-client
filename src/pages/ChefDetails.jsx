import React from 'react';
import { FaBirthdayCake, FaHeart, FaRegChartBar, FaRegThumbsUp } from 'react-icons/fa';
import { useLoaderData, useParams } from 'react-router-dom';
import ChefDetailsCard from '../components/ChefDetailsCard';

const ChefDetails = () => {
    const { id } = useParams();
    const ChefDetails = useLoaderData();
    const { chef_name, img, likes, recipes, experierecipesnce, description } = ChefDetails;
    console.log(ChefDetails);
    return (
        <>
            <div className='my-container flex items-center py-10 border shadow my-4 px-4 rounded'>

                <img src={img} alt="" className='w-1/4 rounded' />
                <div className='px-10'>
                    <h2 className="text-2xl font-semibold">{chef_name}</h2>
                    <p className='pr-52 py-2'>{description}</p>

                    <div className='flex items-center gap-2'>
                        <FaRegChartBar></FaRegChartBar>
                        <p> Years of experience: {experierecipesnce}</p>
                    </div>
                    <div className='flex items-center gap-2 py-1'>
                        <FaBirthdayCake></FaBirthdayCake>
                        <p> Top Recipes: {recipes.length}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaRegThumbsUp></FaRegThumbsUp>
                        <p>Total likes: {likes}</p>
                    </div>

                </div>
            </div>
            <div className='my-container grid grid-cols-3 gap-4 my-container py-3'>
                {
                    recipes.map(recipe=><div>
                        <ChefDetailsCard recipe={recipe}></ChefDetailsCard>
                    </div>)
                }

            </div>
        </>
    );
};

export default ChefDetails;