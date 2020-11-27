import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Icon, Segment, Statistic } from "semantic-ui-react";

export const Counter = ({ type, status_label, min, max, title }) => {
  const current_value = useSelector((state) => state[type]);
  const dispatch = useDispatch();
  const updateValue = (value) =>
    dispatch({ type: `UPDATE_${type.toUpperCase()}`, update: value });
  return (
    <Segment
      style={{
        flex: "1 0 auto",
        alignItems: "center",
        margin: "10px",
      }}
    >
      <div>
        <Button
          icon
          circular
          size="mini"
          disabled={current_value === max}
          onClick={() => updateValue(current_value + 1)}
        >
          <Icon style={{ marginLeft: "5px" }} name="arrow circle up"></Icon>
        </Button>
      </div>
      <Statistic horizontal>
        <Statistic.Value>{current_value}</Statistic.Value>

        <Statistic.Label>{title}</Statistic.Label>
        <Statistic.Label>{status_label(current_value)}</Statistic.Label>
      </Statistic>
      <div>
        <Button
          icon
          circular
          size="mini"
          disabled={current_value === min}
          onClick={() => updateValue(current_value - 1)}
        >
          <Icon style={{ marginLeft: "5px" }} name="arrow circle down"></Icon>
        </Button>
      </div>
    </Segment>
  );
};
