import MenuList from "../components/menuList";
import { Flex } from "../components/shared/flexContainer";
import LayoutScreen from "../components/templates/layoutScreen";
import ScheduleLayout from "../components/schedule/scheduleLayout";

const Main = () => {
  return (
    <Flex style={{ height: "100%" }}>
      <MenuList />
      <LayoutScreen>
        <ScheduleLayout />
      </LayoutScreen>
    </Flex>
  );
};

export default Main;
