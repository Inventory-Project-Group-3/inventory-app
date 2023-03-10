const {sauces, items} = require('./seedData');

const {sequelize} = require('./db');
const {Sauce, Item} = require('./models/index');

const seed = async () => {

    try {
        // drop and recreate tables per model definitions
        await sequelize.sync({ force: true });
    
        // insert data
        await Promise.all(items.map((item) => {Item.create(item)}));

        console.log("db populated!");
    } catch (error) {
        console.error(error);
    }
}

seed();
