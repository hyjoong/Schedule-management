import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import GlobalStyle from "./styles/GlobalStyle";
import { theme } from "./styles/theme";
import ConfigureStore from "./redux/store";

import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(ConfigureStore);

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
