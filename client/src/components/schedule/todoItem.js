import React, { useState } from "react";
import styled from "styled-components";
import { Flex, FlexCenter, FlexBetween } from "../shared/flexContainer";
import { Radio } from "antd";

const TodoItem = () => {
  const [mock, setMock] = useState([
    {
      id: 1,
      title: "영화 보기",
      date: "20210810",
    },
  ]);
  return (
    <TodoWrapper>
      <TodoContainer>
        <TodoBox>
          <Radio key={mock[0].id}></Radio>
          <TodoText>{mock[0].title}</TodoText>
          <TodoDate>{mock[0].date}</TodoDate>
        </TodoBox>
        <TodoButton>
          <TodoDelete>삭제</TodoDelete>
        </TodoButton>
      </TodoContainer>
    </TodoWrapper>
  );
};

const TodoWrapper = styled(Flex)``;

const TodoContainer = styled(FlexBetween)`
  width: 100%;
  align-items: center;
  margin: 1rem;
`;
const TodoBox = styled(Flex)`
  align-items: center;
`;
const TodoDelete = styled.div`
  color: ${(props) => props.theme.red};
  font-weight: 600;
`;

const TodoText = styled.span`
  font-size: 1.1rem;
`;

const TodoDate = styled.div`
  font-size: 0.8rem;
`;

const TodoButton = styled.div``;

export default TodoItem;
