import React, { useContext, useRef, useState } from 'react';
import { FaGithub, FaGoogle, FaTimes } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';
import { toast } from 'react-hot-toast';

const Login = () => {
    const formRef = useRef(null);
    const { signIn, singnInWithGoogle, signInGithub } = useContext(AuthContext);
    const navigate = useNavigate();
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")


    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    console.log(from);
    const handleSignIn = event => {
        event.preventDefault();
        signIn(email, password)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                navigate(from, { replace: true })
                formRef.current.reset();
                return toast.success('login successful')
            })
            .catch(error => {
                setError(error.message)
            })
    }
    const handleloginWithGoogle = () => {
        singnInWithGoogle()
            .then((result) => {
                console.log(result);
                navigate(from, { replace: true })
                return toast.success('login successful')
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleloginWithGithub = () => {
        signInGithub()
            .then((result) => {
                console.log(result);
                navigate(from, { replace: true })
                setError("")
                return toast.success('login successful')
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleError = () => {
        setError(null)
    }


    return (
        <div className=' grid md:grid-cols-3'>
            <div></div>
            <div className=' py-6 rounded-md my-6 shadow-lg border mx-4 md:mx-1'>
                <div className='mx-auto my-container  flex-col items-center gap-2 px-6'>
                    <form ref={formRef} className='grid gap-3'>

                        <h4 className='text-2xl text-center font-semibold'>Please login</h4>
                        {
                            error && <div className='flex w-full bg-red-700 items-center justify-between md:px-6 px-2 text-sm md:text-base rounded'>
                                <p  className=' text-white  py-2 rounded'>{error}</p>
                                <FaTimes className='text-white cursor-pointer' onClick={handleError}></FaTimes>
                            </div>
                        }
                        <input onChange={(e) => setEmail(e.target.value)} type="email" name='email' placeholder="Email" className="input border border-gray-300 w-full block" />
                        <input onChange={(e) => setPassword(e.target.value)} type="password" name='password' placeholder="Password" className="input border border-gray-300 w-full block" />
                        <button onClick={handleSignIn} className="shadow bg-black hover:bg-red-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-full" type="button">
                            Sign In
                        </button>
                        <p>Don't have account?<Link className='ms-2 text-red-700 hover:text-black' to="/register">Register</Link></p>
                    </form>
                    <div>
                        <h4 className='mt-4 font-semibold text-center'>- or -</h4>
                        <div className='flex gap-4 py-2 w-full justify-center'>
                            <div onClick={handleloginWithGoogle} className='flex items-center gap-2 border rounded px-4 py-2 hover:bg-blue-500 hover:text-white cursor-pointer'>
                                <FaGoogle />
                                <button> Google</button>
                            </div>
                            <div onClick={handleloginWithGithub} className='flex items-center gap-2 border rounded px-4 py-2 hover:bg-black hover:text-white cursor-pointer'>
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

export default Login;