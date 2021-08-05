import MenuList from "../components/menuList";
import { Flex } from "../components/shared/flexContainer";
import LayoutScreen from "../components/templates/layoutScreen";
import Schedule from "../components/schedule/schedule";

const Main = () => {
  return (
    <Flex style={{ height: "100%" }}>
      <MenuList />
      <LayoutScreen>
        <Schedule />
      </LayoutScreen>
    </Flex>
  );
};

export default Main;
