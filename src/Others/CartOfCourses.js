import React from 'react';
import { Link } from 'react-router-dom';

const CartOfCourses = ({courses}) => {
    const {picture, name, id } = courses;
    return (
        <div className='md:m-5'>
            <Link to={`/details/${id}`}>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img 
                    src={picture} 
                    alt="" className="rounded-xl h-48" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    
                    <div className="card-actions">
                        <button className="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>
            </Link>
        </div>
    );
};

export default CartOfCourses;