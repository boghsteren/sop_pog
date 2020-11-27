import "semantic-ui-css/semantic.min.css";
import { Header, Segment } from "semantic-ui-react";
import { Counter } from "../atoms/Counter";
import { SideSelector } from "../atoms/SideSelector";

export const TurnSection = () => (
  <div
    style={{
      backgroundColor: "white",
      width: "100%",
    }}
  >
    <Header style={{ margin: "20px" }} textAlign="center" as="h2">
      TURN STATUS
    </Header>
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      <Counter
        type="turn"
        title="Turn"
        min={1}
        max={20}
        status_label={(current_value) => (
          <Header as="h5">{current_value === 20 ? "Game End" : "-"}</Header>
        )}
      ></Counter>
      <Counter
        type="action_round"
        title="Round"
        min={1}
        max={6}
        status_label={() => <Header as="h5">-</Header>}
      ></Counter>
      <SideSelector></SideSelector>
    </div>
  </div>
);

export default TurnSection;
