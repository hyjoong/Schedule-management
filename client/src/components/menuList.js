import React, { useCallback } from "react";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { clearToken } from "../utils/token";
import { useDispatch } from "react-redux";
import { LogoutAction } from "../redux/action";
import {
  ScheduleOutlined,
  CalendarOutlined,
  FolderOpenOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

const MenuList = ({ onChangeScreen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeScreen = (e) => {
    onChangeScreen(e.key);
  };

  const handleLogout = useCallback(() => {
    clearToken();
    dispatch(LogoutAction());
    navigate("/login");
  }, [navigate, dispatch]);

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
          onClick={(e) => changeScreen(e)}
          icon={
            <ScheduleOutlined
              style={{ fontSize: "1rem", marginRight: "0.5rem" }}
            />
          }
          style={{ fontSize: "1rem", marginBottom: "2rem", cursor: "pointer" }}
        >
          Schedule
        </Menu.Item>
        <Menu.Item
          key="3"
          onClick={(e) => changeScreen(e)}
          icon={
            <CalendarOutlined
              style={{ fontSize: "1rem", marginRight: "0.5rem" }}
            />
          }
          style={{ fontSize: "1rem", marginBottom: "2rem", cursor: "pointer" }}
        >
          Calendar
        </Menu.Item>
        <Menu.Item
          key="4"
          onClick={(e) => changeScreen(e)}
          icon={
            <FolderOpenOutlined
              style={{ fontSize: "1rem", marginRight: "0.5rem" }}
            />
          }
          style={{ fontSize: "1rem", marginBottom: "2rem", cursor: "pointer" }}
        >
          History
        </Menu.Item>
        <SubMenu
          key="sub1"
          icon={
            <SettingOutlined
              style={{ fontSize: "1rem", marginRight: "0.5rem" }}
            />
          }
          title="설정"
          style={{
            fontSize: "1rem",
            marginBottom: "2rem",
            height: "80px",
            cursor: "pointer",
          }}
        >
          <Menu.Item
            key="5"
            onClick={(e) => changeScreen(e)}
            style={{ fontSize: "1rem", marginTop: "0.2rem", cursor: "pointer" }}
          >
            내 정보
          </Menu.Item>
          <Menu.Item
            key="6"
            onClick={(e) => handleLogout(e)}
            style={{ fontSize: "1rem", marginTop: "0.2rem", cursor: "pointer" }}
          >
            로그아웃
          </Menu.Item>
        </SubMenu>
      </Menu>
    </>
  );
};

export default MenuList;
