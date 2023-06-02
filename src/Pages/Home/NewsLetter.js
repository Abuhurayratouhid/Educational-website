import React from 'react';

const NewsLetter = () => {
    return (
        <div className='bg-violet-600 w-full h-[400px] flex justify-center items-center px-2'>
            <div className='lg:w-[500px]'>
                <h3 className='text-center text-xl text-white'>SUBSCRIBE OUR NEWSLETTER</h3>
                <h1 className='text-center text-4xl font-bold py-10 text-white'>Get Every Latest News</h1>
                <div className='flex'>
                    <input type="text" placeholder="Enter your mail address..." className="input input-bordered w-full" />
                    <button className="btn ml-[-20px]">SUBSCRIBE</button>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;