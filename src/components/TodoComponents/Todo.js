import React from "react";
const Todo = props => {
    return (
        <div
        className={`item${props.item.done ? "done": ``}`}
        onCllick={e => props.toggleDone(props.item.id)}>
           <p>{props.item.task}</p> 
        </div>
    );
};
export default Todo;