const express = require("express");
const db = require("../db");
const itemRouter = express.Router();
const { Item } = require("../models/index");

// GET /items/ (ALL)
itemRouter.get("/", async (req, res, next) => {
  try {
    const items = await Item.findAll();
    res.statusCode(200).send(items);
  } catch (error) {
    next(error);
  }
});

// GET /items/name (ONE)
itemRouter.get("/name/:itemName", async (req, res, next) => {
  try {
    const myItem = await Item.findOne({
      where: {
        name: {
          [db.like]: req.params.itemName
      }
    }});
    res.statusCode(200).send(myItem);
  } catch (error) {
    next(error);
  }
});

module.exports = itemRouter;
