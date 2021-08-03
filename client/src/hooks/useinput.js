import { useState } from "react";

const useInput = (validator) => {
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const validate = (value) => {
    if (!validator) return;

    try {
      validator(value);
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const setValueOnChange = (target) => {
    const { value } = target;
    setInputValue(value);
    validate(value);
  };
  return { inputValue, errorMessage, setValueOnChange };
};

export default useInput;
