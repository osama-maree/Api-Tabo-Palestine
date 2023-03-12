const { sequelize } = require("../connection");
const { DataTypes} = require("sequelize");
const Lands = sequelize.define("Land", {
  Aquarium_Number: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  Land_ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  Piece_Number: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  Village_Name: {
    type: DataTypes.STRING,
  },
  Governorate_Name:{
    type:DataTypes.STRING
  },
  land:{
    type:DataTypes.STRING,
    allowNull:false
  }
});
module.exports=Lands