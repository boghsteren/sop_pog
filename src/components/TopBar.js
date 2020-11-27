import React from "react";
import { Button, Header, Icon } from "semantic-ui-react";

export const TopBar = ({ setMenuOpen }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "DarkSlateGrey",
        padding: "20px",
      }}
    >
      <div>
        <Button circular inverted basic onClick={() => setMenuOpen(true)} icon>
          <Icon name="bars"></Icon>
        </Button>
      </div>
      <div style={{ marginLeft: "20px" }}>
        <Header inverted as="h1">
          STATE OF PLAY: POG
        </Header>
      </div>
    </div>
  );
};
