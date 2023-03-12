const UserModel = require("../../../DB/model/user");
const bcrypt = require("bcrypt");
const EmployeeModel = require("../../../DB/model/employee");
const jwt = require("jsonwebtoken");

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await EmployeeModel.findOne({
      where: {
        email: email,
      },
    });
    if (!user) {
      user = await UserModel.findOne({
        where: {
          email: email,
        },
      });
    }
    if (!user) {
      res.status(404).json({ error: "invalid account" });
    } else {
      if (!user.confirmEmail) {
        res.status(404).json({ error: "please vefy U email" });
      } else {
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
          res.status(404).json({ error: "invalid account" });
        } else {
          const token = jwt.sign(
            { id: user.id, email: user.email },
            process.env.LOGINTOKEN,
            {
              expiresIn: 60 * 60 * 24,
            }
          );
          res.status(200).json({ message: "valid account",token });
        }
      }
    }
  } catch (err) {
    res.status(404).json({ error: "internal error" });
  }
};
module.exports = {
  signIn,
};
