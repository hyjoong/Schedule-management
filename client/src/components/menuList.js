import React, { useCallback } from "react";
import { Menu } from "antd";
import "antd/dist/antd.css";
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
    <div style={{ width: 256 }}>
      <Menu
        style={{ height: "100%" }}
        defaultSelectedKeys={["3"]}
        mode="inline"
      >
        <Menu.Item key="1"></Menu.Item>
        <Menu.Item
          key="2"
          onClick={(e) => changeScreen(e)}
          icon={
            <ScheduleOutlined
              style={{ fontSize: "1rem", marginRight: "0.5rem" }}
            />
          }
        >
          Schedule
        </Menu.Item>
        <Menu.Item
          key="3"
          onClick={(e) => changeScreen(e)}
          icon={<CalendarOutlined />}
        >
          Calendar
        </Menu.Item>
        <Menu.Item
          key="4"
          onClick={(e) => changeScreen(e)}
          icon={<FolderOpenOutlined />}
        >
          History
        </Menu.Item>
        <SubMenu key="sub1" icon={<SettingOutlined />} title="설정">
          <Menu.Item key="5" onClick={(e) => changeScreen(e)}>
            내 정보
          </Menu.Item>
          <Menu.Item key="6" onClick={(e) => handleLogout(e)}>
            로그아웃
          </Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
};

export default MenuList;
