import { Input, Checkbox, Divider, notification } from "antd";
import Modal from "antd/lib/modal/Modal";
import React, { useState } from "react";
import { createGame } from "../actions/games";

export const GameForm = ({ changeModalOpen, modalOpen }) => {
  const [game_name, setGameName] = useState("");
  const createNewGame = async () => {
    const newGame = await createGame({ game_name });
    changeModalOpen(false);
    notification.open({
      message: "New game created",
      description: `${newGame.game_name} was created.`,
      onClick: () => {
        console.log("Notification Clicked!");
      },
    });
  };
  return (
    <Modal
      visible={modalOpen}
      title="New game"
      centered
      okText="Create game"
      onOk={createNewGame}
      onCancel={() => changeModalOpen(false)}
    >
      <label>Game name</label>
      <Input
        allowClear
        placeholder="A glorious path..."
        value={game_name}
        onChange={(e) => setGameName(e.target.value)}
      />
      <Divider></Divider> <Checkbox>Play with optional cards</Checkbox>
    </Modal>
  );
};
