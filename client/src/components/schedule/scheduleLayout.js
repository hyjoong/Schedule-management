import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { TAB_TITLE } from "../../constants/title";
import { Flex, FlexCenter } from "../shared/flexContainer";
import TodoList from "./todoList";
import Done from "./done";

const ScheduleLayout = () => {
  const [active, setActive] = useState(0);
  const onChangeTab = useCallback((key) => {
    setActive(key);
  }, []);
  const scheduleTabContents = {
    0: <TodoList />,
    1: <Done />,
  };

  return (
    <>
      <TabWrapper>
        {TAB_TITLE.map((title, idx) => {
          return (
            <Tab
              active={active === idx}
              key={idx}
              onClick={() => onChangeTab(idx)}
            >
              <TabTitle>{title}</TabTitle>
            </Tab>
          );
        })}
      </TabWrapper>
      {scheduleTabContents[active]}
    </>
  );
};
const TabWrapper = styled(Flex)`
  width: 100%;
  height: 50px;
`;

const Tab = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 1rem 1rem 0 0;
  border: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;
const TabTitle = styled(FlexCenter)`
  width: 100%;
  height: 100%;
`;

export default ScheduleLayout;
