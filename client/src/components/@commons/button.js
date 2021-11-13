import React from "react";
import styled from "styled-components";
import { FlexCenter } from "../shared/flexContainer";

const Button = ({ backgroundColor, ...props }) => {
  return <ButtonBlock backgroundColor={backgroundColor} {...props} />;
};

const ButtonBlock = styled(FlexCenter)`
  background-color: ${(props) => props.backgroundColor};
  font-weight: 600;
  padding: 0.75rem 1.25rem;
  cursor: pointer;
`;

export default Button;
