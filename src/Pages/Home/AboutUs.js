import React from 'react';
import aboutPic from '../../Assets/aboutUs.png'

const AboutUs = () => {
    return (
        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
            <div className='w-full p-10'>
                <img src={aboutPic} className='w-full lg:h-[500px]' alt="about us pic" />
            </div>
            <div className='w-full  flex justify-center items-center'>
               <div className='lg:w-[499px]'>
                <h1 className='text-4xl font-bold pb-5 text-center lg:text-start'>About Educamb</h1>
                <p className='text-center lg:text-start'>Educamb provides a diverse selection of courses covering various subjects, including academic disciplines, vocational skills, professional development, and personal interests.</p>
               </div>
            </div>
        </div>
    );
};

export default AboutUs;