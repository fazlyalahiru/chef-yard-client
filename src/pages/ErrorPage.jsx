import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import errorImg from '../../public/error.jpg'
import Header from '../shared/Header'
import Footer from '../shared/Footer'

const ErrorPage = () => {
    const { error, status } = useRouteError()
    return (
        <>
        <Header></Header>
            <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>

                <div className='max-w-md text-center'>

                    <img className='w-72' src={errorImg} alt="" />
                    <p className='text-2xl font-semibold md:text-xl text-red-700 mb-8'>
                        {error?.message}
                    </p>
                    <Link to='/' className='btn btn-solid hover:bg-red-700 hover:border-red-700 hover:text-white'>
                        Back to homepage
                    </Link>
                </div>
            </div>
            <Footer></Footer>
        </>

    )
}

export default ErrorPage