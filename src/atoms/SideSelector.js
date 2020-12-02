import { SwapOutlined } from "@ant-design/icons";
import { Button, Card } from "antd";
import Title from "antd/lib/typography/Title";
import React from "react";
import { useSelector } from "react-redux";
import { updateGame } from "../actions/games";

export const SideSelector = () => {
  const { cp_active } = useSelector((state) => state.current_game);
  const updateValue = () => updateGame({ update: { cp_active: !cp_active } });
  return (
    <Card
      title="Active side"
      style={{ minWidth: 200 }}
      extra={
        <Button
          size="small"
          shape="circle"
          onClick={updateValue}
          icon={<SwapOutlined />}
        ></Button>
      }
    >
      <Title style={{ textAlign: "center" }}>{cp_active ? "AP" : "CP"}</Title>
    </Card>
  );
};
