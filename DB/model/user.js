const { sequelize } = require("../connection");
const { DataTypes } = require("sequelize");
const Land_Mortgaga = require("./Land_Mortgaga");
const Land_Sale = require("./Land_Sale");
const Inheritance_Transfer = require("./Inheritance_Transfer");
const Land_Fragmentation = require("./Land_Fragmentation");
const Lands = require("./Lands");
const Land_Sorting = require("./Land_Sorting");
const UserModel = sequelize.define("User", {
  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birthDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  confirmEmail: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  sendCode: {
    type: DataTypes.STRING,
    defaultValue: null,
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: "User",
  },
});

/*---->create relation between user model and landmortgaga transaction<-----*/
UserModel.hasMany(Land_Mortgaga);
Land_Mortgaga.belongsTo(UserModel);
/*---->create relation between user model and landSale transaction<-----*/

UserModel.hasMany(Land_Sale);
Land_Sale.belongsTo(UserModel);
/*---->create relation between user model and inherit transfer transaction<-----*/

UserModel.hasMany(Inheritance_Transfer);
Inheritance_Transfer.belongsTo(UserModel);
/*---->create relation between user model and landfragmentation transaction<-----*/

UserModel.hasMany(Land_Fragmentation);
Land_Fragmentation.belongsTo(UserModel);
/*---->create relation between user model and lands transaction<-----*/

UserModel.hasMany(Lands);
Lands.belongsTo(UserModel);
/*---->create relation between user model and land sorting transaction<-----*/

UserModel.hasMany(Land_Sorting);
Land_Sorting.belongsTo(UserModel);
/*---->export this model<-----*/

module.exports = UserModel;
