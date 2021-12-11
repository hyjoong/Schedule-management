import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Main from "./pages/main";
import { useSelector } from "react-redux";
import HistoryLayout from "./components/history/historyLayout";
import Write from "./pages/write";

const App = () => {
  const user = useSelector((state) => state.authReducer.user);

  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);
  return (
    <Routes>
      <Route exact path="/" element={<Main />}></Route>
      <Route exact path="/login" element={<Login />}></Route>
      <Route exact path="/signup" element={<Signup />}></Route>

      <Route exact path="/board" element={<HistoryLayout />}></Route>
      <Route exact path="/board/write" element={<Write />}></Route>
    </Routes>
  );
};

export default App;
