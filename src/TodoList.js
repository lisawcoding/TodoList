import React, {useContext, useEffect} from 'react';
import {v1 as uuid} from "uuid"; 
import firebase from "./firebase";

import {TodoContext} from './TodoContext';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';


function TodoList() {
  const { setTodo, todos, setTodos } = useContext(TodoContext);

  useEffect(()=>{
    firebase
    .firestore()
    .collection("TodoList")
    .orderBy("todo.date")
    .onSnapshot((snapshot)=>{
      // debugger
      const newTodos=snapshot.docs.map((doc)=>({
        docId: doc.id,
        ...doc.data().todo
      }))
      setTodos(newTodos)
    })
  }, [])

  function change (evt){
    setTodo({
        [evt.target.name] : evt.target.value, 
        id: uuid(),
        completed: false,
    });
}

function submit (todo){
    setTodos([...todos, todo]);

    firebase
    .firestore()
    .collection('TodoList')
    .add({
      todo
    })
}

  function removeTodo(docId){
    setTodos(todos.filter(todo=>todo.docId !== docId))  

    firebase
    .firestore()
    .collection("TodoList")
    .doc(docId)
    .delete();
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
                  docId={todo.docId}
                  removeTodo={removeTodo}
                  completed={todo.completed}
                  toggleCompleted={toggleCompleted}
                  date={todo.date}
                />
              )}
            </ul>
    </div>
  );
}

export default TodoList;