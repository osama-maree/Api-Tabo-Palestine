const { auth } = require("../../middlewear/auth");
const role = require("../../services/role.js");
const {
  signup,
  getNumberOfTransaction,
  getSaleTransaction,
  getInhertTransaction,
  getlandFreamentationTransaction,
} = require("./controller/controller");

const router = require("express").Router();
router.post("/signup", signup);
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

module.exports = router;
