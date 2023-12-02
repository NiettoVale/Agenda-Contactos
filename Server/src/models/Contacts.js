const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Contact",
    {
      contactId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },

      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      location: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },

      deleted: {
        type: DataTypes.STRING,
        defaultValue: false,
        allowNull: true,
      },
    },
    { timestamps: false }
  );
};
