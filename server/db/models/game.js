const mongoose = require("mongoose");

const cardModel = {
  stage: String,
  side: String,
  card_number: Number,
  _id: String,
  ops: Number,
  sr: Number,
  removed_after_play: Boolean,
  war_status: Number,
  rep_ah: Number,
  rep_ge: Number,
  rep_tu: Number,
  title: String,
  text: String,
  deck: String,
};

var Game = mongoose.model("Game", {
  game_name: { type: String },
  game_users: [{ type: String }],
  cp_cards: [cardModel],
  ap_cards: [cardModel],
  cp_warstatus: {
    type: Number,
  },
  ap_warstatus: {
    type: Number,
  },
  score: {
    type: Number,
  },
  turn: {
    type: Number,
  },
  action_round: {
    type: Number,
  },
  cp_active: {
    type: Boolean,
  },
});

module.exports = {
  Game,
};
