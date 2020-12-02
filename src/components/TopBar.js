import {
  LoginOutlined,
  LogoutOutlined,
  PlusOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Col, Popover, Row, Select, Space, Tooltip } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import Title from "antd/lib/typography/Title";
import React from "react";
import { useSelector } from "react-redux";
import { getGame } from "../actions/games";
import { useMediaQuery } from "react-responsive";

export const TopBar = () => {
  const { user_games, current_game } = useSelector((state) => state);
  const { isAuthenticated, logout, user } = useAuth0();
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const options = user_games.map(({ _id, game_name }) => {
    return { value: _id, label: game_name };
  });
  const handleChange = (value) => {
    getGame({ game_id: value });
  };
  return (
    <Row align="middle" justify="space-between">
      <Col>
        <Space size="large">
          <Title style={{ color: "white", margin: "0px" }} level={3}>
            {isTabletOrMobile ? "POG: SOP" : "PATHS OF GLORY: STATE OF PLAY"}
          </Title>
          {options.length > 1 && (
            <Select
              style={{ width: 150 }}
              value={current_game._id}
              onChange={handleChange}
              options={options}
              key={1}
            ></Select>
          )}
          {isAuthenticated && (
            <Tooltip title="Add new game">
              <Button
                shape="circle"
                type="primary"
                icon={<PlusOutlined size=""></PlusOutlined>}
              ></Button>
            </Tooltip>
          )}
        </Space>
      </Col>
      <Col>
        <Space>
          {isAuthenticated && (
            <Popover
              title={user.name}
              placement="bottomLeft"
              content={
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    danger
                    type="primary"
                    onClick={logout}
                    icon={<LogoutOutlined />}
                  >
                    Log out
                  </Button>
                </div>
              }
            >
              <Avatar icon={<UserOutlined></UserOutlined>}></Avatar>
            </Popover>
          )}
        </Space>
      </Col>
    </Row>
  );
};
