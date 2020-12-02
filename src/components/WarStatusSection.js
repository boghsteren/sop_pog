import { Space } from "antd";
import Title from "antd/lib/typography/Title";
import React from "react";
import { useSelector } from "react-redux";
import { Header } from "semantic-ui-react";
import { Counter } from "../atoms/Counter";
import { Metric } from "../atoms/Metric";

export const WarStatusSection = () => {
  const { cp_warstatus, ap_warstatus } = useSelector(
    (state) => state.current_game
  );
  const combined_war_status = cp_warstatus + ap_warstatus;
  return (
    <div>
      <Title level={3}>WARSTATUS</Title>
      <Space wrap>
        <Counter
          type="cp_warstatus"
          title="CP"
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
          title="AP"
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
          title="Combined"
          current_value={combined_war_status}
          status_label={() => {
            return null;
          }}
        ></Metric>
      </Space>
    </div>
  );
};
