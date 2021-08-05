import React from "react";
import { Flex } from "../components/shared/flexContainer";
import MenuList from "../components/menuList";
import LayoutScreen from "../components/templates/layoutScreen";

const Calendar = () => {
  return (
    <Flex style={{ height: "100%" }}>
      <MenuList />
      <LayoutScreen> </LayoutScreen>
    </Flex>
  );
};

export default Calendar;
