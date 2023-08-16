import React, {useState} from 'react'
import './TodoForm.css'

export const TodoForm = () => {

    const [newItem, setNewItem] = useState('');
    const [todos, setTodos] = useState([]);


    function handleSubmit(e) {


    }



  return (
    <form onSubmit={handleSubmit} className='todoForm'>
      <div className='form-row'>
        <label htmlFor='item'>New Item</label>
        <input 
         className='todo-input' 
         placeholder='What need to do' 
         value={newItem} 
         onChange={e => setNewItem(e.target.value)}
         type='text'
         />
      </div>
      <button type='submit' className='todo-btn'>Add Task</button>
        <li>
            <label>
              <input type='checkbox' />
              item 1
            </label>

        </li>
    </form>
  )
}
