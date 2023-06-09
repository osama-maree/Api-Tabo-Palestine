const { sequelize } = require("../connection");
const { DataTypes } = require("sequelize");
const Land_Sorting = sequelize.define("LandSort", {
  Movement_type: {
    type: DataTypes.STRING,
    defaultValue: "Land Sorting",
  },
  Kushan: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Photo_of_citizen_ID: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Transaction_Report: {
    type: DataTypes.STRING,
  },
  Financial_Clearance: {
    type: DataTypes.STRING,
  },
  Detection_Report: {
    type: DataTypes.STRING,
  },
  Change_Statment: {
    type: DataTypes.STRING,
  },
  Municipal_Clearance: {
    type: DataTypes.STRING,
  },
  Area_Chart: {
    type: DataTypes.STRING,
  },
  Site_Plan: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Execution_Warrant_Book: {
    type: DataTypes.STRING,
  },
  court_decision: {
    type: DataTypes.STRING,
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
module.exports=Land_Sorting