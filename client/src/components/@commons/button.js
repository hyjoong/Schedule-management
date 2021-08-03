import React from "react";
import styled from "styled-components";
import { FlexCenter } from "../shared/flexContainer";

const Button = ({ ...props }) => {
  return <ButtonBlock {...props} />;
};

const ButtonBlock = styled(FlexCenter)`
  background-color: ${(props) => props.theme.lightBlue};
  color: ${(props) => props.theme.Black};
  font-weight: 600;
  padding: 0.75rem 1.25rem;
`;

export default Button;
