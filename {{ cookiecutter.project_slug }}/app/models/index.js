const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.URL);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Items = require("./item.model.js")(sequelize, Sequelize);

module.exports = db;
