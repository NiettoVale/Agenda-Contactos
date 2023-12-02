const express = require("express");
const updateContact = require("../controllers/Contact/updateContact");
const router = express.Router();

router.put("/update-contact/:id", updateContact);

module.exports = router;
