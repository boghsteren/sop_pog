import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Icon, Segment, Statistic } from "semantic-ui-react";

export const SideSelector = () => {
  const { cp_active } = useSelector((state) => state);
  const dispatch = useDispatch();
  const updateValue = () =>
    dispatch({ type: `UPDATE_CP_ACTIVE`, update: !cp_active });
  return (
    <Segment
      style={{
        display: "flex",
        justifyContent: "center",
        height: "150px",
        flex: "1 0 auto",
        alignItems: "center",
        margin: "10px",
      }}
    >
      <div>
        <Statistic>
          <Statistic.Label>Active Side</Statistic.Label>

          <Statistic.Value text>{cp_active ? "AP" : "CP"}</Statistic.Value>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button circular onClick={() => updateValue()} icon>
              <Icon name="refresh"></Icon>
            </Button>
          </div>
        </Statistic>
      </div>
    </Segment>
  );
};
