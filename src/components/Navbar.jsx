import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { account } from '../appwrite/appwrite'

const Navbar = ({ currentUser }) => {
    const navigate = useNavigate();
    const handleLogout = async () => {
        await account.deleteSession('current');
        navigate('/');
    }

    return (
        <nav className='bg-blue-500 p-5 flex items-center justify-between text-white'>
            <h1 className='font-medium text-lg'>Appwrite Todo</h1>
            <ul className='flex items-center gap-5'>
                {
                    currentUser ? (
                        <>
                            <li>
                                <Link to={'/profile'}>Profile</Link>
                            </li>
                            <li>
                                <button onClick={handleLogout} className='bg-red-500 rounded-md px-3 py-2'>Logout</button>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link to={'/'}>Login</Link>
                            </li>
                            <li>
                                <Link to={'/register'}>Register</Link>
                            </li>
                        </>
                    )
                }
            </ul>
        </nav>
    )
}

export default Navbar