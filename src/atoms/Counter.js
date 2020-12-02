import { Button, Card, Space } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { updateGame } from "../actions/games";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import Title from "antd/lib/typography/Title";

export const Counter = ({ type, status_label, min, max, title }) => {
  const current_value = useSelector((state) => state.current_game[type]) || 0;
  const updateValue = (value) => updateGame({ update: { [type]: value } });
  return (
    <Card
      title={title}
      style={{ minWidth: 200 }}
      extra={
        <Space>
          <Button
            size="small"
            shape="circle"
            icon={<ArrowUpOutlined />}
            onClick={() => updateValue(current_value + 1)}
            disabled={current_value === max}
          ></Button>
          <Button
            size="small"
            shape="circle"
            icon={<ArrowDownOutlined />}
            onClick={() => updateValue(current_value - 1)}
            disabled={current_value === min}
          ></Button>
        </Space>
      }
    >
      <Title style={{ textAlign: "center" }}>{current_value}</Title>
    </Card>
  );
};
