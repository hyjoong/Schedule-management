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

const CalendarLayout = () => {
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");
  const [isModal, setIsModal] = useState(false);

  const {
    inputValue: plan,
    errorMessage: planErrorMessage,
    setValueOnChange: onPlanChange,
  } = useInput(validatePlan);

  console.log(plan);
  const showModal = () => {
    setIsModal(true);
  };

  const handleOk = () => {
    setIsModal(false);
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
  const events = [
    {
      id: 1,
      title: "study",
      start: "2021-08-14",
      end: "2021-08-14",
    },
    {
      id: 2,
      title: "event 2",
      start: "2021-08-16",
      end: "2021-08-16",
    },
    {
      id: 3,
      title: "event 32233",
      start: "2021-08-17",
      end: "2021-08-20",
    },
  ];
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
        <ModalComponent>
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
