import React from "react";
import styled from "styled-components";
import TodoItem from "./todoItem";
import { useSelector } from "react-redux";

const TodoList = () => {
  const events = useSelector((state) => state.ScheduleReducer.scheduleData);
  console.log(events);
  return (
    <TodoListBlock>
      {events &&
        events.map((item, i) => (
          <TodoItem key={i} id={i} title={item.title} date={item.dateValue} />
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
