import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { persistStore } from "redux-persist";
import App from "./App";
import GlobalStyle from "./styles/GlobalStyle";
import { theme } from "./styles/theme";
import ConfigureStore from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const store = ConfigureStore;
const persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
