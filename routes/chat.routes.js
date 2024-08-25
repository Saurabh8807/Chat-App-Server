const express = require('express');
const router = express.Router()
const {
  accesssChat,
  fetchChat,
  createGroupChat,
  renameGroup,
  addToGroup,
  removeFromGroup
} = require("../controller/chat.controller");

const { protect } = require('../middleware/auth.middleware')


router.route("/").post(protect,accesssChat);
router.route('/').get(protect,fetchChat);
router.route('/group').post(protect,createGroupChat);
router.route("/rename").put(protect, renameGroup);
router.route("/groupremove").put(protect, removeFromGroup);
router.route("/groupadd").put(protect, addToGroup);


module.exports = router