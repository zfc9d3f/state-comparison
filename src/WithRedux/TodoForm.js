import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./actions";
import { FormContainer } from "../styles";

const TodoForm = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");

    const onClick = () => {
        dispatch(addTodo(title));
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
