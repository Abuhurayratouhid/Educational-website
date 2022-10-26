import React from 'react';

const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/premium-vector/mobile-app-development-background_73903-295.jpg?w=2000")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-3xl ">Welcome to <br /> <span className='text-6xl font-bold'>EduCamb </span>  </h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-outline  text-white">Get Started</button>
                    </div>
                </div>
            </div>
            <div>
                <div className="hero min-h-screen bg-slate-300">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src="https://www.mooc.org/hubfs/is-coding-right-for-me.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                        <img src="https://hot-town-images.s3.us-east-1.amazonaws.com/kotv/production/2016/February/17/girls-who-code-class-teaches-girls-computer-programming-selfconfidence.1455772709000-0.jpeg" className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">Be part of them!</h1>
                            <p className="py-6">Never stop exploring the new things . </p>
                            <button className="btn btn-primary transition duration-150 ease-out hover:ease-in">enroll now </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Up coming courses section  */}
            <div className='min-h-screen bg-slate-200'>
                {/* header  */}
                <div>
                    <h1 className='text-5xl font-bold pt-20'>Our up coming courses</h1>
                </div>

                <div className='md:flex justify-around'>
                    {/* card -1  */}
                    <div>
                        <div className="card w-96 bg-base-100 shadow-xl mt-28 hover:mt-20 ">
                            <figure><img className='h-56' src="https://sgp1.digitaloceanspaces.com/cosmosgroup/news/1071218_Graphic-Design.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Graphic design
                                    <div className="badge badge-secondary">coming soon</div>
                                </h2>
                                
                            </div>
                        </div>
                    </div>
                    {/* card -2 */}

                    <div>
                        <div className="card w-96 bg-base-100 shadow-xl mt-28 hover:mt-20">
                            <figure><img className='h-56' src="https://irestweb.com/storage/thumbnails/posts/UDML9jNu0.png" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    App development
                                    <div className="badge badge-secondary">coming soon</div>
                                </h2>
                                
                                
                            </div>
                        </div>

                    </div>
                    <div>
                        <div className="card w-96 bg-base-100 shadow-xl mt-28 hover:mt-20">
                            <figure><img className='h-56' src="https://www.ideoversity.com/wp-content/uploads/2022/03/game-development.png" alt="Shoes" /></figure>
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
        </div>
    );
};
export default Home;