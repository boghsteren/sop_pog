import React from "react";
import { useSelector } from "react-redux";
import { Card, Header, Segment } from "semantic-ui-react";
import { ActionCard } from "../atoms/ActionCard";

export const CardsPage = () => {
  const { cp_cards, ap_cards } = useSelector((state) => state.current_game);
  return (
    <Segment
      style={{
        backgroundColor: "white",
        width: "100%",
        marginTop: "14px",
        display: "flex",
      }}
    >
      <Segment>
        <Header>CP Cards</Header>
        <Card.Group>
          {cp_cards.map((card) => (
            <ActionCard {...card}></ActionCard>
          ))}
        </Card.Group>
      </Segment>
      <Segment>
        <Header>AP Cards</Header>

        <Card.Group>
          {ap_cards.map((card) => (
            <ActionCard {...card}></ActionCard>
          ))}
        </Card.Group>
      </Segment>
    </Segment>
  );
};
