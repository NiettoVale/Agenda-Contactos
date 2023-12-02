const { Contact } = require("../../dataBase");

const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.findAll();
    if (contacts.length > 0) {
      return res.status(200).json(contacts);
    }
    return res.status(404).json({ error: "No hay contactos cargados." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getAllContacts;
