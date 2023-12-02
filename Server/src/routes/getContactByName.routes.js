const express = require("express");
const getContactByName = require("../controllers/Contact/getContactByName");
const router = express.Router();

router.get("/contact/:name", getContactByName);

module.exports = router;
