const { sequelize } = require("../connection");
const { DataTypes} = require("sequelize");
const Inheritance_Transfer = sequelize.define("transfer", {
  movement_type: {
    type: DataTypes.STRING,
    defaultValue: "Inheritance Transfer",
  },
  Financial_Clearance: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Municipal_Clearance: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Photo_Inheritors_ID: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Limiting_Legacy: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Endorsements: {
    type: DataTypes.STRING,
  },
  Kushan: {
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
module.exports=Inheritance_Transfer