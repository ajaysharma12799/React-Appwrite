import React, { useState } from 'react'
import { databases } from '../appwrite/appwrite'
import { v4 as uuid } from 'uuid'

const TodoForm = ({ currentUser }) => {
    const [todo, setTodo] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();

        const dbPromise = databases.createDocument("64ea2bfceb77eba14571", '64ea2c01b9c072c9de09', uuid(), {
            title: todo,
            user: currentUser?.$id,
        });

        dbPromise.then((resp) => {
            console.log(resp);
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="my-3">
                    <input type="text" value={todo} onChange={e => setTodo(e.target.value)} placeholder='Enter Todo' className='border border-blue-500 rounded-md px-2 py-3 w-full' />
                </div>
                <div className="my-3">
                    <button className='bg-blue-500 w-full py-3 rounded-md text-white'>Add Todo</button>
                </div>
            </form>
        </div>
    )
}

export default TodoForm