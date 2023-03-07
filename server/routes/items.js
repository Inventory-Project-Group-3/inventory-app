const express = require("express");
const itemRouter = express.Router();
const { Item } = require("../models");

// GET /item/ (ALL)
itemRouter.get("/", async (req, res, next) => {
  try {
    const items = await Item.findAll();
    res.send(items);
  } catch (error) {
    next(error);
  }
});

// GET /item/name (ONE)
itemRouter.get("/name/:itemName", async (req, res, next) => {
  try {
    const items = await Item.findAll();
    res.send(items);
  } catch (error) {
    next(error);
  }
});

module.exports = itemRouter;
