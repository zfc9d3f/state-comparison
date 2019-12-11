import React, { useContext } from "react";
import { TodoContext } from "./TodoContext";
import { TodoContainer } from "../styles";

const Todo = ({ id, title, completed }) => {
    const { toggleTodo, deleteTodo } = useContext(TodoContext);
    return (
        <TodoContainer>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>completed: {completed.toString()}</div>
            <button onClick={() => toggleTodo(id)}>toggle</button>
            <button onClick={() => deleteTodo(id)}>Delete</button>
        </TodoContainer>
    );
};

export default Todo;
