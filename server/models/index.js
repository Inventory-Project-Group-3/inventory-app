const {Sequelize} = require('sequelize')
const {sequelize} = require('../db')

const Sauce = sequelize.define("sauces", {
  name: Sequelize.STRING,
  image: Sequelize.STRING,
});

//Adrian's code - Sequelize Model for Item
const Item = sequelize.define("items", {
  name: Sequelize.STRING,
  description: Sequelize.STRING,
  price: Sequelize.INTEGER,
  category: Sequelize.STRING,
  image: Sequelize.STRING
});

//EXPORT
module.exports = {
  db: sequelize,
  Sauce, Item
};
