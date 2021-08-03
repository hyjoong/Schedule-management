import React from "react";
import styled from "styled-components";

const Input = ({ errorMessage, ...props }) => {
  return (
    <>
      <InputBlock {...props} />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </>
  );
};

const InputBlock = styled.input`
  font-size: 1rem;
  width: 100%;
  padding: 0.75rem 1.25rem;
  outline: none;
`;

const ErrorMessage = styled.span``;

export default Input;
