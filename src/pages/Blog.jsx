import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className=' py-6 md:py-20  px-4 bg-gray-100'>
                <div className='my-container'>
                    <h1 className='text-center text-2xl md:text-4xl font-bold text-black'>Blog</h1>

                </div>

            </div>

            <div className='my-container'>
                <div className='grid md:grid-cols-2 gap-6 py-8 mx-4'>
                    <div className='shadow-md p-5 rounded'>
                        <h3 className='text-red-700 text-xl font-semibold py-2'>What is the differences between uncontrolled and controlled components?</h3>

                        <p>Controlled functional components are those whose state and behavior are controlled by the parent component and Uncontrolled components manage their own state internally.</p>

                        <p className='pt-2'>
                            The key differeces between controlled and uncontrolled components:
                            <li>Predictability: Controlled components are more predictable</li>
                            <li>Stability: Controlled components are more stable</li>
                            <li>Dependability: Controlled components depend on parent componen</li>
                        </p>

                    </div>
                    <div className='shadow-md p-5 rounded'>
                        <h3 className='text-red-700 text-xl font-semibold  py-2'>How to validate React props using PropTypes</h3>
                        <p>PropTypes is a build feature in React that allows the developers to define the types of props passed to a React component.</p>
                        <p className='pt-2'>React provides some validators to validate the props type when passing
                            <li>PropTypes.any</li>
                            <li>PropTypes.string</li>
                            <li>PropTypes.array</li>
                            <li>PropTypes.object</li>
                        </p>

                    </div>
                    <div className='shadow-md p-5 rounded'>
                        <h3 className='text-red-700 text-xl font-semibold py-2'>What is the difference between nodejs and express js?
                        </h3>
                        <p>Node.js is a free, cross-platform runtime environment and library for running web applications outside the client's browser. On the other hand, Express.js is one of the best web application frameworks for Node.js.</p>
                        <p className='pt-2'>In short, Node.js is used to execute JavaScript code outside of a web browser, while Express.js provides a set of tools and features to build web applications based on Node.js
                        </p>
                    </div>
                    <div className='shadow-md p-5 rounded'>
                        <h3 className='text-red-700 text-xl font-semibold  py-2'>What is a custom hook, and we create a custom hook?
                        </h3>
                        <p>In React, a custom hook is a JavaScript function that starts with the word ' use ' and it allows us to extract common stateful logic from a component so that it can be reused across multiple components.</p>
                        <p className='pt-2'>Custom hook is one of the core concept in React. Because it's help us to keep our code organize, reusable and easy to maintain.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;