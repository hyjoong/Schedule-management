import React from "react";
import styled from "styled-components";
import Portal from "./portal";
import { FlexJustifyCenter, FlexCenter } from "../shared/flexContainer";
import Button from "./button";
const ModalComponent = ({ children }) => {
  console.log(children);
  console.log("hi");
  return (
    <Portal>
      <ModalWrapper>
        <Dimmed />
        <Button>ssss</Button>

        <Content>{children} </Content>
      </ModalWrapper>
    </Portal>
  );
};

const ModalWrapper = styled(FlexCenter)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;

const Dimmed = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  transition: opacity 0.5s;
`;

const Header = styled.div``;

const Content = styled(FlexJustifyCenter)`
  flex-direction: column;
  background-color: white;
  width: 250px;
  height: 300px;
  padding: 4rem;
  z-index: 2;
  border: 1px solid black;
`;

export default ModalComponent;
