import styled from "styled-components";
import { Flex, FlexBetween, FlexJustifyCenter } from "../shared/flexContainer";
import { Radio } from "antd";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { DELETE_PLAN } from "../../redux/actionType";

const TodoItem = ({ id, text, end }) => {
  const dispatch = useDispatch();
  let now = new Date().getTime();
  let endDay = new Date(end).getTime();
  let day = endDay - now;
  let dday = Math.round(day / (1000 * 60 * 60 * 24));

  const handleDelete = useCallback(
    (id) => {
      dispatch({
        type: DELETE_PLAN,
        id,
      });
    },
    [dispatch]
  );

  return (
    <TodoWrapper>
      <TodoContainer>
        <TodoBox>
          <Radio key={id}></Radio>
          <TodoText>{text}</TodoText>
          <TodoDate>D-{dday}</TodoDate>
        </TodoBox>
        <TodoButton>
          <TodoDelete onClick={() => handleDelete(id)}>삭제</TodoDelete>
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
  cursor: pointer;
`;

const TodoText = styled.span`
  font-size: 1.1rem;
  margin-right: 1rem;
`;

const TodoDate = styled(FlexJustifyCenter)`
  font-size: 0.8rem;
  color: red;
`;

const TodoButton = styled.div``;

export default TodoItem;
