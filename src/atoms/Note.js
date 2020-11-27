import dayjs from "dayjs";
import React from "react";
import { Feed, Icon } from "semantic-ui-react";

export const Note = ({
  noteText,
  timestamp,
  turn,
  action_round,
  cp_active,
}) => {
  return (
    <Feed.Event>
      <Feed.Label>
        <Icon name="sticky note outline" color="grey" />
      </Feed.Label>
      <Feed.Content>
        <Feed.Date>{dayjs(timestamp).format("DD-MM-YYYY hh:mm")}</Feed.Date>
        <Feed.Summary>
          Turn: {turn}, round: {action_round}, side: {cp_active ? "CP" : "AP"}
        </Feed.Summary>
        <Feed.Extra text style={{ wordBreak: "break-word" }}>
          {noteText}
        </Feed.Extra>
      </Feed.Content>
    </Feed.Event>
  );
};
