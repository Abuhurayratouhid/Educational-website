import React from 'react';
import { FaGithub,FaGoogle } from 'react-icons/fa';
import { useState } from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import loginImage from '../../Assets/login.jpeg';

const Login = () => {
    const [error, setError]= useState('')
    const {userLogin,GoogleLogin,githubLogin,setLoading}= useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';


    const handleLoginSubmit = (e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)
        userLogin(email,password)
        .then(result => {
            const user = result.user;
            form.reset();
            navigate(from, { replace: true})
            setError('')
            console.log(user)
        })
        .catch(error => {
            const errorMassage = error.message;
            setError(errorMassage)
        })
        .finally(() => {
            setLoading(false);
        })
    }

    // google login 
    const handleGoogleLogin= ()=>{
        GoogleLogin()
        .then(result =>{
            const user = result.user;
            navigate(from, { replace: true})
            console.log(user)
        })
        .catch(e => console.log(e))
    }

    // github login
    const handleGitHubLogin = ()=>{
        githubLogin()
        .then(result => {
            const user = result.user;
            navigate(from, { replace: true})
            console.log(user)
        })
        .catch(e => console.log(e))
    }
    
    return (
        <div>
            <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: `url("https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg?w=2000")` }}>
                <div className=" flex ">
                    {/* <div className=" ">
                     
                        <img src={loginImage} alt="" />
                        
                        
                    </div> */}
                    
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-black text-white">
                        {/* form start  */}
                        <form onSubmit={handleLoginSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                <p  className="label-text-alt link ">Are you new here? <Link to='/register' className='link-hover text-primary text-2xl'>Register </Link> </p>
                                </label>
                                <label className="label">
                                <p  className="label-text-alt link text-xl text-red-400"> {error}  </p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                                <div className='flex justify-around '>
                                <button onClick={handleGitHubLogin} className="btn text-3xl mt-3 w-[50%]"><FaGithub></FaGithub></button>
                                <button onClick={handleGoogleLogin} className="btn text-3xl mt-3 w-[50%] ml-2"><FaGoogle></FaGoogle></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;