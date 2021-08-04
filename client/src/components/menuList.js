import React from "react";
import { Menu } from "antd";
import {
  ScheduleOutlined,
  CalendarOutlined,
  FolderOpenOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import SubMenu from "antd/lib/menu/SubMenu";
const MenuList = () => {
  return (
    <>
      <Menu
        style={{ width: 256, height: "100%" }}
        defaultSelectedKeys={["1"]}
        mode="inline"
      >
        <Menu.Item
          key="1"
          icon={<ScheduleOutlined style={{ fontSize: "1rem" }} />}
          style={{ fontSize: "1rem", marginBottom: "2rem" }}
        >
          Schedule
        </Menu.Item>
        <Menu.Item
          key="2"
          icon={<CalendarOutlined style={{ fontSize: "1rem" }} />}
          style={{ fontSize: "1rem", marginBottom: "2rem" }}
        >
          Calendar
        </Menu.Item>
        <Menu.Item
          key="3"
          icon={<FolderOpenOutlined style={{ fontSize: "1rem" }} />}
          style={{ fontSize: "1rem", marginBottom: "2rem" }}
        >
          History
        </Menu.Item>
        <SubMenu
          key="sub1"
          icon={<SettingOutlined style={{ fontSize: "1rem" }} />}
          title="Setting"
          style={{
            fontSize: "1rem",
            marginBottom: "2rem",
            position: "absolute",
            bottom: "7%",
          }}
        >
          <Menu.Item key="4">My Info</Menu.Item>
          <Menu.Item key="5">Logout</Menu.Item>
        </SubMenu>
      </Menu>
    </>
  );
};

export default MenuList;
