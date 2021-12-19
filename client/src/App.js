import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Main from "./pages/main";
import HistoryLayout from "./components/history/historyLayout";
import Write from "./pages/write";
import Detail from "./components/detail/detail";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Main />}></Route>
      <Route exact path="/login" element={<Login />}></Route>
      <Route exact path="/signup" element={<Signup />}></Route>

      <Route exact path="/board" element={<HistoryLayout />}></Route>
      <Route exact path="/board/write" element={<Write />}></Route>
      <Route path="/detail/:id" element={<Detail />}></Route>
    </Routes>
  );
};

export default App;
