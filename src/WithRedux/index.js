import React from "react";
import TodoContainer from "./TodoContainer";

import { Provider } from "react-redux";
import store from "./store";

export const App = () => {
    return (
        <Provider store={store}>
            <TodoContainer></TodoContainer>
        </Provider>
    );
};
