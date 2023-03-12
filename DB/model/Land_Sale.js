const { sequelize } = require("../connection");
const { DataTypes } = require("sequelize");
const Land_Sale = sequelize.define("sale", {
  Municipal_Clearance: {
    type: DataTypes.STRING,
  },

  Movement_type: {
    type: DataTypes.STRING,
    defaultValue: "Land Sale",
  },
  Photo_Seller_ID: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Contract_of_Sale: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Kushan: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Photo_Buer_ID: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Land_Describtion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Financial_Clearance: {
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

module.exports = Land_Sale;
