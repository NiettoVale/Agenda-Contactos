const { Contact } = require("../../dataBase");

const updateContact = async (req, res) => {
  try {
    const contactId = req.params.id;
    const { name, email, phone, deleted, location } = req.body;

    const contact = await Contact.findByPk(contactId);

    if (name !== undefined && name !== "") {
      contact.name = name;
    }

    if (email !== undefined && email !== "") {
      contact.email = email;
    }

    if (phone !== undefined && phone !== "") {
      contact.phone = phone;
    }

    if (location !== undefined && location !== "") {
      contact.location = location;
    }

    if (deleted !== undefined && deleted !== "") {
      contact.deleted = deleted;
    }

    if (contact.changed()) {
      await contact.save();
      return res
        .status(200)
        .json({ message: "Contacto actualizado con exito" });
    }
    return res.status(200).json({ message: "No hubo cambios para actualizar" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = updateContact;
