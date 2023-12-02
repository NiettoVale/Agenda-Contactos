const express = require("express");
const deleteContact = require("../controllers/Contact/deleteContact");
const router = express.Router();

router.delete("/create-contact/:id", deleteContact);

module.exports = router;
