const initialState = [];

export default function(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case "ADD_TODO": {
            return [...state, payload];
        }
        case "TOGGLE_TODO": {
            return state.map(todo => {
                if (todo.id === payload.id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            });
        }
        case "DELETE_TODO": {
            return state.filter(todo => todo.id !== payload.id);
        }
        default:
            return state;
    }
}
