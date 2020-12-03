import {
  AimOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
  FireOutlined,
  GlobalOutlined,
  SwitcherOutlined,
  UploadOutlined,
  UsergroupAddOutlined,
  VerticalAlignBottomOutlined,
} from "@ant-design/icons";
import { Card, notification, Space, Tooltip } from "antd";
import React from "react";
import { updateCards } from "../actions/games";

export const ActionCard = ({ card }) => {
  const {
    title,
    side,
    deck,
    card_number,
    war_status,
    removed_after_play,
    combat_card,
    text,
    ops,
    sr,
  } = card;
  const changeCardDeck = ({ deck, action }) => {
    updateCards({
      side,
      newCards: [
        {
          ...card,
          deck:
            action === "event"
              ? removed_after_play
                ? "box"
                : "discard"
              : deck,
        },
      ],
    });
    notification.open({
      message: action
        ? `Played "${title}" (${side.toUpperCase()}${card_number}) as ${action}`
        : `Moved "${title}" (${side.toUpperCase()}${card_number}) to ${deck}`,
    });
  };
  const actions = {
    hand: [
      <Tooltip title={`Play as ${combat_card ? "combat card" : "event"}`}>
        <ExclamationCircleOutlined
          onClick={() => changeCardDeck({ action: "event" })}
        />
      </Tooltip>,
      <Tooltip title="Play for ops">
        <AimOutlined
          onClick={() =>
            changeCardDeck({ deck: "discard", action: "operations" })
          }
        ></AimOutlined>
      </Tooltip>,
      <Tooltip title="Play for SR">
        <GlobalOutlined
          onClick={() =>
            changeCardDeck({
              deck: "discard",
              action: "strategic redeployment",
            })
          }
        ></GlobalOutlined>
      </Tooltip>,
      <Tooltip title="Play for replacements">
        <UsergroupAddOutlined
          onClick={() =>
            changeCardDeck({ deck: "discard", action: "replacements" })
          }
        ></UsergroupAddOutlined>
      </Tooltip>,
      <Tooltip title="Discard">
        <VerticalAlignBottomOutlined
          onClick={() => changeCardDeck({ deck: "discard" })}
        ></VerticalAlignBottomOutlined>
      </Tooltip>,
    ],
    draw: [
      <Tooltip title="Draw into hand">
        <UploadOutlined
          onClick={() => changeCardDeck({ deck: "hand" })}
        ></UploadOutlined>
      </Tooltip>,
      <Tooltip title="Discard">
        <VerticalAlignBottomOutlined
          onClick={() => changeCardDeck({ deck: "discard" })}
        ></VerticalAlignBottomOutlined>
      </Tooltip>,
      <Tooltip title="Remove from game">
        <DeleteOutlined
          onClick={() => changeCardDeck({ deck: "box" })}
        ></DeleteOutlined>
      </Tooltip>,
    ],
    discard: [
      <Tooltip title="Put into draw deck">
        <SwitcherOutlined
          onClick={() => changeCardDeck({ deck: "draw" })}
        ></SwitcherOutlined>
      </Tooltip>,
      <Tooltip title="Draw into hand">
        <UploadOutlined
          onClick={() => changeCardDeck({ deck: "hand" })}
        ></UploadOutlined>
      </Tooltip>,
      <Tooltip title="Remove from game">
        <DeleteOutlined
          onClick={() => changeCardDeck({ deck: "box" })}
        ></DeleteOutlined>
      </Tooltip>,
    ],
    box: [
      <Tooltip title="Put into draw deck">
        <SwitcherOutlined
          onClick={() => changeCardDeck({ deck: "draw" })}
        ></SwitcherOutlined>
      </Tooltip>,
      <Tooltip title="Draw into hand">
        <UploadOutlined
          onClick={() => changeCardDeck({ deck: "hand" })}
        ></UploadOutlined>
      </Tooltip>,
    ],
  };
  return (
    <Card
      style={{ width: "400px", marginBottom: "36px" }}
      title={`${side?.toUpperCase()}${card_number} - ${title}`}
      extra={
        <Space>
          {war_status && (
            <Tooltip title="War status">
              {war_status}
              <FireOutlined></FireOutlined>
            </Tooltip>
          )}
          {removed_after_play && (
            <Tooltip title="Removed after play">
              <DeleteOutlined></DeleteOutlined>
            </Tooltip>
          )}
          <div>
            <Tooltip title="Operations value">{`${ops}`}</Tooltip>/
            <Tooltip title="Strategic redeployment value">{`${sr}`}</Tooltip>
          </div>
        </Space>
      }
      actions={actions[deck]}
    >
      <Card.Meta style={{ height: "120px" }} description={text}></Card.Meta>
    </Card>
  );
};
