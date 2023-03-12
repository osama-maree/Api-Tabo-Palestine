const UserModel = require("../../../DB/model/user");
const bcrypt = require("bcrypt");
const Inheritance_Transfer = require("../../../DB/model/Inheritance_Transfer.js");
const Land_Fragmentation = require("../../../DB/model/Land_Fragmentation.js");
const Land_Mortgaga = require("../../../DB/model/Land_Mortgaga.js");
const Land_Sale = require("../../../DB/model/Land_Sale.js");
const Land_Sorting = require("../../../DB/model/Land_Sorting.js");
const signup = async (req, res, next) => {
  try {
    const { id, fullName, password, email, address, birthDate, phoneNumber } =
      req.body;
    const user = await UserModel.findOne({
      attributes: ["email"],
      where: {
        email: email,
      },
    });
    if (user) {
      next(new Error("exits user", { cause: 400 }));
    } else {
      let hashPassword = await bcrypt.hash(
        password,
        parseInt(process.env.SALTROUND)
      );
      const savedUser = await UserModel.create({
        id,
        fullName,
        password: hashPassword,
        email,
        address,
        birthDate,
        phoneNumber,
      });
      res.status(201).json({ message: "success,verify gmail", savedUser });
    }
  } catch (err) {
    next(new Error(err.message, { cause: 400 }));
  }
};
const getInhertTransfer = async (req, res, next) => {
  try {
    //console.log(req.user)
    const inhertTransfer = await Inheritance_Transfer.findAll({
      where: {
        EmployeeId: req.user.id,
      },
    });
    res.status(200).json({ message: "success", inhertTransfer });
  } catch (err) {
    next(new Error(err.message, { cause: 500 }));
  }
};

const LandFragment = async (req, res, next) => {
  try {
    //console.log(req.user)
    const landfragment = await Land_Fragmentation.findAll({
      where: {
        EmployeeId: req.user.id,
      },
    });
    res.status(200).json({ message: "success", landfragment });
  } catch (err) {
    next(new Error(err.message, { cause: 500 }));
  }
};

const LandMortgaga = async (req, res, next) => {
  try {
    //console.log(req.user)
    const landmortgaga = await Land_Mortgaga.findAll({
      where: {
        EmployeeId: req.user.id,
      },
    });
    res.status(200).json({ message: "success", landmortgaga });
  } catch (err) {
    next(new Error(err.message, { cause: 500 }));
  }
};

const LandSale = async (req, res, next) => {
  try {
    //console.log(req.user)
    const landsale = await Land_Sale.findAll({
      where: {
        EmployeeId: req.user.id,
      },
    });
    res.status(200).json({ message: "success", landsale });
  } catch (err) {
    next(new Error(err.message, { cause: 500 }));
  }
};
const LandSorting = async (req, res, next) => {
  try {
    //console.log(req.user)
    const landsorting = await Land_Sorting.findAll({
      where: {
        EmployeeId: req.user.id,
      },
    });
    res.status(200).json({ message: "success", landsorting });
  } catch (err) {
    next(new Error(err.message, { cause: 500 }));
  }
};

const updateInheritTransfer = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { MoveState, message } = req.body;
    let state;
    if (MoveState === "مقبولة") state = 1;
    else state = 2;
    await Inheritance_Transfer.update(
      {
        message,
        state,
        MoveState,
      },
      {
        where: {
          id: id,
        },
      }
    );
    res.status(200).json({ message: "success" });
  } catch (err) {
    next(new Error(err.message, { cause: 500 }));
  }
};

const updateInheritTransferFeesDone = async (req, res, next) => {
  try {
    const { feesDone } = req.body;
    const { id } = req.params;
    await Inheritance_Transfer.update(
      { feesDone: true },
      {
        where: {
          id: id,
        },
      }
    );
    res.status(200).json({ message: "success" });
  } catch (err) {
    next(new Error(err.message, { cause: 500 }));
  }
};

const updatelandFragmentation = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { MoveState, message } = req.body;
    let state;
    if (MoveState === "مقبولة") state = 1;
    else state = 2;
    await Land_Fragmentation.update(
      {
        message,
        state,
        MoveState,
      },
      {
        where: {
          id: id,
        },
      }
    );
    res.status(200).json({ message: "success" });
  } catch (err) {
    next(new Error(err.message, { cause: 500 }));
  }
};
const updateLandFragmentferFeesDone = async (req, res, next) => {
  try {
    const { feesDone } = req.body;
    const { id } = req.params;
    await Land_Fragmentation.update(
      { feesDone: true },
      {
        where: {
          id: id,
        },
      }
    );
    res.status(200).json({ message: "success" });
  } catch (err) {
    next(new Error(err.message, { cause: 500 }));
  }
};

const updatelLandMortgaga = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { MoveState, message } = req.body;
    let state;
    if (MoveState === "مقبولة") state = 1;
    else state = 2;
    await Land_Mortgaga.update(
      {
        message,
        state,
        MoveState,
      },
      {
        where: {
          id: id,
        },
      }
    );
    res.status(200).json({ message: "success" });
  } catch (err) {
    next(new Error(err.message, { cause: 500 }));
  }
};
const updateLandMortgagaFeesDone = async (req, res, next) => {
  try {
    const { feesDone } = req.body;
    const { id } = req.params;
    await Land_Mortgaga.update(
      { feesDone: true },
      {
        where: {
          id: id,
        },
      }
    );
    res.status(200).json({ message: "success" });
  } catch (err) {
    next(new Error(err.message, { cause: 500 }));
  }
};

const updatelLandSale = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { MoveState, message } = req.body;
    let state;
    if (MoveState === "مقبولة") state = 1;
    else state = 2;
    await Land_Sale.update(
      {
        message,
        state,
        MoveState,
      },
      {
        where: {
          id: id,
        },
      }
    );
    res.status(200).json({ message: "success" });
  } catch (err) {
    next(new Error(err.message, { cause: 500 }));
  }
};
const updateLandSaleMFeesDone = async (req, res, next) => {
  try {
    const { feesDone } = req.body;
    const { id } = req.params;
    await Land_Sale.update(
      { feesDone: true },
      {
        where: {
          id: id,
        },
      }
    );
    res.status(200).json({ message: "success" });
  } catch (err) {
    next(new Error(err.message, { cause: 500 }));
  }
};

const updateLandsorting = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { MoveState, message } = req.body;
    let state;
    if (MoveState === "مقبولة") state = 1;
    else state = 2;
    await Land_Sorting.update(
      {
        message,
        state,
        MoveState,
      },
      {
        where: {
          id: id,
        },
      }
    );
    res.status(200).json({ message: "success" });
  } catch (err) {
    next(new Error(err.message, { cause: 500 }));
  }
};
const updateLandsortingFeesDone = async (req, res, next) => {
  try {
    const { feesDone } = req.body;
    const { id } = req.params;
    await Land_Sorting.update(
      { feesDone: true },
      {
        where: {
          id: id,
        },
      }
    );
    res.status(200).json({ message: "success" });
  } catch (err) {
    next(new Error(err.message, { cause: 500 }));
  }
};
module.exports = {
  signup,
  getInhertTransfer,
  LandFragment,
  LandMortgaga,
  LandSale,
  LandSorting,
  updateInheritTransfer,
  updateInheritTransferFeesDone,
  updatelandFragmentation,
  updateLandFragmentferFeesDone,
  updatelLandMortgaga,
  updateLandMortgagaFeesDone,
  updatelLandSale,
  updateLandSaleMFeesDone,
  updateLandsorting,
  updateLandsortingFeesDone,
};
