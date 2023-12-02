const bcrypt = require("bcryptjs");

const encrypt = async (textPlain) => {
  const hash = await bcrypt.hash(textPlain, 10);
  return hash;
};

const compare = async (textPlain, hashText) => {
  return await bcrypt.compare(textPlain, hashText);
};

module.exports = {
  encrypt,
  compare,
};
