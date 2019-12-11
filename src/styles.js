import styled from "styled-components";

export const TodoContainer = styled.div`
    width: 100%;
    padding: 20px;
    border-bottom: 3px solid black;

    display: flex;
    flex-direction: column;
    box-sizing: border-box;

    &:not(:last-child) {
        margin-bottom: 20px;
    }
`;

export const Container = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    max-width: 400px;
    align-items: center;
    font-size: 20px;
`;

export const TodoLayout = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const FormContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
`;

export const Layout = styled.div`
    width: 1300px;
    display: flex;
    justify-content: space-between;
`;
