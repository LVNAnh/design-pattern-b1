const express = require("express");
const { AddUser, GetUser } = require("../controllers/user.controller");

const router = express.Router();

router.post("/add", AddUser);
router.get("/get", GetUser);

module.exports = router;
