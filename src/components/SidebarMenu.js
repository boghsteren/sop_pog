import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router-dom";
import { Header, Icon, Menu, Sidebar } from "semantic-ui-react";

export const SidebarMenu = ({ setMenuOpen, menuOpen }) => {
  let history = useHistory();
  const { logout, isAuthenticated, loginWithRedirect } = useAuth0();
  return (
    <Sidebar
      as={Menu}
      animation="overlay"
      icon="labeled"
      onHide={() => setMenuOpen(false)}
      vertical
      visible={menuOpen}
      width="thin"
    >
      {isAuthenticated && (
        <Menu.Item as="a" onClick={() => history.push("/")}>
          <Header style={{ display: "flex", justifyContent: "space-between" }}>
            Status
            <Icon name="balance scale" size="mini" />
          </Header>
        </Menu.Item>
      )}
      {isAuthenticated && (
        <Menu.Item as="a" onClick={() => history.push("/cards")}>
          <Header style={{ display: "flex", justifyContent: "space-between" }}>
            Cards
            <Icon name="id card outline" size="mini" />
          </Header>
        </Menu.Item>
      )}
      {isAuthenticated && (
        <Menu.Item as="a" onClick={() => history.push("/armies")}>
          <Header style={{ display: "flex", justifyContent: "space-between" }}>
            Armies
            <Icon name="users" size="mini" />
          </Header>
        </Menu.Item>
      )}
      {isAuthenticated && (
        <Menu.Item as="a" onClick={logout}>
          <Header style={{ display: "flex", justifyContent: "space-between" }}>
            Log out
            <Icon name="sign-out" size="mini" />
          </Header>
        </Menu.Item>
      )}
      {!isAuthenticated && (
        <Menu.Item as="a" onClick={loginWithRedirect}>
          <Header style={{ display: "flex", justifyContent: "space-between" }}>
            Log in
            <Icon name="sign-in" size="mini" />
          </Header>
        </Menu.Item>
      )}
    </Sidebar>
  );
};
