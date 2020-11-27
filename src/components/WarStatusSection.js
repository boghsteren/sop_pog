import React from "react";
import { useSelector } from "react-redux";
import { Header, Segment } from "semantic-ui-react";
import { Counter } from "../atoms/Counter";
import { Metric } from "../atoms/Metric";

export const WarStatusSection = () => {
  const { cp_warstatus, ap_warstatus } = useSelector((state) => state);
  const combined_war_status = cp_warstatus + ap_warstatus;
  return (
    <div
      style={{
        backgroundColor: "white",
        width: "100%",
      }}
    >
      <Header style={{ margin: "20px" }} textAlign="center" as="h2">
        WAR STATUS
      </Header>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <Counter
          type="cp_warstatus"
          title="CP War Status"
          min={0}
          max={20}
          status_label={(current_value) => {
            return (
              <Header as="h5">
                {current_value < 4
                  ? "Mobilization"
                  : current_value > 9
                  ? "Total War"
                  : "Limited War"}
              </Header>
            );
          }}
        ></Counter>
        <Counter
          type="ap_warstatus"
          min={0}
          title="AP War Status"
          max={20}
          status_label={(current_value) => {
            return (
              <Header as="h5">
                {current_value < 4
                  ? "Mobilization"
                  : current_value > 9
                  ? "Total War"
                  : "Limited War"}
              </Header>
            );
          }}
        ></Counter>
        <Metric
          title="Combined War Status"
          current_value={combined_war_status}
          status_label={(current_value) => {
            return (
              <Header as="h5">
                {current_value < 30
                  ? "Zimmermann Telegram NOT allowed"
                  : "Zimmermann Telegram allowed"}
              </Header>
            );
          }}
        ></Metric>
      </div>
    </div>
  );
};
