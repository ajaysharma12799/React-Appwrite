import React, { useState } from 'react'
import { account } from '../appwrite/appwrite';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

const Register = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const registerPromise = account.create(
            uuid(),
            email,
            password,
            username
        );

        registerPromise
            .then((resp) => {
                console.log(resp);
                navigate('/profile');
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div className='w-1/2 mx-auto my-5'>
            <form className='w-full' onSubmit={handleSubmit}>
                <div className="my-3 w-full">
                    <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder='Enter Username' className='border rounded-md px-2 py-2 w-full' />
                </div>
                <div className="my-3 w-full">
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder='Enter Email' className='border rounded-md px-2 py-2 w-full' />
                </div>
                <div className="my-3 w-full">
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder='Enter Password' className='border rounded-md px-2 py-2 w-full' />
                </div>
                <div className="my-3 w-full">
                    <button className='bg-blue-500 w-full py-3 rounded-md text-white'>Register</button>
                </div>
            </form>
        </div>
    )
}

export default Register