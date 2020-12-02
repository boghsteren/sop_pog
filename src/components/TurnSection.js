import { Space } from "antd";
import Title from "antd/lib/typography/Title";
import { Header } from "semantic-ui-react";
import { Counter } from "../atoms/Counter";
import { SideSelector } from "../atoms/SideSelector";

export const TurnSection = () => (
  <div>
    <Title level={3}>GAME PROGRESS</Title>

    <Space wrap>
      <Counter type="turn" title="Turn" min={1} max={20}></Counter>
      <Counter type="action_round" title="Round" min={1} max={6}></Counter>
      <SideSelector></SideSelector>
    </Space>
  </div>
);

export default TurnSection;
