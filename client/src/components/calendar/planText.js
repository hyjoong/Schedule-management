import styled from "styled-components";

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const PlanText = ({ dateValue }) => {
  const planData = useSelector((state) => state.ScheduleReducer.scheduleData);
  const [planText, setPlanText] = useState("");
  useEffect(() => {
    setPlanText(planData.filter((data, i) => data.dateValue === dateValue));
  }, [planData, dateValue]);
  console.log(planText);
  console.log(planText);
  return (
    <>
      <PlanWrapper>
        {planText &&
          planText.map((data, i) => (
            <PlanTitle key={i}>{data.title}</PlanTitle>
          ))}
      </PlanWrapper>
    </>
  );
};

const PlanWrapper = styled.div``;
const PlanTitle = styled.div``;

export default PlanText;
