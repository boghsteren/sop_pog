const mongoose = require("mongoose");

const cardModel = {
  stage: String,
  side: String,
  card_number: Number,
  _id: String,
  ops: Number,
  sr: Number,
  combat_card: Boolean,
  removed_after_play: Boolean,
  war_status: Number,
  rep_ah: Number,
  rep_ge: Number,
  rep_tu: Number,
  rep_bu: Number,
  title: String,
  text: String,
  deck: String,
};

const noteModel = {
  noteText: String,
  turn: Number,
  action_round: Number,
  cp_active: Boolean,
  timestamp: String,
};

var GameSchema = mongoose.Schema(
  {
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
    russia_cp_vps: {
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
    notes: [noteModel],
  },
  { timestamps: true }
);

var Game = mongoose.model("Game", GameSchema);

module.exports = {
  Game,
};
