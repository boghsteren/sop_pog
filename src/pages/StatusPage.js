import React from "react";
import { Button, Divider } from "semantic-ui-react";
import { NotesSection } from "../components/NotesSection";
import { RulesSection } from "../components/RulesSection";
import { ScoreSection } from "../components/ScoreSection";
import TurnSection from "../components/TurnSection";
import { WarStatusSection } from "../components/WarStatusSection";
import { createGame } from "../actions/games";

export const StatusPage = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexWrap: "wrap",
        padding: "20px",
      }}
    >
      <div style={{ flexGrow: 4, marginTop: "14px", maxWidth: "1100px" }}>
        <Button onClick={() => createGame({ game_name: "TEST" })}>
          New Game
        </Button>
        <TurnSection></TurnSection>
        <Divider></Divider>
        <WarStatusSection></WarStatusSection>
        <Divider></Divider>

        <ScoreSection></ScoreSection>
      </div>
      <div
        className="notebox"
        style={{
          flexGrow: 1,
          width: "600px",
        }}
      >
        <RulesSection></RulesSection>

        <NotesSection></NotesSection>
      </div>
    </div>
  );
};
