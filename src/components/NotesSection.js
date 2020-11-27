import dayjs from "dayjs";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Feed, Form, Header, Segment } from "semantic-ui-react";
import { Note } from "../atoms/Note";

export const NotesSection = () => {
  const { notes, turn, action_round, cp_active } = useSelector(
    (state) => state
  );
  const [noteText, updateNote] = useState("");
  const dispatch = useDispatch();
  const createNote = (e) => {
    e.preventDefault();
    const newNote = {
      noteText,
      turn,
      action_round,
      cp_active,
      timestamp: dayjs(),
    };
    dispatch({ type: "ADD_NOTES", item: newNote });
    updateNote("");
  };
  return (
    <Segment
      basic
      elevation={0}
      style={{
        backgroundColor: "white",
        padding: "20px",
      }}
    >
      <Header as="h2">NOTES</Header>
      <Feed style={{ margin: "0px" }}>
        {notes.map((note) => (
          <Note key={note.noteText} {...note}></Note>
        ))}
      </Feed>
      <Form style={{ margin: "20px" }}>
        <Form.TextArea
          value={noteText}
          onChange={(e, { value }) => updateNote(value)}
        />
        <Button
          type="submit"
          floated="right"
          onClick={createNote}
          content="Add note"
          labelPosition="left"
          icon="edit"
        />
      </Form>
    </Segment>
  );
};
