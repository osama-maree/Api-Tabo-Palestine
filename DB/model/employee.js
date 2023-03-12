const { sequelize } = require("../connection");
const { DataTypes } = require("sequelize");
const Land_Mortgaga = require("./Land_Mortgaga");
const Land_Sale = require("./Land_Sale");
const Inheritance_Transfer = require("./Inheritance_Transfer");
const Land_Fragmentation = require("./Land_Fragmentation");
const Lands = require("./Lands");
const Land_Sorting = require("./Land_Sorting");
const EmployeeModel = sequelize.define("Employee", {
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

    defaultValue: "Employee",
  },
  counter: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

/*---->create relation between employee model and landmortgaga transaction<-----*/
EmployeeModel.hasMany(Land_Mortgaga);
Land_Mortgaga.belongsTo(EmployeeModel);
/*---->create relation between employee model and landSale transaction<-----*/

EmployeeModel.hasMany(Land_Sale);
Land_Sale.belongsTo(EmployeeModel);
/*---->create relation between employee model and inherit transfer transaction<-----*/

EmployeeModel.hasMany(Inheritance_Transfer);
Inheritance_Transfer.belongsTo(EmployeeModel);
/*---->create relation between employee model and landfragmentation transaction<-----*/

EmployeeModel.hasMany(Land_Fragmentation);
Land_Fragmentation.belongsTo(EmployeeModel);
/*---->create relation between employee model and lands transaction<-----*/

EmployeeModel.hasMany(Lands);
Lands.belongsTo(EmployeeModel);
/*---->create relation between employee model and land sorting transaction<-----*/

EmployeeModel.hasMany(Land_Sorting);
Land_Sorting.belongsTo(EmployeeModel);
/*---->export this model<-----*/

module.exports = EmployeeModel;
