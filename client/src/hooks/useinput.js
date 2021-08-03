import React, { useState } from "react";

const useInput = (validator) => {
  const [inputValue, setInputValue] = useState("");

  const validate = (value) => {
    if (!validator) return;

    try {
      validator(value);
    } catch (error) {
      console.log(error);
    }
  };

  const setValueOnChange = (target) => {
    const value = target;
    setInputValue(value);
    validate(value);
  };
  console.log(inputValue); // 나중에 지워
  return { inputValue, setValueOnChange };
};

export default useInput;
