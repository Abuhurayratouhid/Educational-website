import React from 'react';

const Blog = () => {
    return (
        <div className='text-center md:mt-10 md:mb-10'>
            <h1 className='text-5xl pb-5'>Blogs</h1>

            {/* blog  */}
            <div className=''>
                {/* blog no-1  */}
                <div className="card  bg-slate-100 md:mt-10 md:mx-60">
                    <div className="card-body">
                        <h2 className="text-2xl text-center">What is cors ?</h2>
                        <h2 className="text-2xl text-center">Ans:</h2>
                        <p>CORS stands for Cross-Origin Resource Sharing. It allows us to relax the security applied to an API. <br /> This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.

                        <br /> In other words, CORS is a browser security feature that restricts cross-origin HTTP requests with other servers and specifies which domains access your resources.</p>

                    </div>
                </div>
                {/* blog no 2 */}
                <div className="card  bg-slate-100 md:mt-10 md:mx-60">
                    <div className="card-body">
                        <h2 className="text-2xl text-center">Why are you using firebase? </h2>
                        <h2 className="text-2xl text-center">what other options do you have to implement authentication without firebase ?</h2>
                        <h2 className="text-2xl text-center">Ans:</h2>
                        <p>Firebase is a backend as a service platform backed by Google that provides a set of tools to help developers build, release and monitor web, Android, and IOS apps as well as engage with your users. We are talking about Authentication, Database, Storage, Real-Time Database, hosting, and others

                        <br />  other option : <br />
                        Auth0, MongoDB, Passport, Okta, 
                        </p>

                    </div>
                </div>
                {/* blog no 3 */}
                <div className="card  bg-slate-100 md:mt-10 md:mx-60">
                    <div className="card-body">
                        <h2 className="text-2xl text-center">How does the private route work?</h2>
                        <h2 className="text-2xl text-center">Ans:</h2>
                        <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).

                        <br /> The private route component is used to protect selected pages in a React app from unauthenticated users.</p>

                    </div>
                </div>
                {/* blog no 4 */}
                <div className="card  bg-slate-100 md:mt-10 md:mx-60">
                    <div className="card-body">
                        <h2 className="text-2xl text-center">What is Node? How does Node work?</h2>
                        <h2 className="text-2xl text-center">Ans:</h2>
                        <p>Node. js is a single-threaded, open-source, cross-platform runtime environment for building fast and scalable server-side and networking applications. It runs on the V8 JavaScript runtime engine, and it uses event-driven, non-blocking I/O architecture, which makes it efficient and suitable for real-time applications.

                        <br /> It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;