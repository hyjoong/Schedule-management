import styled from "styled-components";
import { Flex, FlexBetween } from "../shared/flexContainer";
import { Radio } from "antd";

const TodoItem = ({ id, title, date }) => {
  return (
    <TodoWrapper>
      <TodoContainer>
        <TodoBox>
          <Radio key={id}></Radio>
          <TodoText>{title}</TodoText>
          <TodoDate>{date}</TodoDate>
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
  margin-right: 1rem;
`;

const TodoDate = styled.div`
  font-size: 0.8rem;
`;

const TodoButton = styled.div``;

export default TodoItem;
