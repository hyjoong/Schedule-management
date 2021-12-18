import React, { useEffect } from "react";
import { withRouter, useNavigate } from "react-router-dom";

import { FlexCenter } from "../components/shared/flexContainer";
import Block from "../components/@commons/block";
import Input from "../components/@commons/input";
import useInput from "../hooks/useinput";
import { validateEmail } from "../validations/email";
import { validatePassword } from "../validations/password";
import { INPUT_PLACEHOLDER } from "../constants/placeholder";

import Button from "../components/@commons/button";
import { theme } from "../styles/theme";
import { validatename } from "../validations/name";
import { useDispatch, useSelector } from "react-redux";
import { SignupAction } from "../redux/action";

const Signup = () => {
  const { signUpDone, signUpError } = useSelector((state) => state.authReducer);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const {
    inputValue: email,
    errorMessage: emailErrorMessage,
    setValueOnChange: onEmailChange,
  } = useInput(validateEmail);
  const {
    inputValue: password,
    errorMessage: passwordErrorMessage,
    setValueOnChange: onPasswordChange,
  } = useInput(validatePassword);
  const {
    inputValue: name,
    errorMessage: usernameErrorMessage,
    setValueOnChange: onUsernameChange,
  } = useInput(validatename);

  const onSIgnup = async (e) => {
    e.preventDefault();
    dispatch(
      SignupAction({
        email,
        password,
        name,
      })
    );
    if (signUpDone) {
      navigate("/login");
    }
    if (signUpError) {
      alert("회원가입 오류");
      return;
    }
  };
  return (
    <FlexCenter>
      <form onSubmit={onSIgnup}>
        <Block
          style={{
            marginTop: "2.5rem",
            width: "540px",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Input
            value={email}
            errorMessage={emailErrorMessage}
            style={{ marginTop: "15px" }}
            onChange={onEmailChange}
            placeholder={INPUT_PLACEHOLDER.EMAIL}
          />
          <Input
            value={password}
            type="password"
            errorMessage={passwordErrorMessage}
            style={{ marginTop: "15px" }}
            onChange={onPasswordChange}
            placeholder={INPUT_PLACEHOLDER.PASSWORD}
          />
          <Input
            value={name}
            errorMessage={usernameErrorMessage}
            style={{ marginTop: "15px" }}
            onChange={onUsernameChange}
            placeholder={INPUT_PLACEHOLDER.USERNAME}
          />
          <Button
            backgroundColor={theme.lightBlue}
            style={{ width: "100%", marginTop: "15px" }}
            type="submit"
          >
            회원가입
          </Button>
        </Block>
      </form>
    </FlexCenter>
  );
};

export default Signup;
