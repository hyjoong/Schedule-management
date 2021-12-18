import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { validatePassword } from "../validations/password";
import { theme } from "../styles/theme";
import { FlexCenter } from "./shared/flexContainer";
import Block from "./@commons/block";
import Button from "./@commons/button";
import Input from "./@commons/input";
import { INPUT_PLACEHOLDER } from "../constants/placeholder";
import useInput from "../hooks/useinput";
import { LoginAction } from "../redux/action";
import { useNavigate } from "react-router-dom";
import { validatename } from "../validations/name";

const LoginWrapper = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { logInError, user } = useSelector((state) => state.authReducer);
  const { inputValue: name, setValueOnChange: onEmailChange } = useInput(
    validatename
  );
  const { inputValue: password, setValueOnChange: onPasswordChange } = useInput(
    validatePassword
  );
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  useEffect(() => {
    if (logInError) {
      alert(logInError);
    }
  }, [logInError]);

  const onLogin = async (e) => {
    e.preventDefault();
    dispatch(
      LoginAction({
        name,
        password,
      })
    );
  };

  const onSignup = () => {
    navigate("/signup");
  };

  return (
    <FlexCenter>
      <form onSubmit={onLogin}>
        <Block
          style={{
            marginTop: "2.5rem",
            width: "440px",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Input
            value={name}
            placeholder={INPUT_PLACEHOLDER.NAME}
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
            type="submit"
            backgroundColor={theme.navy}
            style={{ width: "100%", marginTop: "15px", color: "white" }}
            type="submit"
          >
            로그인
          </Button>
          <Button
            backgroundColor={theme.lightBlue}
            style={{ width: "100%", marginTop: "15px", color: "white" }}
            onClick={onSignup}
          >
            회원가입
          </Button>
        </Block>
      </form>
    </FlexCenter>
  );
};

export default LoginWrapper;
