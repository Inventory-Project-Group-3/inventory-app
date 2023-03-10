const {Sequelize, DataTypes} = require('sequelize')
const {sequelize} = require('../db')

const Sauce = sequelize.define("sauces", {
  name: Sequelize.STRING,
  image: Sequelize.STRING,
});

//Adrian's code - Sequelize Model for Item
const Item = sequelize.define("items", {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull:false
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image:{
    type: DataTypes.STRING,
    allowNull: false
  }
});

//EXPORT
module.exports = {
  db: sequelize,
  Sauce, Item
};
