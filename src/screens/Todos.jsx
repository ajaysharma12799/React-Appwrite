import React, { useEffect, useState } from 'react'
import { databases } from '../appwrite/appwrite'

const Todos = () => {
    const [todos, setTodos] = useState([]);
    const fetchDocuments = () => {
        const dbPromise = databases.listDocuments("64ea2bfceb77eba14571", '64ea2c01b9c072c9de09');

        dbPromise.then((resp) => {
            setTodos(resp.documents);
        })
    }

    const deleteDocument = (id) => {
        const dbPromise = databases.deleteDocument("64ea2bfceb77eba14571", '64ea2c01b9c072c9de09', id);

        dbPromise.then((resp) => {
            console.log(resp);
            window.location.reload();
        });
    }

    useEffect(() => {
        fetchDocuments();
    }, []);

    return (
        <div>
            <h1>Todos</h1>
            <div className='grid grid-cols-3 gap-5'>
                {
                    todos?.map((todo, idx) => {
                        return (
                            <div className='w-full shadow-xl w-1/2 p-3' key={idx}>
                                <h1 className='capitalize'>{todo.title}</h1>
                                <p>USER: {todo?.user}</p>
                                <button onClick={
                                    () => deleteDocument(todo.$id)
                                } className='bg-red-500 w-full rounded-0 text-white mt-3 p-2'>Delete</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Todos