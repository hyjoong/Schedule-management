import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import styled from "styled-components";
import { Modal, DatePicker } from "antd";
import Input from "../@commons/input";
const CalendarLayout = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [todo, setTodo] = useState("");
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");

  console.log(isModalVisible); 

  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleDate = (day) => {
    console.log(day.dateStr);
    console.log(day.date);
    setIsModalVisible(true);
  };
  const events = [
    {
      id: 1,
      title: "event 1",
      start: "2021-08-14T10:00:00",
      end: "2021-08-14T12:00:00",
    },
    {
      id: 2,
      title: "event 2",
      start: "2021-08-16T13:00:00",
      end: "2021-08-16T18:00:00",
    },
    { id: 3, title: "event 3", start: "2021-08-17", end: "2021-06-20" },
  ];
  return (
    <CalendarWrapper>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        height="100%"
        width="100%"
        dateClick={handleDate}
        events={events}
      >
        <Modal
          width="100%"
          backgroundColor="red"
          title="일정 추가"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <DatePicker
            selected={dateStart}
            selectsStart
            onChange={(date) => setDateStart(date)}
          />
          <DatePicker
            selected={dateEnd}
            selectsEnd
            onChange={(date) => setDateEnd(date)}
          />
          <Input />
        </Modal>
      </FullCalendar>
    </CalendarWrapper>
  );
};

const CalendarWrapper = styled.div`
  width: 90%;
  height: 90%;
  margin: 1rem auto 0;
`;

export default CalendarLayout;
