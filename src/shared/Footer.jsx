import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className=' bg-gray-950'>
            <div className=' grid md:grid-cols-5 py-10 my-container  text-gray-300 border-b border-gray-800 '>
                <div className='px-5 md:px-3 pt-4'>
                    <h1 className='text-xl md:text-2xl font-bold  uppercase'>Chef Yard</h1>
                    <p className='py-2'>Chef Yard is a worldwide brand that provides top-quality chefs for restaurants and professional kitchens.</p>
                </div>
                <div className='px-5 md:px-3 pt-4'>
                    <h1 className='font-bold uppercase'>Company</h1>
                    <ul className='py-2 '>
                        <li>About us</li>
                        <li>Work</li>
                        <Link to="/blog">Blogs</Link>
                        <li>Career</li>
                    </ul>
                </div>
                <div className='px-5 md:px-3 pt-4'>
                    <h1 className='font-bold uppercase'>Services</h1>
                    <ul className='py-2'>
                        <li>Top Chefs</li>
                        <li>Order Food</li>
                        <li>Party Arrange</li>
                        <li>Home Delivery</li>
                    </ul>
                </div>
                <div className='px-5 md:px-3 pt-4'>
                    <h1 className='font-bold uppercase'>Support</h1>
                    <ul className='py-2'>
                        <li>Help desk</li>
                        <li>Sales</li>
                        <li>Become a partner</li>
                        <li>Business deal</li>
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
                <p className=' '>@2023 Chef Yard. All Rights Reserved</p>
                <p>Powered by Fazly Alahi</p>
            </div>
        </div>
    );
};

export default Footer;