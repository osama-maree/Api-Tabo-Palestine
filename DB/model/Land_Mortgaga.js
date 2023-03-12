const { sequelize } = require("../connection");
const { DataTypes } = require("sequelize");
const Land_Mortgaga = sequelize.define("Mortgaga", {
  Movement_type: {
    type: DataTypes.STRING,
    defaultValue: "Land_Mortgaga",
  },
  Kushan: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Photo_of_citizen_ID: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Photo_of_Bank_ID: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Legal_Declaration: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Insurance_Bond: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  authorization_Letter: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Insurance_Request: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  feesDone: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  MoveState: {
    type: DataTypes.STRING,
    defaultValue: "جاري المعالجة",
  },
  state: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  message: {
    type: DataTypes.STRING,
    defaultValue: "لا يوجد رسائل لعرضها",
  },
});

module.exports = Land_Mortgaga;
