import React, { useState } from 'react';
import { FaArrowCircleRight, FaHeart, FaRegHeart, FaRegStar, FaRegThumbsUp, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';
import { toast } from 'react-hot-toast';


const ChefDetailsCard = ({ recipe}) => {
    const { name, ingradient, cookingMethod, rating, recipe_img } = recipe;

    const [favorite, setFavorite] = useState(false)
    const handleFavorite = ()=>{
        setFavorite(true)
        return toast.success(`${name} added to favorite list!`)
    }
    return (
        <div>
            <div className='shadow pt-4 rounded-lg'>
                <img src={recipe_img} className='rounded w-5/6 m-auto' />
                <div className='py-6  px-4'>
                    <div >
                        <h2 className="text-2xl font-semibold">{name}</h2>
                        
                        <p className='pt-2 pb-4'><span className='font-semibold'>Cooking method</span>: {cookingMethod}</p>
                    </div>
                    <div>
                        <b>Ingradient</b>
                        {
                            ingradient.map(i=><li>{i}</li>)
                        }
                    </div>
                </div>
                <div className='bg-gray-200 flex justify-between items-center py-3 px-5 rounded-b-lg'>
                    <div className='flex justify-center items-center gap-1'>
                        <Rating className='text-danger'
                            placeholderRating={rating}
                            readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                        />
                        <p>{rating}</p>
                    </div>
                    
                        
                        {
                        favorite ?     <button className='flex justify-center items-center gap-1 text-gray-400' disabled> <p ><FaRegHeart className='text-gray-400 -mb-1'></FaRegHeart></p>Favorite</button>: <button className='flex justify-center items-center gap-1' onClick={handleFavorite}> <p className='cursor-pointer'><FaRegHeart className='text-red-700 -mb-1'></FaRegHeart></p>Favorite</button>
                        }
                    
                </div>

            </div>
        </div>
    );
};

export default ChefDetailsCard;