const EmployeeModel=require('../../../DB/model/employee')
const bcrypt = require("bcrypt");
const signup = async (req, res) => {
  try {
    const {
      id,
      fullName,
      password,
      email,
      role,
    } = req.body;
  
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
        role
      });
      
      
      res.status(201).json({ message: "success,verify gmail", savedUser });
    }
  } catch (err) {
    res.status(404).json({ error: "internal error" });
  }
};


module.exports={signup}