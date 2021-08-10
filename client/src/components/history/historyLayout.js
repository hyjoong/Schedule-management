import React, { useState } from "react";
import Block from "../@commons/block";
import DatePicker from "react-datepicker";
import ModalComponent from "../@commons/modal";
import Input from "../@commons/input";

const HistoryLayout = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  return (
    <>
      <ModalComponent>
        <DatePicker />
        <DatePicker />
        <Input />
      </ModalComponent>
    </>
  );
};

export default HistoryLayout;
