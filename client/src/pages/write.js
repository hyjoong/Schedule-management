import React from "react";
import { Flex } from "../components/shared/flexContainer";
import LayoutScreen from "../components/templates/layoutScreen";
import HistoryPost from "../components/history/historyPost";

const Write = () => {
  return (
    <Flex style={{ height: "100%", overFlow: "auto" }}>
      <LayoutScreen>
        <HistoryPost />
      </LayoutScreen>
    </Flex>
  );
};

export default Write;
