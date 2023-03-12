const { auth } = require('../../middlewear/auth')
const {signup } = require('./controller/controller')

const router=require('express').Router()
router.post("/signup",signup)

module.exports=router