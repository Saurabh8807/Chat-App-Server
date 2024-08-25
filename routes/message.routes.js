const express = require('express');
const router = express.Router()
const {
sendMessage,
allMessages
} = require("../controller/message.controller");

const { protect } = require('../middleware/auth.middleware')


router.route("/").post(protect,sendMessage);
router.route('/:chatId').get(protect,allMessages);


module.exports = router