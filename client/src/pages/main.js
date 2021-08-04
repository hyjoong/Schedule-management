import MenuList from "../components/menuList";
import { Flex } from "../components/shared/flexContainer";
import Schedule from "../components/schedule/schedule";

const Main = () => {
  return (
    <Flex style={{ height: "100%" }}>
      <MenuList />
      <Schedule />
    </Flex>
  );
};

export default Main;
