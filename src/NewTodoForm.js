import React, { useContext } from 'react';
import {v1 as uuid} from "uuid"; 

import {TodoContext} from './TodoContext';

function NewTodoForm (props) {

    const { todo, setTodo } = useContext(TodoContext);

    // function handleChange (evt){
    //     setTodo({
    //         [evt.target.name] : evt.target.value, 
    //         id: uuid(),
    //         completed: false,
    //     });
    // }
    // function handleSubmit (evt){
    //     evt.preventDefault();
    //     setTodos([...todos, todo])
    //     setTodo({task: ''})
    // }

    function handleChange (evt) {
        setTodo({
            [evt.target.name] : evt.target.value, 
            id: uuid(),
            completed: false,
        })
    }
    function handleSubmit (evt) {
        evt.preventDefault();
        props.submit(todo);
        setTodo({task: ''})
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor='task'></label>
            <input 
                type='text' 
                placeholder='add task' 
                id='task' 
                name='task'
                onChange={handleChange}
                onClick={handleChange}
                value={todo.task}
                required
            />
            <button>Add Todo</button>
        </form>
    )
}

export default NewTodoForm;