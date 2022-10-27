import React from 'react';
import { FaFileDownload, FaRegGem } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const allDetails = useLoaderData();

    const { id, details, picture, price, duration, rating, toStart, name } = allDetails;
    console.log(allDetails)
    return (
        <div>
            <div className="card w-[100%] bg-base-100 shadow-xl ">
                <div className="card-body">
                    <div className='bg-slate-400 flex justify-around p-5 text-white'>
                        <div><h2 className="card-title text-3xl">{name}</h2></div>
                        <div className='text-3xl ml-32'>PDF<FaFileDownload></FaFileDownload></div>
                        
                    </div>
                    
                    <div className='w-[50%] ml-[25%]'>

                    <p>Rating : {rating}</p>
                    <p>Course duration : {duration} Months </p>
                    <p>To start this course : {toStart}days left </p>
                    <p> Course fee : $ {price} </p>
                    </div>
                </div>
                <figure><img className='w-[50%] h-[30%]' src={picture} alt="Shoes" /></figure>
                <div className='text-center m-5'>
                <button className="btn  btn-primary ">
                    <Link to={`/checkout/${id}`}>
                    <p className='text-sky-500 text-2xl ml-6'><FaRegGem ></FaRegGem></p>
                     
                    purchase</Link>
                   
                    </button>
                </div>
                <div className='w-[50%] ml-[25%]'>
                    
                    <p className='text-2xl'>Why you learn this language:</p>
                    <p>{details}</p>
                </div>    
                    
            </div>
        </div>
    );
};

export default CourseDetails;