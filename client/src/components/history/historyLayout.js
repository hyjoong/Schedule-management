import React, { useState } from "react";
import styled from "styled-components";
import { FlexCenter, Grid } from "../shared/flexContainer";

const HistoryLayout = () => {
  return (
    <HistoryWrapper>
      <Tab>
        <TabTitle>일정 공유 </TabTitle>
      </Tab>
      <HIstoryContainer>
        <HistoryCard>
          <Img />
          <HistoryText>밥먹기</HistoryText>
        </HistoryCard>
        <HistoryCard>
          <Img />
        </HistoryCard>
        <HistoryCard>
          <Img />
        </HistoryCard>
        <HistoryCard>
          <Img />
        </HistoryCard>
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
  width: 100%;
  height: 50px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const TabTitle = styled(FlexCenter)`
  width: 100%;
  height: 100%;
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
  height: 50%;
  background-color: blue;
`;

const HistoryText = styled.span`
  @media ${({ theme }) => theme.device.mobile} {
    display: none;
  }
  padding: 1rem;
`;

export default HistoryLayout;
