const jwt = require("jsonwebtoken"); //using jwt to know user logged in
const EmployeeModel = require("../DB/model/employee");
const UserModel = require("../DB/model/user");
const auth = (accessRoles=[]) => {
  return async (req, res, next) => {
    try {
      let { token } = req.headers;
      
      if (!token.startsWith(process.env.authBearerToken)) {
        //A bearer token is a type of token that is used in Auth
        res.status(400).json({ message: "error token" }); //if there is token and not match with bearer token reject request,bad
      } else {
        token = token.split("__")[1]; //remove bearer token from original token
        const decoded = await jwt.verify(token, process.env.LOGINTOKEN); //verify Token

        let user = await UserModel.findOne({
          attributes:['id',"role"],
          where: { email: decoded.email },
        });
   
        if (!user) {
          user = await EmployeeModel.findOne({
            attributes: ["id", "role"],
            where: { email: decoded.email },
          });
        }
        if (!user){
          res.status(400).json({error:"user not found"})
        } 
        if(!accessRoles.includes(user.role))
        res.status(403).json({error:"U Are not authorized"})
        req.user = user; //set data for logged in user in req
        next(); //to next operation
      }
    } catch (err) {
      res.status(400).json({ message: "sendToken" }); //reject if there an technical error as fail access to database or erorr in name of model and an other error for To prevent the server from crashing
    }
  };
};



module.exports = { auth };
