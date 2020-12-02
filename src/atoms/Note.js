import { InfoCircleOutlined } from "@ant-design/icons";
import { Comment } from "antd";
import dayjs from "dayjs";
import React from "react";

export const Note = ({
  noteText,
  timestamp,
  turn,
  action_round,
  cp_active,
}) => {
  return (
    <Comment
      content={noteText}
      author={`Turn ${turn}, Round ${action_round}, ${
        cp_active ? "CP Turn" : "AP Turn"
      }`}
      datetime={dayjs(timestamp).format("DD-MM-YYYY hh:mm")}
      avatar={
        <InfoCircleOutlined style={{ fontSize: "16px" }}></InfoCircleOutlined>
      }
    ></Comment>
  );
};
