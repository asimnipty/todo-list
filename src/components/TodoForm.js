import React, {useState} from 'react'
import './TodoForm.css'

export const TodoForm = () => {

    const [item, setItem] = useState('');
        



  return (
    <form className='todoForm'>
        <input type='text' className='todo-input' placeholder='What need to do' />
        <button type='submit' className='todo-btn'>Add Task</button>
        <li>
            <ul> </ul>

        </li>
    </form>
  )
}
