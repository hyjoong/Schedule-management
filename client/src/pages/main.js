import { Flex } from "../components/shared/flexContainer";
import LayoutScreen from "../components/templates/layoutScreen";
import ScheduleLayout from "../components/schedule/scheduleLayout";
import CalendarLayout from "../components/calendar/calendarLayout";
import { useState, useCallback, useEffect } from "react";
import MenuList from "../components/menuList";
import HistoryLayout from "../components/history/historyLayout";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Main = () => {
  const [activeScreen, setActiveScreen] = useState(3);
  const onChangeScreen = useCallback((num) => {
    setActiveScreen(num);
  }, []);
  const user = useSelector((state) => state.authReducer.user);

  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  const MenuPage = {
    2: <ScheduleLayout />,
    3: <CalendarLayout />,
    4: <HistoryLayout />,
  };

  return (
    <Flex style={{ height: "100%", overFlow: "auto" }}>
      <MenuList onChangeScreen={onChangeScreen} />
      <LayoutScreen>{MenuPage[activeScreen]}</LayoutScreen>
    </Flex>
  );
};

export default Main;
