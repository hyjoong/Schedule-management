import React from "react";
import { useHistory } from "react-router-dom";
import { validateEmail } from "../validations/email";
import { validatePassword } from "../validations/password";
import { theme } from "../styles/theme";
import { FlexCenter } from "./shared/flexContainer";
import Block from "./@commons/block";
import Button from "./@commons/button";
import { PAGE_PATH } from "../constants/route";
import Input from "./@commons/input";
import { INPUT_PLACEHOLDER } from "../constants/placeholder";
import useInput from "../hooks/useinput";

const LoginWrapper = () => {
  const { inputValue: email, setValueOnChange: onEmailChange } = useInput(
    validateEmail
  );
  const { inputValue: password, setValueOnChange: onPasswordChange } = useInput(
    validatePassword
  );
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
            placeholder={INPUT_PLACEHOLDER.EMAIL}
            style={{ marginTop: "15px" }}
            onChange={onEmailChange}
            required
          />
          <Input
            type="password"
            value={password}
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

export default LoginWrapper;
