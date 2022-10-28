import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Register = () => {
    const [error, setError]= useState('')
    const {createUser , user, GoogleLogin,updateUserProfile } = useContext(AuthContext)
    const handleFormSubmit = (e)=>{
        e.preventDefault();
        const form = e.target ;
        const name = form.name.value ;
        const photoURL = form.PhotoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL,email,password)
        createUser(email,password)
        .then(result =>{
            const user = result.user;
            form.reset();
            setError('')
            console.log(user)
            handleUpdateUserProfile(name, photoURL)
            
        })
        .catch(error => {
            const errorMassage = error.message;
            setError(errorMassage)
        })


    }

    const handleUpdateUserProfile = (name,photoURL) =>{
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
        .then(result => {
            
        })
        .catch(e => console.log(e))
    }

    const handleGoogleLogin= ()=>{
        GoogleLogin();
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Please Register !</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-blue-200">

                        {/* from start  */}

                        <form onSubmit={handleFormSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full name </span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL </span>
                                </label>
                                <input type="text" name='PhotoURL' placeholder="Photo URL" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Emil </span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                                <label className="label">
                                    <p  className="label-text-alt link ">Already have an account? <Link to='/login' className='link-hover text-primary text-2xl'>Login</Link> </p>
                                </label>
                                <label className="label">
                                    <p  className="label-text-alt text-xl text-red-400">{error} </p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;