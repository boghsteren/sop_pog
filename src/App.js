import { useEffect, useState } from "react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import { Container, Segment, Sidebar } from "semantic-ui-react";
import { SidebarMenu } from "./components/SidebarMenu";
import { TopBar } from "./components/TopBar";
import { Router } from "./Router";
import { useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { getGame, getMyGames } from "./actions/games";

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  useEffect(() => {
    let token;
    const getToken = async () => {
      try {
        token = await getAccessTokenSilently();
        dispatch({ type: "UPDATE_ACCESS_TOKEN", update: token });
        getGame({ game_id: "5fbeb6fbaedfdac4bbf7e2f6" });
        getMyGames();
      } catch (e) {
        console.error(e);
      }
    };
    isAuthenticated && getToken();
  }, [isAuthenticated, getAccessTokenSilently, dispatch]);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <Sidebar.Pushable as={Segment}>
        <SidebarMenu
          setMenuOpen={setMenuOpen}
          menuOpen={menuOpen}
        ></SidebarMenu>
        <Sidebar.Pusher dimmed={menuOpen} as="div">
          <TopBar setMenuOpen={setMenuOpen}></TopBar>
          <Container fluid>
            <Router></Router>
          </Container>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  );
}

export default App;
