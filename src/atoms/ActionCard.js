import React from "react";
import { Card, Label } from "semantic-ui-react";

export const ActionCard = ({
  title,
  side,
  card_number,
  removed_after_play,
  combat_card,
  ops,
  sr,
}) => {
  return (
    <Card>
      <Card.Content>
        <Card.Header
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          {title}
          <Label>
            {ops} / {sr}
          </Label>
        </Card.Header>{" "}
        <Card.Meta>{`${side} ${card_number}`}</Card.Meta>
      </Card.Content>

      <Card.Content extra>
        {removed_after_play && <Label>Removed after play</Label>}
        {combat_card && <Label>Combat card</Label>}
      </Card.Content>
    </Card>
  );
};
