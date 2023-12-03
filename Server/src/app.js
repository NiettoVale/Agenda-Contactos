// Importaciones necesarias:
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

// Importaciones de las rutas:
const createUser = require("./routes/createUser.routes");
const loginUser = require("./routes/loginUser.routes");
const createContact = require("./routes/createContact.routes");
const deleteContact = require("./routes/deleteContact.routes");
const updateContact = require("./routes/updateContact.routes");
const getAllContacts = require("./routes/getAllContacts.routes");
const getContactByName = require("./routes/getContactByName.routes");
const getAllContactsDeleted = require("./routes/getAllContactsDeleted");

// Middlewares:
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Rutas:
app.use("/", createUser);
app.use("/", loginUser);
app.use("/", createContact);
app.use("/", deleteContact);
app.use("/", updateContact);
app.use("/", getAllContacts);
app.use("/", getContactByName);
app.use("/", getAllContactsDeleted);

// Exportación del servidor:
module.exports = app;
