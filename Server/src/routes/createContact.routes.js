const express = require("express");
const createContact = require("../controllers/Contact/createContact");
const router = express.Router();

router.post("/create-contact", createContact);

module.exports = router;
