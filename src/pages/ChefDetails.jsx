import React from 'react';
import { FaBirthdayCake, FaHeart, FaRegChartBar } from 'react-icons/fa';
import { useLoaderData, useParams } from 'react-router-dom';

const ChefDetails = () => {
    const { id } = useParams();
    const ChefDetails = useLoaderData();
    const { name, img, likes, recipes, experierecipesnce, description } = ChefDetails;
    console.log(ChefDetails);
    return (
        <div className='my-container flex items-center py-10 border shadow my-4 px-4 rounded'>

            <img src={img} alt="" className='w-1/4 rounded' />
            <div className='px-10'>
                <h2 className="text-2xl font-semibold">{name}</h2>
                <p>{description}</p>
                <p>Years of experience: {experierecipesnce}</p>
                <div className='flex items-center gap-2'>
                    <FaRegChartBar></FaRegChartBar>
                    <p> Years of experience: {experierecipesnce}</p>
                </div>
                <div className='flex items-center gap-2'>
                    <FaBirthdayCake></FaBirthdayCake>
                    <p> Top Recipes: {recipes}</p>
                </div>
                <div className='flex items-center gap-2'>
                    <FaHeart></FaHeart>
                    <p><b>Total likes: </b>{likes}</p>
                </div>
                
            </div>
        </div>
    );
};

export default ChefDetails;