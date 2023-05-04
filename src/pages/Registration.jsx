import React, { useContext, useRef, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';
import { getAuth, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';
import { toast } from 'react-hot-toast';
const auth = getAuth(app)

const Registration = () => {
    const formRef = useRef(null);
    const { createUser, singnInWithGoogle, signInGithub } = useContext(AuthContext)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [photo, setPhoto] = useState("")
    const [error, setError] = useState("")
    


    const handleRegister = event => {
        event.preventDefault();
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                setError("")
                formRef.current.reset();
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photo
                }).then(() => {
                    window.location.reload()
                //    console.log(photoURL);
                    return toast.success('User created successfully');
                }).catch((error) => {
                    return toast.error({ error })
                });

            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })
    }

    const handleRegisterWithGoogle = () => {
        singnInWithGoogle()
            .then((result) => {
                setError("")
                return toast.success('User Created successfully')
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })
    }

    const handleRegistrationWithGithub = () => {
        signInGithub()
            .then((result) => {
                console.log(result);
                setError("")
                return toast.success('User Created')
            })
            .catch(error => {
                console.log(error);
                setError(error.message)

            })
    }

    return (
        <div className=' grid grid-cols-3'>
            <div></div>
            <div className=' py-6 rounded-md my-4 shadow-lg border '>
                <div className='mx-auto my-container  flex-col items-center gap-2 px-6'>
                    <form ref={formRef} className='grid gap-3'>
                        <h4 className='text-2xl text-center font-semibold'>Please Register</h4>
                        <p className='text-red-700'>{error}</p>
                        <input onChange={(e) => setName(e.target.value)} type="text" name='name' placeholder="Name" className="input input-bordered w-full block" />

                        <input onChange={(e) => setEmail(e.target.value)} type="email" name='email' placeholder="Email" required className="input input-bordered w-full block" />

                        <input onChange={(e) => setPhoto(e.target.value)} type="text" name='photo' placeholder="Photo URL" className="input input-bordered w-full block" />

                        <input onChange={(e) => setPassword(e.target.value)} type="password" name='password' placeholder="Password" required className="input input-bordered w-full block" />
                        <button onClick={handleRegister} className="shadow bg-black hover:bg-red-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-full" type="button">
                            Sign Up
                        </button>
                    </form>
                    <p className='pr-2'>Already have an account?<Link to="/login" className='ms-2 text-red-700 hover:text-black' >Login</Link></p>
                    <div>
                        <h4 className='mt-4 font-semibold text-center'>- or sign up with -</h4>
                        <div className='flex gap-4 py-2 w-full justify-center'>
                            <div onClick={handleRegisterWithGoogle} className='flex items-center gap-2 border rounded px-4 py-2 hover:bg-blue-500 hover:text-white cursor-pointer'>
                                <FaGoogle />
                                <button> Google</button>
                            </div>
                            <div onClick={handleRegistrationWithGithub} className='flex items-center gap-2 border rounded px-4 py-2 hover:bg-black hover:text-white cursor-pointer'>
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