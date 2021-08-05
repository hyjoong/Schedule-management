import React from "react";
import styled from "styled-components";

const LayoutScreen = ({ children }) => {
  return (
    <LayoutWrapper>
      <LayoutBox>{children}</LayoutBox>
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.powderBlue};
`;

const LayoutBox = styled.div`
  height: 90%;
  background-color: ${(props) => props.theme.white};
  margin: 3rem;
  border-radius: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

export default LayoutScreen;
