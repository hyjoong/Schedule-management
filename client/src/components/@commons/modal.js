import React, { useState } from "react";
import { Modal, Button, DatePicker } from "antd";

const ModalComponent = () => {
  function onChange(date, dateString) {
    console.log(date, dateString);
  }
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Mod
      </Button>
      <Modal
        title="일정 추가"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        sss
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default ModalComponent;
