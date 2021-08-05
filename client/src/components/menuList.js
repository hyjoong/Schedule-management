import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import {
  ScheduleOutlined,
  CalendarOutlined,
  FolderOpenOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { MENU } from "../constants/route";

const MenuList = () => {
  const { SubMenu } = Menu;
  return (
    <>
      <Menu
        style={{ width: 256, height: "100%" }}
        defaultSelectedKeys={["1"]}
        mode="inline"
      >
        <Menu.Item
          key="1"
          style={{ fontSize: "1rem", marginBottom: "3.5rem" }}
        ></Menu.Item>
        <Menu.Item
          key="2"
          icon={
            <ScheduleOutlined
              style={{ fontSize: "1rem", marginRight: "0.5rem" }}
            />
          }
          style={{ fontSize: "1rem", marginBottom: "2rem" }}
        >
          <Link to={MENU.SCHEDULE}> Schedule</Link>
        </Menu.Item>
        <Menu.Item
          key="3"
          icon={
            <CalendarOutlined
              style={{ fontSize: "1rem", marginRight: "0.5rem" }}
            />
          }
          style={{ fontSize: "1rem", marginBottom: "2rem" }}
        >
          <Link to={MENU.CALENDAR}> Calendar</Link>
        </Menu.Item>
        <Menu.Item
          key="4"
          icon={
            <FolderOpenOutlined
              style={{ fontSize: "1rem", marginRight: "0.5rem" }}
            />
          }
          style={{ fontSize: "1rem", marginBottom: "2rem" }}
        >
          <Link to={MENU.HISTORY}> History</Link>
        </Menu.Item>
        <SubMenu
          key="sub1"
          icon={
            <SettingOutlined
              style={{ fontSize: "1rem", marginRight: "0.5rem" }}
            />
          }
          title="Setting"
          style={{
            fontSize: "1rem",
            marginBottom: "2rem",

            height: "80px",
          }}
        >
          <Menu.Item key="5" style={{ fontSize: "1rem", marginTop: "0.2rem" }}>
            My Info
          </Menu.Item>
          <Menu.Item key="6" style={{ fontSize: "1rem", marginTop: "0.2rem" }}>
            Logout
          </Menu.Item>
        </SubMenu>
      </Menu>
    </>
  );
};

export default MenuList;
