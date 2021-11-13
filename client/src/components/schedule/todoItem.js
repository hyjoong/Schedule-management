import styled from "styled-components";
import { Flex, FlexBetween, FlexJustifyCenter } from "../shared/flexContainer";
import { Radio } from "antd";
import { useDispatch } from "react-redux";
import { DeleteSchedule } from "../../redux/action";

const TodoItem = ({ id, title, end }) => {
  const dispatch = useDispatch();
  let now = new Date().getTime();
  let endDay = new Date(end).getTime();
  let day = endDay - now;
  let dday = Math.round(day / (1000 * 60 * 60 * 24));
  return (
    <TodoWrapper>
      <TodoContainer>
        <TodoBox>
          <Radio key={id}></Radio>
          <TodoText>{title}</TodoText>
          <TodoDate>D-{dday}</TodoDate>
        </TodoBox>
        <TodoButton>
          <TodoDelete onClick={() => dispatch(DeleteSchedule(id))}>
            삭제
          </TodoDelete>
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

const TodoDate = styled(FlexJustifyCenter)`
  font-size: 0.8rem;
  color: red;
`;

const TodoButton = styled.div``;

export default TodoItem;
