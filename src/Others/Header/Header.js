import React from 'react';
import { Link } from 'react-router-dom';
import { } from 'react-icons/fa';
import logo from '../../Assets/logo (2).png'
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const Header = () => {
    const {user,logOut} = useContext(AuthContext)

    const handleLogOut = ()=>{
        logOut()
        .then(()=>{})
        .catch(e => console.log(e))
    }
    return (
        <div>

            <div className="navbar bg-blue-200  md:flex justify-between ">
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

                        <Link to='/' className="ml-4 normal-case text-xl max-sm:hidden"> EduCamb </Link>
                        
                        
                    </div>

                    <Link className='ml-1 hidden md:block md:ml-20' to='/'>Home</Link>
                    <Link className='ml-3 md:ml-4' to='/courses'>Courses </Link>
                    <Link className='ml-3 md:ml-4' to='/blog'>Blog  </Link>
                    <Link className='ml-1 hidden md:block md:ml-4' to='/register'>Register</Link>
                </div>
                <div className='flex items-center'>

                    
                    {/* test */}
                    {
                        !user?.uid ?
                        <Link className='ml-1 md:ml-4 pr-5' to='/login'>Login</Link>
                        :
                        <>
                        
                        <Link onClick={handleLogOut} to='/' className="ml-4 normal-case  "> Logout  </Link>

                        <Link to='/' className="ml-4 rounded-full normal-case text-xl tooltip  tooltip-bottom" data-tip={user?.displayName}> <img style={ { height: '30px', borderRadius: '50%' }} src={user?.photoURL } alt="" /></Link>
                        {/* <div className="tooltip  tooltip-bottom" >
                        </div> */}
                        </>
                    }
                    
                </div>
            </div>

        </div>
    );
};

export default Header;