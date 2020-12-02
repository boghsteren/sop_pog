import { Space } from "antd";
import Title from "antd/lib/typography/Title";
import React from "react";
import { Counter } from "../atoms/Counter";

export const ScoreSection = () => (
  <div style={{ width: "100%" }}>
    <Title level={3}>SCORE</Title>
    <Space wrap>
      <Counter type="score" min={0} title="Score" max={20}></Counter>
      <Counter
        type="russia_cp_vps"
        min={0}
        title="RU CP VPs"
        max={20}
      ></Counter>
    </Space>
  </div>
);
