const { signIn } = require("./controller/controller");
//osma
const router = require("express").Router();

router.get('/signin',signIn)
module.exports = router;