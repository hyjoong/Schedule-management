import React from "react";
import styled from "styled-components";

const Block = ({ ...props }) => {
  return <BlockBox {...props} />;
};

const BlockBox = styled.div`
  background-color: ${(props) => props.theme.white};
`;

export default Block;
