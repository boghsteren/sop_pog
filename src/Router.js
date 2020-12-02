import {
  DashboardOutlined,
  DashOutlined,
  PlusCircleOutlined,
  PlusOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Menu, Space } from "antd";
import Title from "antd/lib/typography/Title";
import React from "react";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";
import { CardsPage } from "./pages/CardsPage";
import { StatusPage } from "./pages/StatusPage";

export const Router = () => {
  const { isAuthenticated, loginWithRedirect, isLoading } = useAuth0();
  const history = useHistory();
  const { pathname } = useLocation();
  const handleClick = (e) => history.push(e.key);
  return isAuthenticated ? (
    <div>
      <Menu
        style={{ marginBottom: "20px" }}
        onClick={handleClick}
        mode="horizontal"
        selectedKeys={[pathname]}
      >
        <Menu.Item icon={<DashboardOutlined></DashboardOutlined>} key="/">
          Status
        </Menu.Item>
        <Menu.Item icon={<ProfileOutlined></ProfileOutlined>} key="/cards">
          Cards
        </Menu.Item>
      </Menu>

      <Switch>
        <Route exact path="/">
          <StatusPage></StatusPage>
        </Route>
        <Route exact path="/cards">
          <CardsPage></CardsPage>
        </Route>
      </Switch>
    </div>
  ) : (
    <div
      style={{
        height: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Title>You are not logged in</Title>

      <Button size="large" onClick={loginWithRedirect} loading={isLoading}>
        Log in
      </Button>
    </div>
  );
};
