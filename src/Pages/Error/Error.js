import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegSadCry } from 'react-icons/fa';

const Error = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-8xl ml-10 font-bold"><FaRegSadCry></FaRegSadCry> </h1>
                        <h1 className="text-5xl font-bold">Ops .... </h1>
                        <h1 className="text-4xl  text-red-500 font-bold">404 </h1>
                        <p className="py-6 text-3xl">Page not found </p>
                        <button className="btn "> <Link to='/'>Go back</Link> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error;