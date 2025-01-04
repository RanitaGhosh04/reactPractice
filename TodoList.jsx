import React, { useState } from 'react'

const TodoList = () => {
    const [input, setInput] = useState('')
    const [todos, setTodos] = useState([])
    const [editIndex, setEditIndex] = useState(null)

    const handleSubmit = () => {
        if(input.trim()!=='')
        {
            if(editIndex!==null)
            {
                const updatedTodo = [...todos]
                updatedTodo[editIndex] = input
                setTodos(updatedTodo)
                setEditIndex(null)
            }
            else
            {
                setTodos([...todos,input])
            }
            
            setInput('')
        }
    }

    const handleEdit = (idx) => {
        setInput(todos[idx])
        setEditIndex(idx)
    }

    const handleDelete = (idx) => {
        const updatedTodos = todos.filter((_, index) => index !== idx);
        setTodos(updatedTodos);
    }
  return (
    <>
    <input type="text"
    onChange={(e)=>setInput(e.target.value)}
    value={input}
    />
    <button
    onClick={handleSubmit}
    > {editIndex !==null ? 'Update' : 'Submit'}</button>
    <button>Cancel</button>
    <ul>
        {
            todos.map((todo,idx)=>(
                <li key={idx}>{todo}
                <button
                onClick={()=>handleEdit(idx)}
                >Edit</button>
                <button
                onClick={()=>handleDelete(idx)}
                >Delete</button>
                </li>
            ))
        }
    </ul>
    </>
  )
}

export default TodoList