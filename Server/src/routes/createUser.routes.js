const express = require("express");
const createUser = require("../controllers/User/createUser");
const router = express.Router();

router.post("/create-user", createUser);

module.exports = router;
