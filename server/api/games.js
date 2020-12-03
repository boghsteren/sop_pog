const express = require("express");
const cp_cards = require("../cards");
const { Game } = require("../db/models/game");
const router = express.Router();

router.get("/my_games", async (req, res) => {
  let doc;
  try {
    const res = await Game.find({ game_users: req.user.sub });
    doc = res.map(({ _id, game_name, updatedAt }) => {
      return { _id, game_name, updatedAt };
    });
  } catch (err) {
    throw err;
  }
  res.send(doc);
});

router.post("/game", async (req, res) => {
  let doc;
  const newItem = new Game({
    game_name: req.body.game_name,
    game_users: [req.user.sub],
    cp_cards,
    ap_cards: cp_cards,
    cp_warstatus: 0,
    ap_warstatus: 0,
    score: 10,
    turn: 1,
    action_round: 1,
    cp_active: true,
    notes: [],
  });
  try {
    doc = await newItem.save();
  } catch (err) {
    throw err;
  }
  res.send(doc);
});

router.get("/game/:game", async (req, res) => {
  console.log("hit");
  let doc;
  try {
    doc = await Game.findById(req.params.game);
  } catch (err) {
    throw err;
  }
  res.send(doc);
});

router.put("/game/:game", async (req, res) => {
  let doc;
  const update = req.body;
  try {
    doc = await Game.findByIdAndUpdate(req.params.game, update, { new: true });
  } catch (err) {
    throw err;
  }
  res.send(doc);
});

router.delete("/game/:game", async (req, res) => {
  let doc;
  try {
    doc = await Game.findByIdAndDelete(req.params.game);
  } catch (err) {
    throw err;
  }
  res.send(doc);
});

module.exports = router;
