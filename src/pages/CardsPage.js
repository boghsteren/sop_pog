import React from "react";
import { useSelector } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, notification, Space } from "antd";
import { updateCards } from "../actions/games";
import { CardColumn } from "../components/CardColumn";
import { SwitcherOutlined, UploadOutlined } from "@ant-design/icons";
import { rando, randoSequence } from "@nastyox/rando.js";

export const CardsPage = ({ side }) => {
  const cards = useSelector((state) => state.current_game[`${side}_cards`]);
  const hand = cards?.filter((card) => card.deck === "hand");
  const draw = cards?.filter((card) => card.deck === "draw");
  const discard = cards?.filter((card) => card.deck === "discard");
  const box = cards?.filter((card) => card.deck === "box");
  const total_war_cards = cards?.filter(
    (card) => card.stage === "total_war" && card.deck === "box"
  );
  const limited_war_cards = cards?.filter(
    (card) => card.stage === "limited_war" && card.deck === "box"
  );

  const drawRandomCard = async () => {
    const index = rando(draw.length - 1);
    await updateCards({ newCards: [{ ...draw[index], deck: "hand" }], side });
    notification.open({ message: "Drew random card" });
  };
  const drawUpToHandLimit = async () => {
    const number_of_cards = 8 - hand.length;
    const pickedCards = randoSequence(draw.length - 1)
      .slice(0, number_of_cards)
      .map((index) => {
        return { ...draw[index], deck: "hand" };
      });
    await updateCards({ newCards: pickedCards, side });
    notification.open({ message: "Drew random cards up to hand limit" });
  };
  const addDiscardToDraw = async () => {
    await updateCards({
      newCards: discard.map((card) => {
        return { ...card, deck: "draw" };
      }),
      side,
    });
    notification.open({ message: "Discarded cards added to draw pile" });
  };
  const addNewCardsToGame = async ({ stage }) => {
    await updateCards({
      newCards: cards
        .filter((card) => card.stage === stage)
        .map((card) => {
          return { ...card, deck: "draw" };
        }),
      side,
    });
    notification.open({
      message: `${
        stage === "limited_war" ? "Limited war" : "Total war"
      } cards added to draw pile`,
    });
  };
  return (
    <div>
      {cards && (
        <div>
          <CardColumn title={"Hand"} deck={hand}>
            <Space wrap>
              <Button
                type="primary"
                disabled={hand?.length > 7}
                onClick={drawUpToHandLimit}
                icon={<UploadOutlined></UploadOutlined>}
              >
                Draw cards up to hand limit
              </Button>
              <Button
                icon={<UploadOutlined></UploadOutlined>}
                disabled={draw.length === 0}
                onClick={drawRandomCard}
              >
                Draw single card
              </Button>
            </Space>
          </CardColumn>
          <CardColumn title={"Draw"} deck={draw}>
            <Button
              type="primary"
              disabled={discard?.length === 0}
              onClick={addDiscardToDraw}
              icon={<SwitcherOutlined></SwitcherOutlined>}
            >
              {`Add discard to draw (${discard?.length})`}
            </Button>
          </CardColumn>
          <CardColumn title={"Discard"} deck={discard}>
            <Button
              icon={<SwitcherOutlined></SwitcherOutlined>}
              type="primary"
              disabled={discard?.length === 0}
              onClick={addDiscardToDraw}
            >
              {`Add discard to draw (${discard?.length})`}
            </Button>
          </CardColumn>
          <CardColumn title={"Box"} deck={box}>
            <Space wrap>
              <Button
                type="primary"
                icon={<SwitcherOutlined></SwitcherOutlined>}
                disabled={limited_war_cards?.length === 0}
                onClick={() => addNewCardsToGame({ stage: "limited_war" })}
              >
                {`Add LW cards to draw pile (${limited_war_cards?.length})`}
              </Button>
              <Button
                type="primary"
                icon={<SwitcherOutlined></SwitcherOutlined>}
                disabled={total_war_cards?.length === 0}
                onClick={() => addNewCardsToGame({ stage: "total_war" })}
              >
                {`Add TW cards to draw pile (${total_war_cards?.length})`}
              </Button>
            </Space>
          </CardColumn>
        </div>
      )}
    </div>
  );
};
