const { Contact } = require("../../dataBase");

const getAllContactsDeleted = async (req, res) => {
  try {
    // Modificar la consulta para incluir solo los contactos no eliminados
    const contacts = await Contact.findAll({
      where: {
        deleted: true,
      },
    });

    if (contacts.length > 0) {
      console.log(contacts);
      return res.status(200).json(contacts);
    }

    return res.status(404).json(contacts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getAllContactsDeleted;
