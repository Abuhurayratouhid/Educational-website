import React from 'react';
import coaching from '../Assets/coaching.png';
import selfDevelopment from '../Assets/selfDevelopment.jfif';
import consultation from '../Assets/Consultation.png';
import livePrograms from '../Assets/livePrograms.jpg';

const Features = () => {
    const features = [
        {
            heading: 'Coaching',
            image: coaching,
        },
        {
            heading: 'self-development',
            image: selfDevelopment,
        },
        {
            heading: 'Consultation',
            image: consultation,
        },
        {
            heading: 'Live programs',
            image: livePrograms,
        },
    ]
    return (
        <div>
            <h1>This is Features section </h1>
            <div className='lg:flex justify-between mx-10'>
                <div className='w-96 h-96 bg-blue-300'>
                    <h3>Coaching</h3>
                    <p>Magnetized strongly enough pre vending domain overeus all initial results to estimate.</p>
                </div>
                <div>div-2</div>
                <div>div-3</div>
            </div>
        </div>
    );
};

export default Features;