const { Contact } = require("../../dataBase");

const deleteUser = async (req, res) => {
  try {
    const { contactId } = req.params;

    await Contact.update(
      { deleted: true },
      {
        where: {
          contactId,
        },
      }
    );
    return res.status(200).json({ message: "Contacto eliminado con éxito!!!" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = deleteUser;
