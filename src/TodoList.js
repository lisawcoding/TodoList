import React, {useContext} from 'react';
import {v1 as uuid} from "uuid"; 

import {TodoContext} from './TodoContext';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

function TodoList() {
  const { setTodo, todos, setTodos } = useContext(TodoContext);

  function change (evt){
    setTodo({
        [evt.target.name] : evt.target.value, 
        id: uuid(),
        completed: false,
    });
}

function submit (todo){
    // evt.preventDefault();
    setTodos([...todos, todo])
    // setTodo({task: ''})
}

  function removeTodo(id){
    setTodos(todos.filter(todo=>todo.id !== id))  
  }

  function toggleCompleted (id) {
    const updatedTodos = todos.map(todo=>{
      if(todo.id === id) {
        return {...todo, completed: !todo.completed}
      }   
      return todo;   
    })
    setTodos(updatedTodos)
  }



  return (
    <div className="TodoList">
        <h1>Todo List</h1>
        <NewTodoForm change={change} submit={submit} />
            <ul>
              {todos.map(todo=>
                <Todo 
                  task={todo.task} 
                  key={todo.id} 
                  id={todo.id} 
                  removeTodo={removeTodo}
                  completed={todo.completed}
                  toggleCompleted={toggleCompleted}
                />
              )}
            </ul>
    </div>
  );
}

export default TodoList;