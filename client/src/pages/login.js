import React from "react";
import Input from "../components/@commons/input";
import { INPUT_PLACEHOLDER } from "../constants/placeholder";
import useInput from "../hooks/useinput";
import { validateEmail } from "../validations/email";
import { validatePassword } from "../validations/password";
import { FlexCenter } from "../components/shared/flexContainer";
import Block from "../components/@commons/block";
const Login = () => {
  const { inputValue: email, setValueOnChange: onEmailChange } = useInput(
    validateEmail
  );
  const { inputValue: password, setValueOnChange: onPasswordChange } = useInput(
    validatePassword
  );
  console.log("email");
  const onLogin = async (event) => {
    event.preventDefault();
  };
  return (
    <FlexCenter>
      <form onChange={onLogin}>
        <Block
          style={{
            marginTop: "2.5rem",
            width: "440px",
            flexDirection: "column",
          }}
        >
          <Input
            value={email}
            placeholder={INPUT_PLACEHOLDER.EMAIL}
            style={{ marginBottom: "15px" }}
            onChange={onEmailChange}
            required
          />
          <Input
            type="password"
            value={password}
            placeholder={INPUT_PLACEHOLDER.PASSWORLD}
            style={{ marginBottom: "15px" }}
            onChange={onPasswordChange}
            required
          />
        </Block>
      </form>
    </FlexCenter>
  );
};

export default Login;
