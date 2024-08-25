const express = require("express");
const {registerUser,authUser,allUsers} = require("../controller/user.controller.js")
const { protect } = require("../middleware/auth.middleware.js")
const router = express.Router()


router.route("/").post(registerUser).get(protect,allUsers)
router.post('/login',authUser)


module.exports = router