import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CartOfCourses from '../../Others/CartOfCourses';
import SidebarOfCourses from '../../Others/SidebarOfCourses';
import './Courses.css'

const Courses = () => {
    const allCourses = useLoaderData();
    // console.log(allCourses)
    return (
        <div className=' courses-page-container'>
            <div className='bg-blue-200 mt-10'>
                {
                    allCourses.map(courses =><SidebarOfCourses
                    key={courses.id}
                    courses={courses}
                    ></SidebarOfCourses> )
                }
               
            </div> 
            <div className='md:grid grid-cols-2'>
                {
                    allCourses.map(courses => <CartOfCourses
                    key={courses.id}
                    courses={courses}
                    ></CartOfCourses>)
                }
                 
            </div>
        </div>
    );
};

export default Courses;