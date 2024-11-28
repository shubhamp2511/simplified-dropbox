const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const File = sequelize.define("File", {
  filename: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  filepath: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mimetype: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = File;
