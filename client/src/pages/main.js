import { Flex } from "../components/shared/flexContainer";
import LayoutScreen from "../components/templates/layoutScreen";
import ScheduleLayout from "../components/schedule/scheduleLayout";
import CalendarLayout from "../components/calendar/calendarLayout";
import { useState, useCallback } from "react";
import MenuList from "../components/menuList";

const Main = () => {
  const [activeScreen, setActiveScreen] = useState(2);
  const onChangeScreen = useCallback((num) => {
    setActiveScreen(num);
  }, []);
  console.log("메인 화면 랜더링");
  console.log("화면idx", activeScreen);
  const MenuPage = {
    2: <ScheduleLayout />,
    3: <CalendarLayout />,
  };

  return (
    <Flex style={{ height: "100%", overFlow: "auto" }}>
      <MenuList onChangeScreen={onChangeScreen} />
      <LayoutScreen>{MenuPage[activeScreen]}</LayoutScreen>
    </Flex>
  );
};

export default Main;
