import React from "react";
import styled from "styled-components";
import TodoItem from "./todoItem";
import { useSelector } from "react-redux";

const TodoList = () => {
  const events = useSelector((state) => state.ScheduleReducer.scheduleData);

  return (
    <TodoListBlock>
      {events &&
        events.map((item, i) => (
          <TodoItem
            key={i}
            id={item.id}
            title={item.title}
            start={item.start}
            end={item.end}
          />
        ))}
    </TodoListBlock>
  );
};

const TodoListBlock = styled.ul`
  height: 84%;
  padding: 1rem 2rem;
  overflow-y: auto;
`;

export default TodoList;
