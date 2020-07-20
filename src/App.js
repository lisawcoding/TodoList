import React from 'react';
import './App.scss';

import TodoList from './TodoList';
import {TodoProvider} from './TodoContext';

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <TodoList/> 
      </TodoProvider>
    </div>
  );
}

export default App;
