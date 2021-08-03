import React from "react";
import styled from "styled-components";
import { FlexCenter } from "../shared/flexContainer";

const Block = ({ ...props }) => {
  return <BlockBox {...props} />;
};

const BlockBox = styled(FlexCenter)`
  background-color: orange;
  /* background-color: ${(props) => props.theme.white}; */
`;

export default Block;
