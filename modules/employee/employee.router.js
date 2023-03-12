const { auth } = require("../../middlewear/auth");
const validation = require("../../middlewear/validation.js");
const role = require("../../services/role.js");
const {
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
} = require("./controller/controller");
const {
  signupValidation,
  updateTransaction,
} = require("./controller/employee.validation.js");

const router = require("express").Router();

router.post(
  "/signup",
  auth([role.employee]),
  validation(signupValidation),
  signup
);
router.get(
  "/getInhertTranfer",
  auth([role.employee, role.admin]),
  getInhertTransfer
);
router.get("/getlandFragment", auth([role.employee, role.admin]), LandFragment);
router.get("/getlandmortgaga", auth([role.employee, role.admin]), LandMortgaga);
router.get("/getlandSale", auth([role.employee, role.admin]), LandSale);
router.get("/getlandsorting", auth([role.employee, role.admin]), LandSorting);

router.put(
  "/snedInhertTranfer/:id",
  auth([role.employee]),
  validation(updateTransaction),
  updateInheritTransfer
);
router.patch(
  "/snedInhertTranferfees/:id",
  auth([role.employee]),
  updateInheritTransferFeesDone
);

router.put(
  "/snedlandFragmet/:id",
  auth([role.employee]),
  validation(updateTransaction),
  updatelandFragmentation
);
router.patch(
  "/snedlandFragmentfees/:id",
  auth([role.employee]),
  updateLandFragmentferFeesDone
);

router.put(
  "/snedlandmortgaga/:id",
  auth([role.employee]),
  validation(updateTransaction),
  updatelLandMortgaga
);
router.patch(
  "/snedlandFragmentfees/:id",
  auth([role.employee]),
  updateLandMortgagaFeesDone
);

router.put(
  "/snedlandsale/:id",
  auth([role.employee]),
  validation(updateTransaction),
  updatelLandSale
);
router.patch(
  "/snedlandSalefees/:id",
  auth([role.employee]),
  updateLandSaleMFeesDone
);

router.put(
  "/snedlandsorting/:id",
  auth([role.employee]),
  validation(updateTransaction),
  updateLandsorting
);
router.patch(
  "/snedlandsortingfees/:id",
  auth([role.employee]),
  updateLandsortingFeesDone
);

module.exports = router;
