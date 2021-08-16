import React, { useState } from "react";
import DatePicker from "react-datepicker";
import ModalComponent from "../@commons/modal";
import Input from "../@commons/input";

const HistoryLayout = () => {
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
