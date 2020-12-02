import React, { useState } from "react";
import { Row, Col, Divider, Empty, Button } from "antd";
import { NotesSection } from "../components/NotesSection";
import { RulesSection } from "../components/RulesSection";
import { ScoreSection } from "../components/ScoreSection";
import TurnSection from "../components/TurnSection";
import { WarStatusSection } from "../components/WarStatusSection";
import { useSelector } from "react-redux";
import { GameForm } from "../components/GameForm";
import { useMediaQuery } from "react-responsive";

export const StatusPage = () => {
  const [modalOpen, changeModalOpen] = useState(false);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const { user_games } = useSelector((state) => state);
  return user_games.length > 0 ? (
    <Row gutter={8} wrap>
      <Col span={isTabletOrMobile ? 24 : 10}>
        <TurnSection></TurnSection>
        <Divider></Divider>
        <WarStatusSection></WarStatusSection>
        <Divider></Divider>
        <ScoreSection></ScoreSection>
      </Col>
      <Col span={isTabletOrMobile ? 24 : 14}>
        {isTabletOrMobile && <Divider></Divider>}
        <RulesSection></RulesSection>
        <Divider></Divider>
        <NotesSection></NotesSection>
      </Col>
    </Row>
  ) : (
    <Empty description="You have no active games!">
      <Button onClick={() => changeModalOpen(true)}>Create new game</Button>
      <GameForm
        changeModalOpen={changeModalOpen}
        modalOpen={modalOpen}
      ></GameForm>
    </Empty>
  );
};
