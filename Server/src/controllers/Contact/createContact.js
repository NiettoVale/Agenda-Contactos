const { Contact } = require("../../dataBase");

const createContact = async (req, res) => {
  try {
    const { name, email, phone, location } = req.body;

    // Validaciones básicas
    if (!name || typeof name !== "string") {
      return res.status(400).json({
        error: "El nombre es requerido y debe ser una cadena de texto.",
      });
    }

    if (!email || typeof email !== "string" || !isValidEmail(email)) {
      return res.status(400).json({
        error: "El correo electrónico es requerido y debe ser válido.",
      });
    }

    if (!phone || typeof phone !== "string") {
      return res.status(400).json({
        error: "El teléfono es requerido y debe ser válido.",
      });
    }

    const newContact = await Contact.create({ name, email, phone, location });
    res.status(201).json(newContact);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Función para validar el formato del correo electrónico
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

module.exports = createContact;
