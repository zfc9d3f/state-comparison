import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "./actions";

import { TodoContainer } from "../styles";

const Todo = ({ id, title, completed }) => {
    const dispatch = useDispatch();

    const onClickToggle = () => {
        dispatch(toggleTodo(id));
    };

    const onClickDelete = () => {
        dispatch(deleteTodo(id));
    };

    return (
        <TodoContainer>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>completed: {completed.toString()}</div>
            <button onClick={onClickToggle}>toggle</button>
            <button onClick={onClickDelete}>Delete</button>
        </TodoContainer>
    );
};

export default Todo;
