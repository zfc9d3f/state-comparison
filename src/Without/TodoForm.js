import React, { useState } from "react";
import { FormContainer } from "../styles";

const TodoForm = ({ addTodo }) => {
    const [title, setTitle] = useState("");

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
