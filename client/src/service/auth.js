import React from "react";

const Auth = ({ http, tokenStorage }) => {
  const signup = () => async (username, nickname, email, password) => {
    const data = await http.fetch("/auth/signup", {
      method: "POST",
      body: JSON.stringify({
        username,
        nickname,
        email,
        password,
      }),
    });
    tokenStorage.saveToken(data.token);
    return data;
  };

  const login = async (username, nickname, email, password) => {
    const data = await http.fetch("/auth/login", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
    });
    tokenStorage.saveToken(data.token);
    return data;
  };

  const me = async () => {
    const token = tokenStorage.getToken();
    return http.fetch("/auth/me", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
  };

  const logout = async () => {
    tokenStorage.clearToken();
  };
};

export default Auth;
