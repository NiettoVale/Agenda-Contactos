// validation.js

const validateUserInput = (userName, password) => {
  const errors = [];

  if (!userName || typeof userName !== "string") {
    errors.push(
      "Nombre de usuario es requerido y debe ser una cadena de texto."
    );
  }

  if (!password || typeof password !== "string") {
    errors.push("Contraseña es requerida y debe ser una cadena de texto.");
  }

  // Agrega más validaciones según tus requisitos

  return errors;
};

module.exports = { validateUserInput };
