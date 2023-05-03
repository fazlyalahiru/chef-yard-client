import React from 'react';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';
import { FaArrowCircleRight, FaRegStar, FaStar } from 'react-icons/fa';

const ChefCard = ({ chef }) => {
    const { id, name, img, experience, recipes, likes } = chef;
    console.log(chef);
    return (
        <div>
            <div className='shadow pt-4 rounded-lg'>
                <img src={img} className='rounded w-5/6 m-auto' />
                <div className='py-6'>
                    <div className='text-center'>
                        <h2 className="text-center text-2xl font-semibold">{name}</h2>
                        <p>Experience: {experience}</p>
                        <p>No. of Recipes: {recipes.length}</p>

                    </div>
                </div>
                <div className='bg-gray-200 flex justify-between items-center py-3 px-5 rounded-b-lg'>
                    <div>
                        <p>Total likes: {likes}</p></div>
                    <Link to={`/details/${id}`} className='flex justify-center items-center'>
                        <button className="mr-2">View Recipes </button><p className='cursor-pointer'><FaArrowCircleRight className='text-blue-700 -mb-1'></FaArrowCircleRight></p>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default ChefCard;