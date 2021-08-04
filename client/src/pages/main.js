import React, { useState, useCallback } from "react";
import styled from "styled-components";
import MenuList from "../components/menuList";
import { Flex } from "../components/shared/flexContainer";
import Todo from "../components/schedule/todo";
import Done from "../components/schedule/done";
import { TAB_TITLE } from "../constants/title";

const Main = () => {
  const [active, setActive] = useState(0);
  const onChangeTab = useCallback((key) => {
    setActive(key);
  }, []);
  const scheduleTabContents = {
    0: <Todo />,
    1: <Done />,
  };
  console.log(active);
  return (
    <Flex>
      <MenuList />
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
      {scheduleTabContents[active]}
    </Flex>
  );
};

const Tab = styled.div``;

const TabTitle = styled.span``;

export default Main;
