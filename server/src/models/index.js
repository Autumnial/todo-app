const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const db = {};
const dotenv = require('dotenv').config()

const sequelize = new Sequelize(process.env.DATABASE_URL);

fs.readdirSync(__dirname)
  .filter((file) => file !== "index.js")
  .forEach((file) => {
    const model = require(path.join(__dirname, file))
    // console.log(model)
    db[model.name] = model;
  });

db.sequelize = sequelize;
db.Sequelize = sequelize;

module.exports = db;
