import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FlexCenter, Grid } from "../shared/flexContainer";
import { useDispatch, useSelector } from "react-redux";
import { LoadBoardAction } from "../../redux/action";
const MockData = [
  {
    id: 1,
    text: "밥 먹기",
  },
  {
    id: 2,
    text: "공부 하기",
  },
  {
    id: 3,
    text: "산책 하기",
  },
  {
    id: 4,
    text: "영화 보기",
  },
];

const HistoryLayout = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer);
  const boards = useSelector((state) => state.BoardReducer.boardText);
  console.log(boards);
  useEffect(() => {
    if (user) {
      dispatch(LoadBoardAction());
    }
  }, [dispatch, user]);

  return (
    <HistoryWrapper>
      <Tab>
        <TabTitle>일정 공유 </TabTitle>
        <TabRegister>글 작성</TabRegister>
      </Tab>
      <HIstoryContainer>
        {!!boards &&
          boards.map((board, idx) => (
            <HistoryCard key={idx}>
              <Img />
              <HistoryText>{board.text}</HistoryText>
            </HistoryCard>
          ))}
      </HIstoryContainer>
    </HistoryWrapper>
  );
};

const HistoryWrapper = styled.div`
  width: 90%;
  height: 90%;
  margin: 1rem auto 0;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 1rem 1rem 0 0;
  overflow-y: auto;
`;

const Tab = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const TabTitle = styled(FlexCenter)`
  width: 100%;
  height: 100%;
  @media ${({ theme }) => theme.device.mobile} {
    display: none;
  }
`;

const TabRegister = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  outline: none;
  padding: 0.3rem;
`;

const HIstoryContainer = styled(Grid)`
  padding: 1rem;
  grid-template-columns: repeat(4, 1fr);
  @media ${({ theme }) => theme.device.desktop} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${({ theme }) => theme.device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${({ theme }) => theme.device.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const HistoryCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 250px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 0.5rem;
  margin: 1rem;
`;

const Img = styled.div`
  min-height: 50%;
  background-color: blue;
`;

const HistoryText = styled.span`
  padding: 1rem;
  overflow-y: auto;
`;

export default HistoryLayout;
