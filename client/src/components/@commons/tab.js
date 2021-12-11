import React from "react";
import styled from "styled-components";

const Tab = ({ children }) => {
  return <TabWrapper>{children}</TabWrapper>;
};

const TabWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export default Tab;
