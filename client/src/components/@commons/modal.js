import React from "react";
import styled from "styled-components";
import Portal from "./portal";
import { FlexJustifyCenter, FlexCenter, Flex } from "../shared/flexContainer";
import Button from "./button";
const ModalComponent = ({ children, handleCancel }) => {
  return (
    <Portal>
      <ModalWrapper>
        <Dimmed>
          <Container>
            <Button onClick={handleCancel}>X </Button>
            <Content>{children} </Content>
          </Container>
        </Dimmed>
      </ModalWrapper>
    </Portal>
  );
};

const ModalWrapper = styled(FlexCenter)`
  direction: column;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;

const Dimmed = styled(FlexCenter)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.5s;
`;

const Container = styled(Flex)`
  flex-direction: column;
  width: 300px;
  height: 300px;
  background-color: white;
  z-index: 2;
  border: 1px solid black;
  padding: 0 3rem;
`;

const Content = styled(FlexJustifyCenter)`
  flex-direction: column;
`;

export default ModalComponent;
