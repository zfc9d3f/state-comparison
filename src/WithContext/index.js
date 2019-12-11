import React from "react";
import { Container, TodoLayout } from "../styles";
import { useTodos } from "./useTodos";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { TodoContext } from "./TodoContext";

export const App = () => {
    const todoManager = useTodos();

    return (
        <Container>
            <h1>With Context</h1>
            <TodoContext.Provider value={{ ...todoManager }}>
                <TodoForm />
                <TodoLayout>
                    {todoManager.todos.map(todo => {
                        return <Todo {...todo} key={todo.id} />;
                    })}
                </TodoLayout>
            </TodoContext.Provider>
        </Container>
    );
};
