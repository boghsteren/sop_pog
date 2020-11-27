import React from "react";
import { useSelector } from "react-redux";
import { Header, Message } from "semantic-ui-react";
import { getRules } from "../utilities/getRules";

export const RulesSection = () => {
  const state = useSelector((state) => state);
  return (
    <div
      style={{
        backgroundColor: "white",
        width: "100%",
      }}
    >
      <Header style={{ margin: "20px" }} textAlign="center" as="h2">
        RULES
      </Header>
      {getRules(state).map(({ rule, text }) => (
        <Message key={rule} header={rule} content={text} />
      ))}
    </div>
  );
};
