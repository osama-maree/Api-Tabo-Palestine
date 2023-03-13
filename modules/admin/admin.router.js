const { auth } = require("../../middlewear/auth");
const validation = require("../../middlewear/validation.js");
const role = require("../../services/role.js");
const { signupValidation } = require("./controller/admin.validation.js");
const {
  signup,
  getNumberOfTransaction,
  getSaleTransaction,
  getInhertTransaction,
  getlandFreamentationTransaction,
  getlandMortgaga,
  getlandsorting,
} = require("./controller/controller");

const router = require("express").Router();
router.post("/signup",validation(signupValidation) , signup);
router.post(
  "/getNumbertransaction",
  auth([role.admin]),
  getNumberOfTransaction
);
router.get("/getsaleTransaction", auth([role.admin]), getSaleTransaction);
router.get("/getinhertTransfer", auth([role.admin]), getInhertTransaction);
router.get(
  "/getlandfragment",
  auth([role.admin]),
  getlandFreamentationTransaction
);
router.get("/getlandmortgaga", auth([role.admin]), getlandMortgaga);
router.get("/getlandsoritng", auth([role.admin]), getlandsorting);

module.exports = router;
