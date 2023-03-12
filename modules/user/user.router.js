const { auth } = require("../../middlewear/auth");
const { myMulter, multerValidation, HME } = require("../../services/multer");
const role = require("../../services/role.js");

const {
  land_Mortgaga,
  land_sale,
  inheritance_transfer,
  land_fragmentation,
  allLand,
  land_sorting,
  getMortgaga,
  Land_sale2,
  inheritance_Transfer,
  land_fragmentation_trans,
  getLand_sorting,
} = require("./controller/controller");

const router = require("express").Router();
router.post(
  "/create_land_Mortgaga",
  auth([role.user]),
  myMulter(multerValidation.pdf).fields([
    { name: "titleDeed" },
    { name: "userID" },
    { name: "nextID" },
    { name: "legal" },
    { name: "insurance" },
    { name: "book" },
    { name: "request" },
  ]),
  HME,
  land_Mortgaga
);
router.post(
  "/create_land_sale",
  auth([role.user]),
  myMulter(multerValidation.image).fields([
    { name: "kushan" },
    { name: "saler" },
    { name: "boughter" },
    { name: "describe" },
    { name: "municipal" },
    { name: "mony" },
    { name: "contract" },
  ]),
  HME,
  land_sale
);

router.post(
  "/create_tnheritance_transfer",
  auth([role.user]),
  myMulter(multerValidation.pdf).fields([
    { name: "limit" },
    { name: "kushan" },
    { name: "municipal" },
    { name: "money" },
    { name: "imagesOfInhert" },
    { name: "outer" },
  ]),
  HME,
  inheritance_transfer
);


router.post(
  "/create_land_fragmentation",
  auth([role.user]),
  myMulter(multerValidation.pdf).fields([
    { name: "titleDeed" },
    { name: "separeterImage" },
    { name: "sitePlan" },
    { name: "areaChart" },
    { name: "municipal" },
    { name: "money" },
    { name: "transReport" },
    { name: "detectReport" },
    { name: "changeState" },
  ]),
  HME,
  land_fragmentation
);
//not completed?! i think its Done
router.post(
  "/create_land_sorting",
  auth([role.user]),
  myMulter(multerValidation.pdf).fields([
    { name: "titleDeed" },
    { name: "separeterImage" },
    { name: "sitePlan" },
    { name: "areaChart" },
    { name: "municipal" },
    { name: "money" },
    { name: "transReport" },
    { name: "detectReport" },
    { name: "changeState" },
    { name: "court" },
    { name: "doBook" },
  ]),
  HME,
  land_sorting
);

router.get('/allLand',auth([role.user]),allLand);
router.get("/Mortgaga_trans", auth([role.user]), getMortgaga);
router.get("/land_sale", auth([role.user]), Land_sale2);
router.get("/tnheritance_transfer", auth([role.user]), inheritance_Transfer);
router.get("/land_fragmentation", auth([role.user]), land_fragmentation_trans);
router.get("/land_sorting", auth([role.user]), getLand_sorting);


module.exports = router;
