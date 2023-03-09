const express = require("express");
const db = require("../db");
const itemRouter = express.Router();
const { Item } = require("../models/index");
const { check, validationResult} = require("express-validator")

// Ahmed's Code - GET /items/ (ALL)
itemRouter.get("/", async (req, res, next) => {
  try {
    const items = await Item.findAll();
    res.status(200).send(items);
  } catch (error) {
    next(error);
  }
});

// Ahmed's Code - GET /items/id (ONE)
itemRouter.get("/id/:itemId", async (req, res, next) => {
  try {
    const myItem = await Item.findByPk(req.params.itemId);

    if(!myItem) {
      res.status(404);
      next();
    } else {
      res.status(200).send(myItem);
    }

  } catch (error) {
    next(error);
  }
});

// Ahmed's Code - POST /items/
itemRouter.post("/", [
  check("name").not().isEmpty().trim(),
  check("description").not().isEmpty().trim(),
  check("price").not().isEmpty(),
  check("category").not().isEmpty().trim(),
  check("image").not().isEmpty().trim()], 
  async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
          res.status(500).json({error: errors.array()})
      } else {
          try {
              await Item.create({
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                category: req.body.category,
                image: req.body.image
              });
              let myItems = await Item.findAll();
              res.status(201).send(myItems);
          } catch (error) {
              res.status(500).send({err: error.message})
          }
      }
})

// Ahmed's Code - DELETE items/id/
itemRouter.delete("/id/:id", async (req, res) => {
  try {
      const chosenItem = await Item.findByPk(req.params.id);
      if (!chosenItem) {
          throw new Error("No Item was found")
      } else {
          await chosenItem.destroy();
          let myItems = await Item.findAll();
          res.status(200).json(myItems);
      }        
  } catch (error) {
      res.status(500).json({err: error.message})
  }
})


// Ahmed's Code - PUT items/id/
itemRouter.put("/id/:id", [
  check("name").not().isEmpty().trim(),
  check("description").not().isEmpty().trim(),
  check("price").not().isEmpty(),
  check("category").not().isEmpty().trim(),
  check("image").not().isEmpty().trim()
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
      res.status(500).json({ error: errors.array()});
  } else {
      try {
          const chosenItem = await Item.findByPk(req.params.id);
          if (!chosenItem) {
              throw new Error("No Item was found with this id")
          } else {
              await chosenItem.update({
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                category: req.body.category,
                image: req.body.image
              });
              let myItems = await Item.findAll();
              res.status(202).json(myItems);
          }
      } catch (error) {
          res.status(500).json({err: error.message})
      }
  }
})




module.exports = itemRouter;