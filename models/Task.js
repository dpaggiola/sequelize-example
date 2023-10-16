const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");

const Task = sequelize.define("Task", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  done: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  }
});

module.exports = Task;