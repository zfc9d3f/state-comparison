import randomstring from "randomstring";

export const addTodo = title => ({
    type: "ADD_TODO",
    payload: {
        userId: 1,
        id: randomstring.generate(10),
        title,
        completed: false
    }
});

export const deleteTodo = id => ({
    type: "DELETE_TODO",
    payload: { id }
});

export const toggleTodo = id => ({
    type: "TOGGLE_TODO",
    payload: { id }
});
