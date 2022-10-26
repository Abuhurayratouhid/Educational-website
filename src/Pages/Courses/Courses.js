import React from 'react';
import CartOfCourses from '../../Others/CartOfCourses';
import SidebarOfCourses from '../../Others/SidebarOfCourses';
import './Courses.css'

const Courses = () => {
    return (
        <div className=' courses-page-container'>
            <div className=''>
               <SidebarOfCourses></SidebarOfCourses>
            </div> 
            <div className=''>
                <CartOfCourses></CartOfCourses> 
            </div>
        </div>
    );
};

export default Courses;