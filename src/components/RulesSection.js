import Title from "antd/lib/typography/Title";
import { Col, Collapse, Row } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { getRules } from "../utilities/getRules";

export const RulesSection = () => {
  const state = useSelector((state) => state.current_game);
  return (
    <Row>
      <Title level={3}>RULES</Title>
      <Col span={24}>
        <Collapse style={{ marginTop: "16px" }}>
          {getRules(state).map(({ rule, text }, index) => (
            <Collapse.Panel header={rule} key={rule}>
              <p>{text}</p>
            </Collapse.Panel>
          ))}
        </Collapse>
      </Col>
    </Row>
  );
};
