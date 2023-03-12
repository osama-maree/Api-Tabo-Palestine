const { signIn } = require("./controller/controller");

const router = require("express").Router();

router.get('/signin',signIn)
module.exports = router;