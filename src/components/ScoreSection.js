import React from "react";
import { Header, Segment } from "semantic-ui-react";
import { Counter } from "../atoms/Counter";

export const ScoreSection = () => (
  <div
    style={{
      backgroundColor: "white",
      width: "100%",
    }}
  >
    <Header style={{ margin: "20px" }} textAlign="center" as="h2">
      SCORE STATUS
    </Header>
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        flexGrow: "initial",
      }}
    >
      <Counter
        type="score"
        min={0}
        title="Score"
        max={20}
        status_label={(current_value) => (
          <Header as="h5">
            {current_value === 0
              ? "AP Win"
              : current_value === 20
              ? "CP Win"
              : current_value > 10
              ? "CP lead"
              : current_value < 10
              ? "AP lead"
              : "Even"}
          </Header>
        )}
      ></Counter>
      <Counter
        type="russia_cp_vps"
        min={0}
        title="Russia CP VPs"
        max={20}
        status_label={(current_value) => (
          <Header as="h5">
            {current_value > 3
              ? "Czar takes command playable"
              : "Czar takes command NOT playable"}
          </Header>
        )}
      ></Counter>
    </div>
  </div>
);
