import React from "react";
import { Container, TodoLayout } from "../styles";
import { useTodos } from "./useTodos";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

export const App = () => {
    const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();

    return (
        <Container>
            <h1>Just React</h1>
            <TodoForm addTodo={addTodo} />
            <TodoLayout>
                {todos.map(todo => {
                    return (
                        <Todo
                            {...todo}
                            key={todo.id}
                            toggleTodo={toggleTodo}
                            deleteTodo={deleteTodo}
                        />
                    );
                })}
            </TodoLayout>
        </Container>
    );
};
