import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1515343480029-43cdfe6b6aae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGxhcHRvcCUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-3xl ">Welcome to <br /> <span className='text-6xl font-bold'>EduCamb </span>  </h1>
                        <p className="mb-5">To live a creative life, we must lose our fear of being wrong. If you are not willing to risk the usual you will have to settle for the ordinary. Opportunities don't happen, you create them.</p>
                        {/* <button className="btn btn-outline  text-white">Get Started</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;