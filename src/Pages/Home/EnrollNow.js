import React from 'react';
import { Link } from 'react-router-dom';

const EnrollNow = () => {
    return (
        <div>
                <div className="hero min-h-screen bg-slate-300">
                    <div className="hero-content flex-col lg:flex-row">
                        <img alt='' src="https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" className="lg:w-96 h-96  rounded-lg shadow-2xl" data-aos="fade-right" data-aos-duration="3000"/>
                        <img alt='' src="https://images.unsplash.com/photo-1536148935331-408321065b18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" className="lg:w-96 h-72 rounded-lg shadow-2xl" data-aos="fade-right" data-aos-duration="3000"/>
                        <div data-aos="fade-left" data-aos-duration="3000">
                            <h1 className="text-5xl font-bold">Be part of them!</h1>
                            <p className="py-6">Never stop exploring the new things . </p>
                            <button className="btn btn-primary transition duration-150 ease-out hover:ease-in"><Link to='/courses'>enroll now </Link></button>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default EnrollNow;