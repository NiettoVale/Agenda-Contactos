const { User } = require("../../dataBase");
const { compare } = require("./Handlers/handleCrypt");

const loginUser = async (req, res) => {
  try {
    const { userName, password } = req.body;

    // Buscamos al usuario en la base de datos por el nombre de usuario
    const user = await User.findOne({ where: { userName } });

    if (!user) {
      return res.status(401).json({ error: "Usuario no encontrado." });
    }

    // Comparamos la contraseña proporcionada con el hash almacenado
    const isPasswordValid = await compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Contraseña incorrecta." });
    }

    // Devolvemos el código de estado correspondiente si todo sale bien:
    return res.status(200).json({ message: "Inicio de sesión exitoso." });
  } catch (error) {
    // Si hubo algún error lo informamos:
    return res.status(500).json({ error: error.message });
  }
};

module.exports = loginUser;
