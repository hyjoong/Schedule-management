import React from "react";
import { FlexCenter } from "../components/shared/flexContainer";
import Block from "../components/@commons/block";
import Input from "../components/@commons/input";
import useInput from "../hooks/useinput";
import { validateEmail } from "../validations/email";
import { validatePassword } from "../validations/password";
import { INPUT_PLACEHOLDER } from "../constants/placeholder";

import Button from "../components/@commons/button";
import { theme } from "../styles/theme";
import { validateNickname } from "../validations/nickname";

const Signup = () => {
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
    inputValue: username,
    errorMessage: usernameErrorMessage,
    setValueOnChange: onUsernameChange,
  } = useInput(validateNickname);

  return (
    <FlexCenter>
      <form>
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
            value={username}
            errorMessage={usernameErrorMessage}
            style={{ marginTop: "15px" }}
            onChange={onUsernameChange}
            placeholder={INPUT_PLACEHOLDER.USERNAME}
          />
          <Button
            backgroundColor={theme.lightBlue}
            style={{ width: "100%", marginTop: "15px" }}
          >
            회원가입
          </Button>
        </Block>
      </form>
    </FlexCenter>
  );
};

export default Signup;
