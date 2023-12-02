// Importaciones necesarias:
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

// Importaciones de las rutas:
const createUser = require("./routes/createUser.routes");
const loginUser = require("./routes/loginUser.routes");

// Middlewares:
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Rutas:
app.use("/", createUser);
app.use("/", loginUser);

// Exportación del servidor:
module.exports = app;
