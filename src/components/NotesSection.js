import { Button, Card, Input, Space } from "antd";
import dayjs from "dayjs";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { updateGame } from "../actions/games";
import { Note } from "../atoms/Note";

export const NotesSection = () => {
  const { notes, turn, action_round, cp_active } = useSelector(
    (state) => state.current_game
  );
  const [noteText, updateNote] = useState("");
  const createNote = (e) => {
    e.preventDefault();
    const newNote = {
      noteText,
      turn,
      action_round,
      cp_active,
      timestamp: dayjs(),
    };
    updateGame({ update: { notes: [...notes, newNote] } });
    updateNote("");
  };
  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Card title="Notes">
        {notes?.map((note) => (
          <Note key={note.noteText} {...note}></Note>
        ))}
      </Card>
      <Input.TextArea
        value={noteText}
        onChange={(e) => updateNote(e.target.value)}
      />
      <Button onClick={createNote}>Create note</Button>
    </Space>
  );
};
