import { Card } from "antd";
import Title from "antd/lib/typography/Title";
import React from "react";

export const Metric = ({ title, current_value, status_label }) => {
  return (
    <Card title="Combined" style={{ minWidth: 200 }}>
      <Title style={{ textAlign: "center" }}>{current_value}</Title>
    </Card>
  );
};
