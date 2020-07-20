import React from 'react';

function Todo (props){

    function handleRemove(){
        props.removeTodo(props.id)
    }

    function handleToggle (evt) {
        props.toggleCompleted(props.id)
    }

    return(
        <div className="Todo">
            <li className={props.completed? "completed" : ""} onClick={handleToggle}>{props.task}</li>
            <button onClick={handleRemove}>X</button>
        </div>     
    )
}

export default Todo;