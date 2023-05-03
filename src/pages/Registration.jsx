import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div className=' grid grid-cols-3'>
            <div></div>
            <div className=' py-6 rounded-md my-4 shadow-lg border bg-gray-100'>
                <div className='mx-auto my-container  flex-col items-center gap-2 px-6'>
                    <form className='grid gap-3'>

                        <h4 className='text-2xl text-center font-semibold'>Please Register</h4>
                        <input type="text" name='name' placeholder="Your name" className="input input-bordered w-full block" />
                        <input type="text" name='photo' placeholder="Your photo url" className="input input-bordered w-full block" />
                        <input type="email" name='email' placeholder="Your email" className="input input-bordered w-full block" />
                        <input type="password" name='password' placeholder="Enter password" className="input input-bordered w-full block" />
                        <button class="shadow bg-black hover:bg-red-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-full" type="button">
                            Sign Up
                        </button>
                        <p className='pr-2'>Already have an account?<Link to="/login" className='ms-2 text-red-700 hover:text-black' >Login</Link></p>
                    </form>
                    <div>
                        <h4 className='mt-4 font-semibold text-center'>- or sign up with -</h4>
                        <div className='flex gap-4 py-2 w-full justify-center'>
                            <div className='flex items-center gap-2 border rounded px-4 py-2 hover:bg-blue-500 hover:text-white cursor-pointer'>
                                <FaGoogle />
                                <button> Google</button>
                            </div>
                            <div className='flex items-center gap-2 border rounded px-4 py-2 hover:bg-black hover:text-white cursor-pointer'>
                                <FaGithub></FaGithub>
                                <button >  Github</button>
                            </div>
                        </div>


                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default Registration;