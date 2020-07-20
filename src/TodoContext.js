import React, {createContext, useState} from 'react';

export const TodoContext = createContext();

export function TodoProvider(props){
    const [todo, setTodo] = useState({task: ''});
    const [todos, setTodos] = useState([
        // {task: 'shopping go to shopping tomorrow in town and having dinner', id: 1, completed: false},
        // {task: 'hiking', id: 2, completed: false}
    ]);

    return(
        <TodoContext.Provider value={{todo, setTodo, todos, setTodos}}>
            {props.children}
        </TodoContext.Provider>
    )
}