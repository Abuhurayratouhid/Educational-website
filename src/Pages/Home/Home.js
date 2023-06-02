import React from 'react';
import { Link } from 'react-router-dom';
import Features from '../../Components/Features';
import Footer from '../../Others/Footer/Footer';
import Banner from './Banner';
import CoursePricing from './CoursePricing';
import EnrollNow from './EnrollNow';
import JoinUs from './JoinUs';
import Offer from './Offer';
import OurTeam from './OurTeam';
import Review from './Review';
import UpComingCourses from './UpComingCourses';
import AboutUs from './AboutUs';
import Blogs from './Blogs';
import NewsLetter from './NewsLetter';

const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <div>
                {/* <Features></Features> */}
            </div>
            <EnrollNow></EnrollNow>
            {/* Up coming courses section  */}
            <UpComingCourses></UpComingCourses>
            <JoinUs></JoinUs>
            <CoursePricing></CoursePricing>
            <OurTeam></OurTeam>
            <Offer></Offer>
            <AboutUs/>
            <Blogs/>
            <NewsLetter/>
            <Review></Review>
            <Footer></Footer>
            
        </div>
    );
};
export default Home;