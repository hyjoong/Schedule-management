import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import GlobalStyle from "./styles/GlobalStyle";
import { theme } from "./styles/theme";
import ConfigureStore from "./redux/store";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider, AuthErrorEventBus } from "./context/AuthContext";
import HttpClient from "./service/network";
import TokenStorage from "./utils/token";
import AuthService from "./service/auth";

const baseURL = process.env.REACT_APP_BASE_URL;

const tokenStorage = new TokenStorage();

const authErrorEventBus = new AuthErrorEventBus();
const httpClient = new HttpClient(baseURL, authErrorEventBus);
const authService = new AuthService(httpClient, tokenStorage);

const store = ConfigureStore;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <AuthProvider
      authService={authService}
      authErrorEventBus={authErrorEventBus}
    >
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
