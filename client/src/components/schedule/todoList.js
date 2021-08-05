import React from "react";
import styled from "styled-components";
import TodoItem from "./todoItem";

const TodoList = () => {
  return (
    <TodoListBlock>
      <TodoItem />
    </TodoListBlock>
  );
};

const TodoListBlock = styled.ul`
  height: 84%;
  padding: 1rem 2rem;
  overflow-y: auto;
`;

export default TodoList;
