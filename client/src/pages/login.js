import React from "react";
import Input from "../components/@commons/input";
import { INPUT_PLACEHOLDER } from "../constants/placeholder";
import useInput from "../hooks/useinput";
import { validateEmail } from "../validations/email";
import { validatePassword } from "../validations/password";
import { FlexCenter } from "../components/shared/flexContainer";
import Block from "../components/@commons/block";
import Button from "../components/@commons/button";
import { theme } from "../styles/theme";
import { useHistory } from "react-router-dom";
import { PAGE_PATH } from "../constants/route";

const Login = () => {
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
  const onLogin = async (event) => {
    event.preventDefault();
  };
  const history = useHistory();
  const onMoveToSignUp = () => {
    history.push(PAGE_PATH.SIGN_UP);
  };

  return (
    <FlexCenter>
      <form onChange={onLogin}>
        <Block
          style={{
            marginTop: "2.5rem",
            width: "440px",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Input
            value={email}
            errorMessage={emailErrorMessage}
            placeholder={INPUT_PLACEHOLDER.EMAIL}
            style={{ marginTop: "15px" }}
            onChange={onEmailChange}
            required
          />
          <Input
            type="password"
            value={password}
            errorMessage={passwordErrorMessage}
            placeholder={INPUT_PLACEHOLDER.PASSWORD}
            style={{ marginTop: "15px" }}
            onChange={onPasswordChange}
            required
          />
          <Button
            backgroundColor={theme.navy}
            style={{ width: "100%", marginTop: "15px", color: "white" }}
          >
            로그인
          </Button>
          <Button
            backgroundColor={theme.lightBlue}
            style={{ width: "100%", marginTop: "15px", color: "white" }}
            onClick={onMoveToSignUp}
          >
            회원가입
          </Button>
        </Block>
      </form>
    </FlexCenter>
  );
};

export default Login;
