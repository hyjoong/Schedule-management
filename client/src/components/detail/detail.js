import React from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import LayoutScreen from "../templates/layoutScreen.js";
import { Flex } from "../shared/flexContainer.js";

const Detail = ({ match }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const board = useSelector((state) => state.BoardReducer.boardText);
  const detailPost = board.filter((item) => item.id === id);

  return (
    <Flex style={{ height: "100%", overFlow: "auto" }}>
      <LayoutScreen>
        <DetailWrapper>
          <DetailHeader>
            <TabBack onClick={() => navigate("/")}>⬅</TabBack>
          </DetailHeader>
          <div>{detailPost[0].text}</div>
        </DetailWrapper>
      </LayoutScreen>
    </Flex>
  );
};

const DetailWrapper = styled.div`
  width: 90%;
  height: 90%;
  margin: 1rem auto 0;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 1rem 1rem 0 0;
`;

const DetailHeader = styled.div`
  margin: 1rem;
  display: flex;
`;

const TabBack = styled.button`
  padding: 0.3rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  outline: none;
  cursor: pointer;
`;

export default Detail;
