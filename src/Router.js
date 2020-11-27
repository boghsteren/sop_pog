import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Switch, Route } from "react-router-dom";
import { Button, Container } from "semantic-ui-react";
import { CardsPage } from "./pages/CardsPage";
import { StatusPage } from "./pages/StatusPage";

export const Router = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  return isAuthenticated ? (
    <Switch>
      <Route exact path="/">
        <StatusPage></StatusPage>
      </Route>
      <Route exact path="/cards">
        <CardsPage></CardsPage>
      </Route>
    </Switch>
  ) : (
    <Container
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button size="massive" onClick={loginWithRedirect}>
        Log in
      </Button>
    </Container>
  );
};
