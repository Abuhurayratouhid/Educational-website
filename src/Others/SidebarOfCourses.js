import React from 'react';
import { Link } from 'react-router-dom';

const SidebarOfCourses = ({courses}) => {
    const {id,name,} = courses;
    return (
        <div className='md:px-10'>
            <Link className='mt-10' to={`/details/${id}`}>

            <h1  className='mt-8 underline decoration-4   hover:bg-blue-200   text-2xl font-bold '>{name}</h1>
            </Link>
             
        </div>
    );
};

export default SidebarOfCourses;