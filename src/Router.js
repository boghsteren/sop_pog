import { DashboardOutlined, ProfileOutlined } from "@ant-design/icons";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Menu } from "antd";
import Title from "antd/lib/typography/Title";
import React from "react";
import { useSelector } from "react-redux";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";
import { CardsPage } from "./pages/CardsPage";
import { StatusPage } from "./pages/StatusPage";

export const Router = () => {
  const { isAuthenticated, loginWithRedirect, isLoading } = useAuth0();
  const history = useHistory();
  const { pathname } = useLocation();
  const { current_game } = useSelector((state) => state);
  const handleClick = (e) => history.push(e.key);
  return isAuthenticated ? (
    <div>
      {current_game._id && (
        <Menu
          style={{ marginBottom: "20px" }}
          onClick={handleClick}
          mode="horizontal"
          selectedKeys={[pathname]}
        >
          <Menu.Item icon={<DashboardOutlined></DashboardOutlined>} key="/">
            Status
          </Menu.Item>
          <Menu.Item icon={<ProfileOutlined></ProfileOutlined>} key="/ap_cards">
            AP Cards
          </Menu.Item>
          <Menu.Item icon={<ProfileOutlined></ProfileOutlined>} key="/cp_cards">
            CP Cards
          </Menu.Item>
        </Menu>
      )}
      {current_game._id && (
        <Route exact path="/cp_cards">
          <CardsPage side="cp"></CardsPage>
        </Route>
      )}
      {current_game._id && (
        <Route exact path="/ap_cards">
          <CardsPage side="ap"></CardsPage>
        </Route>
      )}
      <Switch>
        <Route exact path="/">
          <StatusPage></StatusPage>
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
