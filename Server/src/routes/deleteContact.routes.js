const express = require("express");
const deleteContact = require("../controllers/Contact/deleteContact");
const router = express.Router();

router.delete("/delete-contact/:contactId", deleteContact);

module.exports = router;
