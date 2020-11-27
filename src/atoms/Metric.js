import React from "react";
import { Divider, Segment, Statistic } from "semantic-ui-react";

export const Metric = ({ title, current_value, status_label }) => {
  return (
    <Segment
      style={{
        display: "flex",
        justifyContent: "center",
        flex: "1 0 auto",
        alignItems: "center",
        margin: "10px",
      }}
    >
      <Statistic size="mini">
        <Statistic.Label>{title}</Statistic.Label>
        <Divider></Divider>

        <Statistic.Value>{current_value}</Statistic.Value>
        <Divider></Divider>

        <Statistic.Label>{status_label(current_value)}</Statistic.Label>
      </Statistic>
    </Segment>
  );
};
