import { useState } from "react";

const useModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleClickToClose = (event) => {
    const target = event.target;
    const currentTarget = event.currentTarget;
    if (target !== currentTarget) return;

    closeModal();
  };

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return {
    isModalVisible,
    handleClickToClose,
    openModal,
    closeModal,
  };
};

export default useModal;
