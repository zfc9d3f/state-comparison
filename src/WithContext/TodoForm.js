import React, { useState, useContext } from "react";
import { FormContainer } from "../styles";
import { TodoContext } from "./TodoContext";

const TodoForm = () => {
    const [title, setTitle] = useState("");
    const { addTodo } = useContext(TodoContext);
    const onClick = () => {
        addTodo(title);
        setTitle("");
    };

    return (
        <FormContainer>
            <input
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
            ></input>
            <button onClick={onClick}>Add </button>
        </FormContainer>
    );
};

export default TodoForm;
