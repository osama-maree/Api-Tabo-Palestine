const EmployeeModel = require("../../../DB/model/employee");
const bcrypt = require("bcrypt");
const Land_Sale = require("../../../DB/model/Land_Sale.js");
const Inheritance_Transfer = require("../../../DB/model/Inheritance_Transfer.js");
const Land_Fragmentation = require("../../../DB/model/Land_Fragmentation.js");
const Land_Mortgaga = require("../../../DB/model/Land_Mortgaga.js");
const Land_Sorting = require("../../../DB/model/Land_Sorting.js");
const signup = async (req, res) => {
  try {
    const { id, fullName, password, email, role } = req.body;

    const employee = await EmployeeModel.findOne({
      where: {
        email: email,
      },
    });

    if (employee) {
      res.status(409).json({ error: "this admin is exit" });
    } else {
      let hashPassword = await bcrypt.hash(
        password,
        parseInt(process.env.SALTROUND)
      );

      const savedUser = await EmployeeModel.create({
        id,
        fullName,
        password: hashPassword,
        email,
        role,
      });

      res.status(201).json({ message: "success,verify gmail", savedUser });
    }
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

const getNumberOfTransaction = async (req, res, next) => {
  try {
    const { id } = req.body;
    const employee = await EmployeeModel.findOne({
      attributes: { exclude: ["password", "confirmEmail", "sendCode"] },
      where: {
        id: id,
      },
    });
    res.status(200).json({ emp: employee });
  } catch (err) {
    next(new Error(err.message, { cause: 500 }));
  }
};

const getSaleTransaction = async (req, res, next) => {
  try {
    const sale = await Land_Sale.findAll({});
    res.status(200).json({ Sale: sale });
  } catch (err) {
    next(new Error(err.message, { cause: 500 }));
  }
};

const getInhertTransaction = async (req, res, next) => {
  try {
    const transfer = await Inheritance_Transfer.findAll({});
    res.status(200).json({ Transfer: transfer });
  } catch (err) {
    next(new Error(err.message, { cause: 500 }));
  }
};
const getlandFreamentationTransaction = async (req, res, next) => {
  try {
    const fragment = await Land_Fragmentation.findAll({});
    res.status(200).json({ Fragment: fragment });
  } catch (err) {
    next(new Error(err.message, { cause: 500 }));
  }
};

const getlandMortgaga = async (req, res, next) => {
  try {
    const mortgaga = await Land_Mortgaga.findAll({});
    res.status(200).json({ Mortgaga: mortgaga });
  } catch (err) {
    next(new Error(err.message, { cause: 500 }));
  }
};
const getlandsorting = async (req, res, next) => {
  try {
    const sorting = await Land_Sorting.findAll({});
    res.status(200).json({ Sorting: sorting });
  } catch (err) {
    next(new Error(err.message, { cause: 500 }));
  }
};

module.exports = {
  signup,
  getNumberOfTransaction,
  getSaleTransaction,
  getInhertTransaction,
  getlandFreamentationTransaction,
  getlandMortgaga,
  getlandsorting,
};
