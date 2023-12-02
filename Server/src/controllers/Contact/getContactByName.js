const { Contact } = require("../../dataBase");

const getContactByName = async (req, res) => {
  const name = req.params.name;
  try {
    const contact = await Contact.findOne({ where: { name } });

    if (contact) {
      res.status(200).json(contact);
    } else {
      res.status(404).json({ error: "Contacto no encontrado." });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getContactByName;
