import React from "react";
import styled from "styled-components";
import TodoList from "./todoList";
import Done from "./done";
import TodoTab from "./todoTab";

const Schedule = () => {
  const scheduleTabContents = {
    0: <TodoList />,
    1: <Done />,
  };
  return (
    <>
      <TodoTab />
      <TodoList />
      {/* {scheduleTabContents[active]} */}
    </>
  );
};

export default Schedule;
