export const getRules = ({
  score,
  turn,
  russia_cp_vps,
  cp_cards,
  ap_cards,
  cp_warstatus,
  ap_warstatus,
}) => {
  let rules = [];
  if (turn === 1) {
    rules.push({
      rule: "15.1.12: No RU attacks on GE forts",
      text:
        "Russian units may not attack, enter, or besiege a German fort space during the August 1914 turn.",
    });
  }
  if (
    cp_warstatus < 4 &&
    cp_cards.find((item) => item._id === "cp11")?.deck !== "removed"
  ) {
    rules.push({
      rule: "15.1.11: No GE attacks on RU forts",
      text:
        "Russian Forts: German units may not attack spaces containing Russian forts until the OberOst Event Card is played or the Central Powers War Status is 4 or higher. German units may, however, besiege unoccupied Russian forts. Austro- Hungarian units are not restricted by this rule.",
    });
  }
  if (
    cp_warstatus < 4 &&
    cp_cards.find((item) => item._id === "cp_8")?.deck !== "removed"
  ) {
    rules.push(
      {
        rule: "11.1.9: No CP movement into coast spaces",
        text:
          "Amiens, Calais & Ostend: Until either the Race to the Sea Event Card is played or the CP War Status is 4 or higher, Central Powers units may neither end their move nor SR into Amiens, Calais, or Ostend, except as a result of advance after combat. However they may move through and place control markers on these spaces.",
      },
      {
        rule: "12.7.7: No CP advance into coast spaces",
        text:
          "Central Powers units may advance into Amiens, Calais, or Ostend only if one of the following applies: • if it was the defending space in the Combat. • if the Race to the Sea Event has been played. • if the Central Powers War Status is 4 or higher.",
      }
    );
  }
  if (cp_warstatus + ap_warstatus > 29) {
    rules.push(
      {
        rule: "16.3.2: Zimmermann allowed",
        text:
          "Move the US Entry marker into the “Zimmermann Tele- gram Allowed” box of the US Entry Track when the Combined War Status reaches 30. The Zimmermann Telegram event cannot be played before this occurs.",
      },
      {
        rule: "12.7.7: No CP advance into coast spaces",
        text:
          "Central Powers units may advance into Amiens, Calais, or Ostend only if one of the following applies: • if it was the defending space in the Combat. • if the Race to the Sea Event has been played. • if the Central Powers War Status is 4 or higher.",
      }
    );
  }
  if (russia_cp_vps > 2) {
    rules.push({
      rule: "16.4.3: Tsar takes command playable",
      text:
        "When the Central Powers control three or more VP spaces in Russia, the Russian Capitulation marker is moved into the “Tsar Takes Command Allowed” box. The Central Powers may now play the Tsar Takes Command event. If the Current CP Russian VP marker moves below 3 before the Tsar Takes Com- mand event is played, move the Russian Capitulation marker back into the “God Save the Tsar” box.",
    });
  }
  return rules;
};
