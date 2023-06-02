import React from 'react';

const UpComingCourses = () => {
    return (
        <div className='min-h-screen bg-slate-200'>
            {/* header  */}
            <div 
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            >
                <h1 className='text-5xl font-bold pt-20 text-center'>Our up coming courses</h1>
            </div>

            <div className='md:flex justify-around'>
                {/* card -1  */}
                <div 
                data-aos="flip-up" 
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                    <div className="card lg:w-96 bg-base-100 shadow-xl mt-28 ">
                        <figure><img className='h-56' src="https://sgp1.digitaloceanspaces.com/cosmosgroup/news/1071218_Graphic-Design.jpg" alt="Game" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Graphic design
                                <div className="badge badge-secondary">coming soon</div>
                            </h2>

                        </div>
                    </div>
                </div>
                {/* card -2 */}

                <div 
                data-aos="flip-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                >
                    <div className="card lg:w-96 bg-base-100 shadow-xl mt-28 ">
                        <figure><img className='h-56' src="https://irestweb.com/storage/thumbnails/posts/UDML9jNu0.png" alt="Game" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                App development
                                <div className="badge badge-secondary">coming soon</div>
                            </h2>


                        </div>
                    </div>

                </div>
                <div 
                data-aos="flip-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                >
                    <div className="card lg:w-96 bg-base-100 shadow-xl mt-28 ">
                        <figure><img className='h-56 w-full' src="https://img.freepik.com/free-vector/gradient-gamification-illustration_52683-80415.jpg?size=626&ext=jpg&ga=GA1.2.1098812981.1658356638&semt=sph" alt="Game" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Game development
                                <div className="badge badge-secondary">coming soon</div>
                            </h2>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default UpComingCourses;