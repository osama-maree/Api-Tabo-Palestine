const { signIn } = require("./controller/controller");
//osma dsvfsfsf
const router = require("express").Router();

router.get('/signin',signIn)
module.exports = router;
