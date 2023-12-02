// Importaciones necesarias:
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

// Importaciones de las rutas:
const createUser = require("./routes/createUser.routes");

// Middlewares:
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Rutas:
app.use("/", createUser);

// Exportación del servidor:
module.exports = app;
