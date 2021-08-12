import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import styled from "styled-components";
import Input from "../@commons/input";
import ModalComponent from "../@commons/modal";
import DatePicker from "react-datepicker";
import "../../styles/datepicker.css";
import useModal from "../../hooks/useModal";
import useInput from "../../hooks/useinput";
import { validatePlan } from "../../validations/plan";
import { INPUT_PLACEHOLDER } from "../../constants/placeholder";
import Button from "../@commons/button";
import { Flex } from "../shared/flexContainer";
import { useDispatch, useSelector } from "react-redux";

const CalendarLayout = () => {
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");
  const [isModal, setIsModal] = useState(false);
  const {
    inputValue: plan,
    errorMessage: planErrorMessage,
    setValueOnChange: onPlanChange,
  } = useInput(validatePlan);
  const dispatch = useDispatch();

  //console.log(plan);
  const showModal = () => {
    setIsModal(true);
  };

  const events = useSelector((state) => state.ScheduleReducer);

  console.log(events);
  const handleOk = () => {
    setIsModal(false);
    events.push({
      id: 10,
      title: plan,
      start: dateStart,
      end: dateEnd,
    });
  };

  const handleCancel = () => {
    setIsModal(false);
  };
  const {
    isModalVisible,
    openModal,
    closeModal,
    handleClickToClose,
  } = useModal();

  const handleDate = (day) => {
    console.log(day.dateStr);
    console.log(day.date);
    setDateStart(day.date);
    setDateEnd(day.date);
    openModal();
    setIsModal(true);
  };
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
  padding-top: 2rem;
`;

export default CalendarLayout;
