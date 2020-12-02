import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Menu } from "antd";

export const SidebarMenu = () => {
  let history = useHistory();
  const { pathname } = useLocation();
  return (
    <Menu theme="dark" mode="inline">
      {console.log(pathname)}
      <Menu.Item
        isSelected={pathname === "/"}
        onClick={() => history.push("/")}
      >
        Game
      </Menu.Item>
      <Menu.Item
        isSelected={pathname === "/cards"}
        onClick={() => history.push("/cards")}
      >
        Cards
      </Menu.Item>
      <Menu.Item
        isSelected={pathname === "/armies"}
        onClick={() => history.push("/armies")}
      >
        Armies
      </Menu.Item>
    </Menu>
  );
};
