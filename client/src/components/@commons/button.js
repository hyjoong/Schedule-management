import React from "react";
import styled from "styled-components";
import { FlexCenter } from "../shared/flexContainer";

const Button = ({ backgroundColor, children, ...rest }) => {
  return (
    <ButtonBlock backgroundColor={backgroundColor} {...rest}>
      {children}
    </ButtonBlock>
  );
};

const ButtonBlock = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.backgroundColor};
  font-weight: 600;
  padding: 0.75rem 1.25rem;
  cursor: pointer;
`;

export default Button;
