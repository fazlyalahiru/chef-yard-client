import React from 'react';

const Footer = () => {
    return (
        <div className=' bg-gray-950'>
            <div className=' grid md:grid-cols-5 py-10 my-container  text-gray-300 border-b border-gray-800 '>
                <div className='px-5 md:px-3 pt-4'>
                    <h1 className='text-xl md:text-2xl font-bold  uppercase'>Job Shop</h1>
                    <p className='py-2'>Discover thousands of job opportunities and manage your job applications from start to finish. Your future starts here.</p>
                </div>
                <div className='px-5 md:px-3 pt-4'>
                    <h1 className='font-bold uppercase'>Company</h1>
                    <ul className='py-2 '>
                        <li>About us</li>
                        <li>Work</li>
                        <li>Latest News</li>
                        <li>Career</li>
                    </ul>
                </div>
                <div className='px-5 md:px-3 pt-4'>
                    <h1 className='font-bold uppercase'>Product</h1>
                    <ul className='py-2'>
                        <li>Prototype</li>
                        <li>Pricing</li>
                        <li>Customers</li>
                        <li>Integrations</li>
                    </ul>
                </div>
                <div className='px-5 md:px-3 pt-4'>
                    <h1 className='font-bold uppercase'>Support</h1>
                    <ul className='py-2'>
                        <li>Help desk</li>
                        <li>Sales</li>
                        <li>Become a partner</li>
                        <li>Developers</li>
                    </ul>
                </div>
                <div className='px-5 md:px-3 pt-4'>
                    <h1 className='font-bold uppercase'>Contact</h1>
                    <ul className='py-2'>
                        <li>1/12, South Jatrabari, Dhaka</li>
                        <li>+8801303359120</li>

                    </ul>
                </div>
            </div>
            <div className='text-gray-400 text-xs text-center md:flex md:justify-between my-container py-4'>
                <p className=' '>@2023 Job Shop. All Rights Reserved</p>
                <p>Powered by JOBSHOP LLC</p>
            </div>
        </div>
    );
};

export default Footer;