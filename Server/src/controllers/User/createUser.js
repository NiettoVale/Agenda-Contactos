// createUser.js

const { User } = require("../../dataBase");
const { encrypt } = require("./Handlers/handleCrypt");
const { validateUserInput } = require("./Handlers/validations");

const createUser = async (req, res) => {
  try {
    const { userName, password } = req.body;

    // Realizamos las validaciones correspondientes:
    const validationErrors = validateUserInput(userName, password);
    console.log(validationErrors);

    if (validationErrors.length > 0) {
      return res.status(400).json({ errors: validationErrors });
    }

    // Si pasan las validaciones procedemos a crear el registro:
    // Hasheamos la contraseña:
    const hashPassword = await encrypt(password);

    await User.create({
      userName,
      password: hashPassword,
    });

    // Devolvemos el código de estado correspondiente si todo sale bien:
    return res.status(200).json({ message: "Usuario creado con éxito." });
  } catch (error) {
    // Si hubo algún error lo informamos:
    return res.status(500).json({ error: error.message });
  }
};

module.exports = createUser;
