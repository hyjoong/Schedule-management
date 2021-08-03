import React from "react";
import Input from "../components/@commons/input";
import { INPUT_PLACEHOLDER } from "../constants/placeholder";
const Login = () => {
  <Input
    value={email}
    placeholder={INPUT_PLACEHOLDER.EMAIL}
    style={{ marginBottom: "15px" }}
    onChange={onEmailChange}
    required
  />;
  <Input
    type="password"
    value={password}
    placeholder={INPUT_PLACEHOLDER.PASSWORLD}
    style={{ marginBottom: "15px" }}
    onChange={onPasswordChange}
    required
  />;
  return <></>;
};

export default Login;
