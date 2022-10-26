import React from 'react';
import { Link } from 'react-router-dom';
import { FaBeer } from 'react-icons/fa';
import logo from '../../Assets/logo (2).png'

const Header = () => {
    return (
        <div>

            <div className="navbar bg-blue-200  md:flex justify-between">
                <div>
                    <div className='text-white'>
                        
                        <Link to='/'>
                            <img
                                src={logo}
                                style={{ height: '40px' }}
                                alt="" />

                        </Link>

                    </div>
                    <div className='text-white'>

                    <Link className="ml-4 normal-case text-xl"> EduCamb </Link>
                    </div>

                    <Link className='ml-1 hidden md:block md:ml-20' to='/'>Home</Link>
                    <Link className='ml-1 md:ml-4' to='/courses'>Courses </Link>
                    <Link className='ml-1 md:ml-4' to='/blog'>Blog  </Link>
                    <Link className='ml-1 hidden md:block md:ml-4' to='/register'>Register</Link>
                </div>
                <div className=''>

                    <Link className='ml-1 md:ml-4 mr-5' to='/login'>Login</Link>
                </div>
            </div>

        </div>
    );
};

export default Header;