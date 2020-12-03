import { useEffect, useState } from "react";
import "antd/dist/antd.css";
import "./App.css";
import { Router } from "./Router";
import { useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { getGame, getMyGames } from "./actions/games";
import Layout, { Content, Footer, Header } from "antd/lib/layout/layout";
import { TopBar } from "./components/TopBar";
import { Spin } from "antd";

function App() {
  const dispatch = useDispatch();
  const [dataLoading, setLoading] = useState(false);
  const { isAuthenticated, getAccessTokenSilently, isLoading } = useAuth0();
  useEffect(() => {
    let token;
    const getToken = async () => {
      try {
        setLoading(true);
        token = await getAccessTokenSilently();
        dispatch({ type: "UPDATE_ACCESS_TOKEN", update: token });
        const myGames = await getMyGames();
        myGames.length > 0 && (await getGame({ game_id: myGames[0]._id }));
        isAuthenticated && setLoading(false);
      } catch (e) {
        console.error(e);
      }
    };
    isAuthenticated && getToken();
  }, [isAuthenticated, getAccessTokenSilently, dispatch]);
  return dataLoading || isLoading ? (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Spin size="large"></Spin>
    </div>
  ) : (
    <Layout>
      <Header>
        <TopBar></TopBar>
      </Header>
      <Content style={{ padding: "36px" }}>
        <Router></Router>
      </Content>
      <Footer></Footer>
    </Layout>
  );
}

export default App;
