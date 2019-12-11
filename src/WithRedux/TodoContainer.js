import React from "react";
import TodoForm from "./TodoForm";
import { connect } from "react-redux";
import Todo from "./Todo";
import { Container, TodoLayout } from "../styles";

const TodoContainer = ({ todos }) => {
    return (
        <Container>
            <h1>With Redux</h1>
            <TodoForm />
            <TodoLayout>
                {todos.map(todo => {
                    return <Todo {...todo} key={todo.id} />;
                })}
            </TodoLayout>
        </Container>
    );
};

const mapStateToProps = state => {
    const { todos } = state;
    return { todos };
};

export default connect(mapStateToProps)(TodoContainer);
