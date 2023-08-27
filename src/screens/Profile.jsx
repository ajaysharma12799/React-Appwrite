import React, { useEffect } from 'react'
import TodoForm from './TodoForm'
import Todos from './Todos'
import { useNavigate } from 'react-router-dom'

const Profile = ({ currentUser }) => {
    const navigate = useNavigate()

    useEffect(() => {
        if (!currentUser) {
            navigate('/');
        }
    }, [])
    return (
        <div className='w-[90%] mx-auto my-5'>
            <TodoForm currentUser={currentUser} />
            <Todos />
        </div>
    )
}

export default Profile