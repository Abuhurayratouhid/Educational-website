import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const allDetails = useLoaderData();

    const {id,details,picture,price,duraration,rating,toStart,name} = allDetails;
    console.log(allDetails)
    return (
        <div>
            Details page 
        </div>
    );
};

export default CourseDetails;