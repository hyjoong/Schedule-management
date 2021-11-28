import styled from "styled-components";
import { Flex, FlexBetween, FlexJustifyCenter } from "../shared/flexContainer";
import { Radio } from "antd";
import { useDispatch } from "react-redux";
import { DeleteAction } from "../../redux/action";

const TodoItem = ({ id, title, start, end }) => {
  const dispatch = useDispatch();
  let now = new Date().getTime();
  let endDay = new Date(end).getTime();
  let day = endDay - now;
  let dday = Math.round(day / (1000 * 60 * 60 * 24));
  let dayConfig = dday > 0 ? "D-" : "D+";
  let absDday = Math.abs(dday);

  let startSlice = start.slice(0, 10);
  let endSlice = end.slice(0, 10);
  const handleDelete = async (id) => {
    dispatch(
      DeleteAction({
        id,
      })
    );
  };

  return (
    <TodoWrapper>
      <TodoContainer>
        <TodoBox>
          <Radio key={id}></Radio>
          <TodoText>{title}</TodoText>
          <TodoDate>
            {dayConfig}
            {absDday}
          </TodoDate>
          <TodoDuration>
            {startSlice}~{endSlice}
          </TodoDuration>
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

const TodoDuration = styled(FlexJustifyCenter)`
  margin-left: 1rem;
  font-size: 0.8rem;
  color: rgba(0, 0, 0, 0.3);
`;

const TodoButton = styled.div``;

export default TodoItem;
