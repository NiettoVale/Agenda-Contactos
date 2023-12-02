const express = require("express");
const getContacts = require("../controllers/Contact/getAllContacts");
const router = express.Router();

router.get("/contacts", getContacts);

module.exports = router;
