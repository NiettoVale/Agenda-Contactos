const express = require("express");
const getAllContactsDeleted = require("../controllers/Contact/getAllContactsDeleted");
const router = express.Router();

router.get("/contacts-deleted", getAllContactsDeleted);

module.exports = router;
