const { signIn } = require("./controller/controller");
//osma dsvfsfs
const router = require("express").Router();

router.get('/signin',signIn)
module.exports = router;
