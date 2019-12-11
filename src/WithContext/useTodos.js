import { useState } from "react";
import randomstring from "randomstring";

export function useTodos() {
    const [todos, setTodos] = useState([]);

    const addTodo = title => {
        setTodos(todos => [
            ...todos,
            {
                id: randomstring.generate(7),
                title,
                completed: false
            }
        ]);
    };

    const toggleTodo = id => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return {
        todos,
        addTodo,
        toggleTodo,
        deleteTodo
    };
}
