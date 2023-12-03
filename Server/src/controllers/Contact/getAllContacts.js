const { Contact } = require("../../dataBase");

const getAllusers = async (req, res) => {
  try {
    const users = await Contact.findAll({
      where: {
        deleted: false,
      },
      order: [["contactId", "ASC"]],
    });

    console.log(users);

    if (users.length > 0) {
      console.log(users);
      return res.status(200).json(users);
    }

    return res.status(404).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getAllusers;
