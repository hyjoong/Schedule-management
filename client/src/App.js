import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Main from "./pages/main";
import CalendarLayout from "./components/calendar/calendarLayout";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.authReducer.user);

  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    //else navigate(`/${user}`);
  }, [user]);
  return (
    <Routes>
      <Route exact path="/" element={<Main />}></Route>
      <Route exact path="/login" element={<Login />}></Route>
      <Route exact path="/signup" element={<Signup />}></Route>
      <Route exact path="/:name" element={<CalendarLayout />}></Route>
    </Routes>
  );
};

export default App;
