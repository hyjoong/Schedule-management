import React, { useState, useCallback, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import Input from "../@commons/input";
import ModalComponent from "../@commons/modal";
import "../../styles/datepicker.css";
import useInput from "../../hooks/useinput";
import { validatePlan } from "../../validations/plan";
import { INPUT_PLACEHOLDER } from "../../constants/placeholder";
import Button from "../@commons/button";
import { Flex } from "../shared/flexContainer";
import { AddPlan } from "../../redux/action";
import PlanText from "./planText";
import { LOAD_PLAN } from "../../redux/actionType";

const CalendarLayout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: LOAD_PLAN,
    });
  }, [dispatch]);
  const {
    inputValue: plan,
    errorMessage: planErrorMessage,
    setValueOnChange: onPlanChange,
  } = useInput(validatePlan);
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");
  const [isModal, setIsModal] = useState(false);
  const [dateValue, setDateValue] = useState("");

  const events = useSelector((state) => state.ScheduleReducer.scheduleData);
  const handleOk = async () => {
    if (planErrorMessage) {
      alert("계획을 추가할 수 없습니다. ");
      return;
    }
    try {
      await dispatch(
        AddPlan({
          text: plan,
          start: dateStart,
          end: dateEnd,
        })
      );
      setIsModal(false);
      setDateValue("");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleCancel = () => {
    setIsModal(false);
  };

  const handleDate = useCallback((day) => {
    setDateValue(day.dateStr);
    setDateStart(day.date);
    setDateEnd(day.date);
    setIsModal(true);
  }, []);
  return (
    <>
      <CalendarWrapper>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          height="100%"
          width="100%"
          dateClick={handleDate}
          events={events}
        ></FullCalendar>
      </CalendarWrapper>
      {isModal && (
        <ModalComponent handleCancel={handleCancel}>
          <PlanText events={events} dateValue={dateValue} />
          <PickerWrapper>
            <DatePicker
              selected={dateStart}
              selectsStart
              onChange={(date) => setDateStart(date)}
              startDate={dateStart}
            />
            ~
            <DatePicker
              selected={dateEnd}
              selectsEnd
              onChange={(date) => setDateEnd(date)}
              endDate={dateEnd}
            />
          </PickerWrapper>
          <Input
            value={plan}
            onChange={onPlanChange}
            errorMessage={planErrorMessage}
            placeholder={INPUT_PLACEHOLDER.PLAN}
            required
          />
          <ButtomWrapper>
            <Button onClick={handleOk}>등록</Button>
            <Button onClick={handleCancel}>취소</Button>
          </ButtomWrapper>
        </ModalComponent>
      )}
    </>
  );
};

const CalendarWrapper = styled.div`
  width: 90%;
  height: 90%;
  margin: 1rem auto 0;
`;

const PickerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;
const ButtomWrapper = styled(Flex)`
  padding: 2rem 0;
`;

export default CalendarLayout;
