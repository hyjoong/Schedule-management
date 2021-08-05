import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Main from "./pages/main";
import { PAGE_PATH } from "./constants/route";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={PAGE_PATH.HOME}>
          <Login />
        </Route>
        <Route exact path={PAGE_PATH.LOGIN}>
          <Login />
        </Route>
        <Route exact path={PAGE_PATH.SIGN_UP}>
          <Signup />
        </Route>
        <Route exact path={PAGE_PATH.CALENDAR}>
          <Main />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
