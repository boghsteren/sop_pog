import {
  DeleteOutlined,
  LogoutOutlined,
  PlusOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useAuth0 } from "@auth0/auth0-react";
import {
  Button,
  Col,
  Popconfirm,
  Popover,
  Row,
  Select,
  Space,
  Tooltip,
} from "antd";
import Avatar from "antd/lib/avatar/avatar";
import Title from "antd/lib/typography/Title";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { deleteGame, getGame } from "../actions/games";
import { useMediaQuery } from "react-responsive";
import { GameForm } from "./GameForm";
import { useHistory } from "react-router-dom";

export const TopBar = () => {
  const { user_games, current_game } = useSelector((state) => state);
  const [modalOpen, changeModalOpen] = useState(false);
  const history = useHistory();
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
              style={{ width: 120 }}
              value={current_game._id}
              onChange={handleChange}
              options={options}
              key={1}
            ></Select>
          )}
          {isAuthenticated && current_game._id && (
            <Tooltip title={`Delete ${current_game.game_name}`}>
              <Popconfirm
                title={`Delete ${current_game.game_name}?`}
                onConfirm={() => {
                  deleteGame();
                  history.push("/");
                }}
                okText="Delete"
                cancelText="Cancel"
                okButtonProps={{ type: "danger" }}
                icon={
                  <DeleteOutlined style={{ color: "grey" }}></DeleteOutlined>
                }
              >
                <Button
                  shape="circle"
                  danger
                  icon={<DeleteOutlined size=""></DeleteOutlined>}
                ></Button>
              </Popconfirm>
            </Tooltip>
          )}
          {isAuthenticated && (
            <Tooltip title="Add new game">
              <Button
                onClick={() => changeModalOpen(true)}
                shape="circle"
                type="primary"
                icon={<PlusOutlined size=""></PlusOutlined>}
              ></Button>
            </Tooltip>
          )}
          <GameForm
            changeModalOpen={changeModalOpen}
            modalOpen={modalOpen}
          ></GameForm>
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
