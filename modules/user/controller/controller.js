const EmployeeModel = require("../../../DB/model/employee");
const Inheritance_Transfer = require("../../../DB/model/Inheritance_Transfer");
const Lands = require("../../../DB/model/Lands");
const Land_Fragmentation = require("../../../DB/model/Land_Fragmentation");
const Land_Mortgaga = require("../../../DB/model/Land_Mortgaga");
const Land_Sale = require("../../../DB/model/Land_Sale");
const Land_Sorting = require("../../../DB/model/Land_Sorting");
const cloudinary = require("./../../../services/cloudinary");
const land_Mortgaga = async (req, res) => {
  try {
    const employee = await EmployeeModel.findAll({
      attributes: ["id", "counter"],
      order: [["counter", "ASC"]],
      limit: 1,
    });
    await EmployeeModel.update(
      { counter: employee[0].counter + 1 },
      { where: { id: employee[0].id } }
    );

    const keys = Object.keys(req.files);
    let paths = [];
    for (let i of keys) {
      const { secure_url } = await cloudinary.uploader.upload(
        req.files[i][0].path,
        {
          folder: "user/land_mortogaga",
        }
      );
      paths.push(secure_url);
    }
    const [
      Kushan,
      Photo_of_citizen_ID,
      Photo_of_Bank_ID,
      Legal_Declaration,
      Insurance_Bond,
      authorization_Letter,
      Insurance_Request,
    ] = paths;
    await Land_Mortgaga.create({
      Kushan,
      Photo_of_citizen_ID,
      Photo_of_Bank_ID,
      Legal_Declaration,
      Insurance_Bond,
      authorization_Letter,
      Insurance_Request,
      UserId: req.user.id,
      EmployeeId: employee[0].id,
    });
    res.status(201).json({ message: "success" });
  } catch (err) {
    res.status(404).json({ error: "internal error" });
  }
};
const land_sale = async (req, res) => {
  try {
    const employee = await EmployeeModel.findAll({
      attributes: ["id", "counter"],
      order: [["counter", "ASC"]],
      limit: 1,
    });
    await EmployeeModel.update(
      { counter: employee[0].counter + 1 },
      { where: { id: employee[0].id } }
    );

    const keys = Object.keys(req.files);
    let paths = [];
    for (let i of keys) {
      const { secure_url } = await cloudinary.uploader.upload(
        req.files[i][0].path,
        {
          folder: "user/land_sale",
        }
      );
      paths.push(secure_url);
    }
    const [
      Kushan,
      Contract_of_Sale,
      Financial_Clearance,
      Municipal_Clearance,
      Land_Describtion,
      Photo_Buer_ID,
      Photo_Seller_ID,
    ] = paths;
    await Land_Sale.create({
      Kushan,
      Contract_of_Sale,
      Financial_Clearance,
      Municipal_Clearance,
      Land_Describtion,
      Photo_Buer_ID,
      Photo_Seller_ID,
      UserId: req.user.id,
      EmployeeId: employee[0].id,
    });
    res.status(201).json({ message: "success" });
  } catch (err) {
    res.status(400).json({ error: "internal error" });
  }
};
const inheritance_transfer = async (req, res) => {
  try {
    const employee = await EmployeeModel.findAll({
      attributes: ["id", "counter"],
      order: [["counter", "ASC"]],
      limit: 1,
    });
    await EmployeeModel.update(
      { counter: employee[0].counter + 1 },
      { where: { id: employee[0].id } }
    );

    const keys = Object.keys(req.files);
    let paths = [];
    for (let i of keys) {
      const { secure_url } = await cloudinary.uploader.upload(
        req.files[i][0].path,
        {
          folder: "user/Inheritance_Transfer",
        }
      );
      paths.push(secure_url);
    }
    const [
      Limiting_Legacy,
      Kushan,
      Municipal_Clearance,
      Financial_Clearance,
      Photo_Inheritors_ID,
      Endorsements,
    ] = paths;
    await Inheritance_Transfer.create({
      Limiting_Legacy,
      Kushan,
      Municipal_Clearance,
      Financial_Clearance,
      Photo_Inheritors_ID,
      Endorsements,
      UserId: req.user.id,
      EmployeeId: employee[0].id,
    });
    res.status(201).json({ message: "success" });
  } catch (err) {
    res.status(400).json({ error: "internal error" });
  }
};
const land_fragmentation = async (req, res) => {
  try {
    const employee = await EmployeeModel.findAll({
      attributes: ["id", "counter"],
      order: [["counter", "ASC"]],
      limit: 1,
    });
    await EmployeeModel.update(
      { counter: employee[0].counter + 1 },
      { where: { id: employee[0].id } }
    );

    const keys = Object.keys(req.files);
    let paths = [];
    for (let i of keys) {
      const { secure_url } = await cloudinary.uploader.upload(
        req.files[i][0].path,
        {
          folder: "user/Land_Fragmentation",
        }
      );
      paths.push(secure_url);
    }
    const [
      Kushan,
      Photo_of_citizen_ID,
      Site_Plan,
      Area_Chart,
      Municipal_Clearance,
      Financial_Clearance,
      Transaction_Report,
      Detection_Report,
      Change_Statment,
    ] = paths;
    await Land_Fragmentation.create({
      Kushan,
      Photo_of_citizen_ID,
      Site_Plan,
      Area_Chart,
      Municipal_Clearance,
      Financial_Clearance,
      Transaction_Report,
      Detection_Report,
      Change_Statment,

      UserId: req.user.id,
      EmployeeId: employee[0].id,
    });
    res.status(201).json({ message: "success" });
  } catch (err) {
    res.status(400).json({ error: "internal error" });
  }
};
const land_sorting = async (req, res) => {
  try {
    const employee = await EmployeeModel.findAll({
      attributes: ["id", "counter"],
      order: [["counter", "ASC"]],
      limit: 1,
    });
    await EmployeeModel.update(
      { counter: employee[0].counter + 1 },
      { where: { id: employee[0].id } }
    );

    const keys = Object.keys(req.files);
    let paths = [];
    for (let i of keys) {
      const { secure_url } = await cloudinary.uploader.upload(
        req.files[i][0].path,
        {
          folder: "user/Land_Sorting",
        }
      );
      paths.push(secure_url);
    }
    const [
      Kushan,
      Photo_of_citizen_ID,
      Site_Plan,
      Area_Chart,
      Municipal_Clearance,
      Financial_Clearance,
      Transaction_Report,
      Detection_Report,
      Change_Statment,
      court_decision,
      Execution_Warrant_Book,
    ] = paths;
 await Land_Sorting.create({
      Kushan,
      Photo_of_citizen_ID,
      Site_Plan,
      Area_Chart,
      Municipal_Clearance,
      Financial_Clearance,
      Transaction_Report,
      Detection_Report,
      Change_Statment,
      court_decision,
      Execution_Warrant_Book,
      UserId: req.user.id,
      EmployeeId: employee[0].id,
    });
    res.status(201).json({ message: "success"});
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const allLand = async (req, res) => {
  try {
    const lands = await Lands.findAll({
      attributes: { exclude: ["EmployeeId"] },
      where: {
        UserId: req.user.id,
      },
    });
    res.status(200).json({ message: "success", hisLand: lands });
  } catch (err) {
    res.status(400).json({ error: "internal error" });
  }
};

const getMortgaga=async(req,res)=>{
  try{
const mortgaga = await Land_Mortgaga.findAll({
  attributes: ["Movement_type", "id", "feesDone",'state', "MoveState", "message"],
  where: {
    UserId: req.user.id,
  },
});
res.status(200).json({message:"success",transaction:mortgaga})
  }catch(err){
    res.status(400).json({error:"internal error"})
  }
}
const Land_sale2 = async(req,res)=>{
try{
const Land_Sals1 = await Land_Sale.findAll({
  attributes: [
    "Movement_type",
    "id",
    "feesDone",
    "state",
    "MoveState",
    "message",
  ],
  where: {
    UserId: req.user.id,
  },
});
res.status(200).json({ message: "success", transaction: Land_Sals1 });

}catch(err){
res.status(400).json({error:"internal error"});
}
}


const inheritance_Transfer = async (req, res) => {
  try {
    const Inhert_Transefer = await Inheritance_Transfer.findAll({
      attributes: [
        "Movement_type",
        "id",
        "feesDone",
        "state",
        "MoveState",
        "message",
      ],
      where: {
        UserId: req.user.id,
      },
    });
    res.status(200).json({ message: "success", transaction: Inhert_Transefer });
  } catch (err) {
    res.status(400).json({ error: "internal error" });
  }
};

const land_fragmentation_trans = async (req, res) => {
  try {
    const Land_frag = await Land_Fragmentation.findAll({
      attributes: [
        "Movement_type",
        "id",
        "feesDone",
        "state",
        "MoveState",
        "message",
      ],
      where: {
        UserId: req.user.id,
      },
    });
    res.status(200).json({ message: "success", transaction: Land_frag });
  } catch (err) {
    res.status(400).json({ error: "internal error" });
  }
};

const getLand_sorting = async (req, res) => {
  try {
    const Land_sort = await Land_Sorting.findAll({
      attributes: [
        "Movement_type",
        "id",
        "feesDone",
        "state",
        "MoveState",
        "message",
      ],
      where: {
        UserId: req.user.id,
      },
    });
    res.status(200).json({ message: "success", transaction: Land_sort });
  } catch (err) {
    res.status(400).json({ error: "internal error" });
  }
};
module.exports = {
  land_Mortgaga,
  land_sale,
  inheritance_transfer,
  land_fragmentation,
  land_sorting,
  allLand,
  getMortgaga,
  Land_sale2,
  inheritance_Transfer,
  land_fragmentation_trans,
  getLand_sorting
};

