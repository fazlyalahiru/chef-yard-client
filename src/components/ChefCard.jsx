import React from 'react';
import { Link } from 'react-router-dom';

const ChefCard = ({ chef }) => {
    console.log(chef);
    const { id, name, img, experience, recipes, rating } = chef;
    console.log(id);
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <div className='text-left'>
                        <li>Experience: {experience}</li>
                        <li>No. of Recipes: {recipes}</li>
                        <li>Rating: {rating.number}</li>
                    </div>

                    <div className="card-actions py-4">
                        <button className='btn border-2 border-red-600 bg-transparent hover:bg-red-600 hover:border-red-600 text-black hover:text-white'>Explor Now</button>
                        <Link to={`/details/${id}`}>
                            <button className="btn btn-primary text-white">View Recipes</button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;